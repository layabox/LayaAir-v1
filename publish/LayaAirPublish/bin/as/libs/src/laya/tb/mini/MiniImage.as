package laya.tb.mini
{
	import laya.events.Event;
	import laya.net.URL;
	import laya.resource.HTMLImage;
	import laya.utils.Browser;
	import laya.utils.Handler;
	
	/** @private **/
	public class MiniImage {
		
		/**@private **/
		protected function _loadImage(url:String):void {
			var thisLoader:* = this;
			url = URL.formatURL(url);
			//非本地文件处理
			if (MiniFileMgr.isLocalNativeFile(url) || (url.indexOf("http://") == -1 && url.indexOf("https://") == -1)) {
				if (url.indexOf(TBMiniAdapter.window.my.env.USER_DATA_PATH)!=-1) 
				{
					onCreateImage(url, thisLoader, false, url);//本地加载文件
				}else{
					if(MiniFileMgr.loadPath != "")
					{
						url = url.split(MiniFileMgr.loadPath)[1];//去掉http头
					}else
					{
						var tempStr:String = URL.rootPath != "" ? URL.rootPath : URL.basePath;
						var tempUrl:String = url;
						if(tempStr != "")
							url = url.split(tempStr)[1];//去掉http头
						if(!url)
						{
							url = tempUrl;
						}
					}
						
					onCreateImage(url, thisLoader, true);//直接读取本地文件，非加载缓存的图片
				}
			}else
			{
				onCreateImage(url, thisLoader, false, encodeURI(url));//外网图片加载
			}
		}
		
		/**
		 * @private 
		 * 创建图片对象
		 * @param sourceUrl
		 * @param thisLoader
		 * @param isLocal 本地图片(没有经过存储的,实际存在的图片，需要开发者自己管理更新)
		 * @param tempFilePath 加载的临时地址
		 */
		private static function onCreateImage(sourceUrl:String, thisLoader:*, isLocal:Boolean = false,tempFilePath:String= ""):void {
			
			var fileNativeUrl:String;
			if (!isLocal){
				if (tempFilePath != "")
				{
					fileNativeUrl = tempFilePath;
				}else
				{
					fileNativeUrl = sourceUrl;
				}
			}
			else
			{
				if (MiniFileMgr.isSubNativeFile(sourceUrl)) 
				{
					fileNativeUrl = sourceUrl;
				}else
					fileNativeUrl = TBMiniAdapter.baseDir + sourceUrl;
			}
				
			if (thisLoader.imgCache == null)
				thisLoader.imgCache = {};
			var image:*;
			function clear():void {
				image.onload = null;
				image.onerror = null;
				delete thisLoader.imgCache[sourceUrl];
			}
			var onload:Function = function():void {
				clear();
				thisLoader.onLoaded(image);
			};
			var onerror:Function = function():void {
				clear();
				delete MiniFileMgr.filesListObj[sourceUrl];
				delete MiniFileMgr.fakeObj[sourceUrl];
				thisLoader.event(Event.ERROR, "Load image failed");
			}
			if (thisLoader._type == "nativeimage") {
				image = new Browser.window.Image();
				image.crossOrigin = "";
				image.onload = onload;
				image.onerror = onerror;
				image.src = fileNativeUrl;
				//增加引用，防止垃圾回收
				thisLoader.imgCache[sourceUrl] = image;
			} else {
				new HTMLImage.create(fileNativeUrl, {onload: onload, onerror: onerror, onCreate: function(img:*):void {
					image = img;
					//增加引用，防止垃圾回收
					thisLoader.imgCache[sourceUrl] = img;
				}});
			}
		}
	}
}

