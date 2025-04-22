package laya.tbplugin.mini
{
	import laya.events.Event;
	import laya.events.EventDispatcher;
	import laya.media.SoundManager;
	import laya.net.URL;
	import laya.utils.Handler;
	
	/** @private **/
	public class MiniSound extends EventDispatcher {
		/**@private **/
		private static var _id:int = 0;
		/**@private **/
		public var _sound:*;
		/**
		 * @private
		 * 声音URL
		 */
		public var url:String;
		/**
		 * @private
		 * 是否已加载完成
		 */
		public var loaded:Boolean = false;
		/**@private **/
		public var readyUrl:String;
		/**@private **/
		private static var _audioCache:Array = [];
		
		public function MiniSound() {
			_sound = _createSound();
		}
		
		/** @private **/
		private static function _createSound():* {
			return null;
			//if(_audioCache.length){
				//return _audioCache.pop();
			//}else{
				//_id++;
				//return TBPluginAdapter.window.my.createInnerAudioContext();
			//}
		}
		
		/**
		 * @private
		 * 加载声音。
		 * @param url 地址。
		 *
		 */
		public function load(url:String):void {
			event(Event.ERROR,"Not support play sound");
			return;
			if (!MiniFileMgr.isLocalNativeFile(url)) {
				url = URL.formatURL(url);
			}else
			{
				if (url.indexOf("http://") != -1 || url.indexOf("https://") != -1)
				{
					if(MiniFileMgr.loadPath != "")
					{
						url = url.split(MiniFileMgr.loadPath)[1];//去掉http头
					}else
					{
						var tempStr:String = URL.rootPath != "" ? URL.rootPath : URL.basePath;
						if(tempStr != "")
							url = url.split(tempStr)[1];//去掉http头
					}
				}
			}
			this.url = url;
			this.readyUrl = url;
			if(TBPluginAdapter.autoCacheFile&&MiniFileMgr.getFileInfo(url))
			{
				onDownLoadCallBack(url,0);
			}else
			{
				if(!TBPluginAdapter.autoCacheFile)
				{
					onDownLoadCallBack(url,0);
				}else
				{
                    if (MiniFileMgr.isLocalNativeFile(url))
					{
						tempStr = URL.rootPath != "" ? URL.rootPath : URL.basePath;
                        var tempUrl:String = url;
                        if(tempStr != "")
                            url = url.split(tempStr)[1];//去掉http头
                        if (!url){
                            url = tempUrl;
                        }
						//分包目录资源加载处理
						if (TBPluginAdapter.subNativeFiles && TBPluginAdapter.subNativeheads.length == 0)
						{
							for (var key:* in TBPluginAdapter.subNativeFiles)
							{
								var tempArr:Array = TBPluginAdapter.subNativeFiles[key];
								TBPluginAdapter.subNativeheads = TBPluginAdapter.subNativeheads.concat(tempArr);
								for (var aa:int = 0; aa < tempArr.length;aa++)
								{
									TBPluginAdapter.subMaps[tempArr[aa]] = key + "/" + tempArr[aa];
								}
							}
						}
						//判断当前的url是否为分包映射路径
						if(TBPluginAdapter.subNativeFiles && url.indexOf("/") != -1)
						{
							var curfileHead:String = url.split("/")[0] + "/";//文件头
							if(curfileHead && TBPluginAdapter.subNativeheads.indexOf(curfileHead) != -1)
							{
								var newfileHead:String = TBPluginAdapter.subMaps[curfileHead];
								url = url.replace(curfileHead,newfileHead);
							}
						}
                        onDownLoadCallBack(url,0);
					}else
					{
						if ((url.indexOf("http://") == -1 && url.indexOf("https://") == -1) 
						|| url.indexOf(TBPluginAdapter.window.my.env.USER_DATA_PATH) != -1) {
							this.onDownLoadCallBack(url, 0);
						}else{
							MiniFileMgr.downOtherFiles(url, Handler.create(this, onDownLoadCallBack, [url]), url, TBPluginAdapter.autoCacheFile);
						}
					}
				}
			}
		}
		
		/**@private **/
		private function onDownLoadCallBack(sourceUrl:String,errorCode:int,tempFilePath:String = ""):void
		{
			if (!errorCode && this._sound)
			{
				var fileNativeUrl:String;
				if(TBPluginAdapter.autoCacheFile)
				{
					if(tempFilePath == "")
					{
						if (MiniFileMgr.isLocalNativeFile(sourceUrl)) {
							var tempStr:string = URL.rootPath != "" ? URL.rootPath : URL._basePath;
							var tempUrl:string = sourceUrl;
							if(tempStr != "" && (sourceUrl.indexOf("http://") != -1 || sourceUrl.indexOf("https://") != -1))
								fileNativeUrl = sourceUrl.split(tempStr)[1];//去掉http头
							if(!fileNativeUrl)
							{
								fileNativeUrl = tempUrl;
							}
							fileNativeUrl = TBPluginAdapter.baseDir + fileNativeUrl;
						}else{
							var fileObj:Object = MiniFileMgr.getFileInfo(sourceUrl);
							if(fileObj && fileObj.md5)
							{
								var fileMd5Name:String = fileObj.md5;
								fileNativeUrl = MiniFileMgr.getFileNativePath(fileMd5Name);
							}else
							{
								if (sourceUrl.indexOf("http://") == -1 
									&& sourceUrl.indexOf("https://") == -1
									&& sourceUrl.indexOf(TBPluginAdapter.window.my.env.USER_DATA_PATH)==-1) 
								{
										fileNativeUrl = TBPluginAdapter.baseDir + sourceUrl;
								} else {
									
									fileNativeUrl = sourceUrl;
								}
							}
						}
					}else
					{
						fileNativeUrl = tempFilePath;
					}
					_sound.src = url =  fileNativeUrl;
				}else
				{
					if(MiniFileMgr.isLocalNativeFile(sourceUrl)||
					(
						sourceUrl.indexOf("http://") == -1 
						&&sourceUrl.indexOf("https://") == -1
						&&sourceUrl.indexOf(TBPluginAdapter.window.my.env.USER_DATA_PATH)==-1
					)){
						sourceUrl = TBPluginAdapter.baseDir + sourceUrl;
					}
					_sound.src = sourceUrl;
				}
				
			}else
			{
				this.event(Event.ERROR);
			}
		}
		
		/**
		 * @private
		 * 播放声音。
		 * @param startTime 开始时间,单位秒
		 * @param loops 循环次数,0表示一直循环
		 * @return 声道 SoundChannel 对象。
		 *
		 */
		public function play(startTime:Number = 0, loops:Number = 0):MiniSoundChannel {
			//if (!url)
			return null;
			var channel:MiniSoundChannel = new MiniSoundChannel(this);
			channel.url = this.url;
			channel.loops = loops;
			channel.loop = (loops === 0 ? true : false);
			channel.startTime = startTime;
			//channel.play();
			channel.isStopped = false;
			SoundManager.addChannel(channel);
			return channel;
		}
		
		/**
		 * @private
		 * 获取总时间。
		 */
		public function get duration():Number {
			return _sound.duration;
		}
		
		/**
		 * @private
		 * 释放声音资源。
		 *
		 */
		public function dispose():void {
			if (_sound) {
				_sound.src = "";
				_audioCache.push(_sound);
				_sound = null;
				readyUrl = url = null;
			}
		}
	}
}