package laya.tb.mini
{
	import laya.events.Event;
	import laya.events.EventDispatcher;
	import laya.net.Loader;
	import laya.net.ResourceVersion;
	import laya.net.URL;
	import laya.utils.Handler;
	import laya.utils.Utils;
	
	/** @private **/
	public class MiniLoader  extends EventDispatcher  {
		/**@private 加载文件列表**/
		private static var _fileTypeArr:Array = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
		
		public function MiniLoader() {
		}
		
		/**
		 * @private 
		 * @param url
		 * @param type
		 * @param cache
		 * @param group
		 * @param ignoreCache
		 */
		private function load(url:String, type:String = null, cache:Boolean = true, group:String = null, ignoreCache:Boolean = false):void {
			var thisLoader:* = this;
			thisLoader._url = url;
			if (url.indexOf("data:image") === 0) thisLoader._type = type = Loader.IMAGE;
			else {
				thisLoader._type = type || (type = thisLoader.getTypeFromUrl(url));
			}
			thisLoader._cache = cache;
			thisLoader._data = null;
			
			if (!ignoreCache && Loader.loadedMap[URL.formatURL(url)]) {
				thisLoader._data = Loader.loadedMap[URL.formatURL(url)];
				event(Event.PROGRESS, 1);
				event(Event.COMPLETE, thisLoader._data);
				return;
			}
			
			//如果自定义了解析器，则自己解析
			if (Loader.parserMap[type] != null) {
				thisLoader._customParse = true;
				if (Loader.parserMap[type] is Handler) Loader.parserMap[type].runWith(this);
				else Loader.parserMap[type].call(null, this);
				return;
			}
			
			if (MiniFileMgr.isLocalNativeFile(url) && !MiniFileMgr.getFileInfo(url)) 
			{//如果是本地文件 处理分包
				if (TBMiniGameAdapter.subNativeFiles && TBMiniGameAdapter.subNativeheads.length == 0)
				{
					for (var key:* in TBMiniGameAdapter.subNativeFiles)
					{
						var tempArr:Array = TBMiniGameAdapter.subNativeFiles[key];
						TBMiniGameAdapter.subNativeheads = TBMiniGameAdapter.subNativeheads.concat(tempArr);
						for (var aa:int = 0; aa < tempArr.length;aa++)
						{
							TBMiniGameAdapter.subMaps[tempArr[aa]] = key + "/" + tempArr[aa];
						}
					}
				}
				
				//判断当前的url是否为分包映射路径
				if(TBMiniGameAdapter.subNativeFiles && url.indexOf("/") != -1)
				{
					var curfileHead:String = url.split("/")[0]  +"/";//文件头
					if(curfileHead && TBMiniGameAdapter.subNativeheads.indexOf(curfileHead) != -1)
					{
						var newfileHead:String = TBMiniGameAdapter.subMaps[curfileHead];
						url = url.replace(curfileHead,newfileHead);
					}
				}
			}
			
			
			var encoding:String = TBMiniGameAdapter.getUrlEncode(url,type);
			var urlType:String = Utils.getFileExtension(url);
			if ((_fileTypeArr.indexOf(urlType) != -1) || type == Loader.IMAGE) {
				//图片通过miniImage去加载
				TBMiniGameAdapter.EnvConfig.load.call(this, url, type, cache, group, ignoreCache);
			} else {
				if (!MiniFileMgr.getFileInfo(url)) {
					if (MiniFileMgr.isLocalNativeFile(url)) {
						//临时，因为微信不支持以下文件格式
						//直接读取本地，非网络加载缓存的资源
						if (MiniFileMgr.isSubNativeFile(url)) 
						{
							MiniFileMgr.readFile(ResourceVersion.addVersionPrefix(url),encoding,new Handler(MiniLoader, onReadNativeCallBack, [encoding, url, type, cache, group, ignoreCache, thisLoader]));
						}else
							MiniFileMgr.readFile(TBMiniGameAdapter.baseDir + ResourceVersion.addVersionPrefix(url),encoding,new Handler(MiniLoader, onReadNativeCallBack, [encoding, url, type, cache, group, ignoreCache, thisLoader]));
					}else{
						var tempUrl:String = url;
						var tempurl:String=URL.formatURL(url);
						//读取本地磁盘非写入的文件，只是检测文件是否需要本地读取还是外围加载
						fileObj = MiniFileMgr.getFileInfo(url);
						if(fileObj)
						{
							fileObj.encoding = fileObj.encoding == null ? "utf8" : fileObj.encoding;
							MiniFileMgr.readFile(fileObj.url, encoding, new Handler(MiniLoader, onReadNativeCallBack, [encoding, url, type, cache, group, ignoreCache, thisLoader]), url);
						}
						else
						{
							url = URL.formatURL(url);
							if(type != Loader.IMAGE && ((url.indexOf("http://") == -1 && url.indexOf("https://") == -1)))
							{//本地路径
								MiniFileMgr.readFile(TBMiniGameAdapter.baseDir + url, encoding, new Handler(MiniLoader, onReadNativeCallBack, [encoding, url, type, cache, group, ignoreCache, thisLoader]), url);
							}else
							{
								MiniFileMgr.downFiles(encodeURI(url), encoding, new Handler(MiniLoader, onReadNativeCallBack, [encoding, url, type, cache, group, ignoreCache, thisLoader]), url, TBMiniGameAdapter.AutoCacheDownFile);
							}
						}
					}
				} else {
					//读取本地磁盘非写入的文件，只是检测文件是否需要本地读取还是外围加载
					var fileObj:Object = MiniFileMgr.getFileInfo(URL.formatURL(url));
					fileObj.encoding = fileObj.encoding == null ? "utf8" : fileObj.encoding;
					var nativepath:String = MiniFileMgr.getFileNativePath(fileObj.md5);
					MiniFileMgr.readFile(nativepath, fileObj.encoding, new Handler(MiniLoader, onReadNativeCallBack, [encoding, url, type, cache, group, ignoreCache, thisLoader]), url);
				}
			}
		}
		
		/**
		 * @private 
		 * @param url
		 * @param thisLoader
		 * @param errorCode
		 * @param data
		 *
		 */
		private static function onReadNativeCallBack(encoding:String, url:String, type:String = null, cache:Boolean = true, group:String = null, ignoreCache:Boolean = false, thisLoader:* = null, errorCode:int = 0, data:Object = null):void {
			if (!errorCode) {
				//文本文件读取本地存在
				var tempData:Object;
				if (type == Loader.JSON || type == Loader.ATLAS) {
					tempData = TBMiniGameAdapter.getJson(data.data);
				} else if (type == Loader.XML) {
					tempData = Utils.parseXMLFromString(data.data);
				} else {
					tempData = data.data;
				}
				thisLoader.onLoaded(tempData);
			} else if (errorCode == 1) {
				//远端文件加载走xmlhttprequest
				//trace("-----------本地加载失败，尝试外网加载----");
				//TBMiniGameAdapter.EnvConfig.load.call(thisLoader, url, type, cache, group, ignoreCache);
				thisLoader.onError && thisLoader.onError(data);
			}
		}
	}
}