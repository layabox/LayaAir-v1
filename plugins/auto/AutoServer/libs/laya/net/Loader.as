package laya.net {
	import laya.events.Event;
	import laya.events.EventDispatcher;
	import laya.utils.Utils;
	
	/**
	 * 加载进度发生改变时调度。
	 * @eventType Event.PROGRESS
	 * */
	[Event(name = "progress", type = "laya.events.Event")]
	/**
	 * 加载完成后调度。
	 * @eventType Event.COMPLETE
	 * */
	[Event(name = "complete", type = "laya.events.Event")]
	/**
	 * 加载出错时调度。
	 * @eventType Event.ERROR
	 * */
	[Event(name = "error", type = "laya.events.Event")]
	
	/**
	 * <code>Loader</code> 类可用来加载文本、JSON、XML、二进制、图像等资源。
	 */
	public class Loader extends EventDispatcher {
		/** 文本类型，加载完成后返回文本。*/
		public static const TEXT:String = "text";
		/** JSON 类型，加载完成后返回json数据。*/
		public static const JSON:String = "json";
		/** XML 类型，加载完成后返回domXML。*/
		public static const XML:String = "xml";
		/** 二进制类型，加载完成后返回arraybuffer二进制数据。*/
		public static const BUFFER:String = "arraybuffer";
		
		/** 文件后缀和类型对应表。*/
		public static var typeMap:Object = /*[STATIC SAFE]*/ {"txt": "text", "json": "json", "xml": "xml"};
		/** 资源分组对应表。*/
		public static const groupMap:Object = {};
		/** 每帧回调最大超时时间，如果超时，则下帧再处理。*/
		public static var maxTimeOut:int = 100;
		/** @private 已加载的资源池。*/
		public static const loadedMap:Object = {};
		/**@private */
		protected static var _loaders:Array = [];
		/**@private */
		protected static var _isWorking:Boolean = false;
		/**@private */
		protected static var _startIndex:int = 0;
		
		/**@private 加载后的数据对象，只读*/
		public var _data:*;
		/**@private */
		protected var _url:String;
		/**@private */
		protected var _type:String;
		/**@private */
		protected var _cache:Boolean;
		/**@private */
		private var _fs:*;
		
		/**
		 * 加载资源。加载错误会派发 Event.ERROR 事件，参数为错误信息。
		 * @param	url			资源地址。
		 * @param	type		(default = null)资源类型。可选值为：Loader.TEXT、Loader.JSON、Loader.XML、Loader.BUFFER、Loader.IMAGE、Loader.SOUND、Loader.ATLAS、Loader.FONT。如果为null，则根据文件后缀分析类型。
		 * @param	cache		(default = true)是否缓存数据。
		 * @param	group		(default = null)分组名称。
		 * @param	ignoreCache (default = false)是否忽略缓存，强制重新加载。
		 */
		public function load(url:String, type:String = null, cache:Boolean = true, group:String = null, ignoreCache:Boolean = false):void {
			this._url = url;
			this._type = type || (type = getTypeFromUrl(url));
			this._cache = cache;
			this._data = null;
			url = URL.formatURL(url);
			
			if (!ignoreCache && loadedMap[url]) {
				this._data = loadedMap[url];
				event(Event.PROGRESS, 1);
				event(Event.COMPLETE, this._data);
				return;
			}
			if (group) setGroup(url, group);
			
			_fs = _fs || require("fs");
			_fs.readFile(url, function(err:*, data:*):void {
				if (err) onError(err.message) 
				else complete(data);			
			});
		}
		
		/**
		 * 获取指定资源地址的数据类型。
		 * @param	url 资源地址。
		 * @return 数据类型。
		 */
		protected function getTypeFromUrl(url:String):String {
			var type:String = Utils.getFileExtension(url);
			if (type) return typeMap[type];
			console.warn("Not recognize the resources suffix", url);
			return "text";
		}
		
		/**@private */
		protected function onError(message:String):void {
			trace(message);
			event(Event.ERROR, message);
		}
		
		/**
		 * 加载完成。
		 * @param	data 加载的数据。
		 */
		protected function complete(data:*):void {
			this._data = data;
			_loaders.push(this);
			if (!_isWorking) checkNext();
		}
		
		/** @private */
		private static function checkNext():void {
			_isWorking = true;
			var startTimer:Number = Date.now();
			var thisTimer:Number = startTimer;
			while (_startIndex < _loaders.length) {
				thisTimer = Date.now();
				_loaders[_startIndex].endLoad();
				_startIndex++;
				if (Date.now() - startTimer > maxTimeOut) {
					console.warn("loader callback cost a long time:" + (Date.now() - startTimer) + " url=" + _loaders[_startIndex - 1].url);
					Laya.timer.frameOnce(1, null, checkNext);
					return;
				}
			}
			
			_loaders.length = 0;
			_startIndex = 0;
			_isWorking = false;
		}
		
		/**
		 * 结束加载，处理是否缓存及派发完成事件 <code>Event.COMPLETE</code> 。
		 * @param	content 加载后的数据
		 */
		public function endLoad(content:* = null):void {
			content && (this._data = content);
			if (this._cache) cacheRes(this._url, this._data);
			
			event(Event.PROGRESS, 1);
			event(Event.COMPLETE, data is Array ? [data] : data);
		}
		
		/** 加载地址。*/
		public function get url():String {
			return _url;
		}
		
		/**加载类型。*/
		public function get type():String {
			return _type;
		}
		
		/**是否缓存。*/
		public function get cache():Boolean {
			return _cache;
		}
		
		/**返回的数据。*/
		public function get data():* {
			return _data;
		}
		
		/**
		 * 清理指定资源地址的缓存。
		 * 如果是Texture，则采用引用计数方式销毁，【注意】如果图片本身在自动合集里面（默认图片小于512*512），内存是不能被销毁的，此图片被大图合集管理器管理
		 * @param	url 资源地址。
		 * @param	forceDispose 是否强制销毁，有些资源是采用引用计数方式销毁，如果forceDispose=true，则忽略引用计数，直接销毁，比如Texture，默认为false
		 */
		public static function clearRes(url:String, forceDispose:Boolean = false):void {
			url = URL.formatURL(url);
		}
		
		/**
		 * 获取指定资源地址的资源。
		 * @param	url 资源地址。
		 * @return	返回资源。
		 */
		public static function getRes(url:String):* {
			return loadedMap[URL.formatURL(url)];
		}
		
		/**
		 * 缓存资源。
		 * @param	url 资源地址。
		 * @param	data 要缓存的内容。
		 */
		public static function cacheRes(url:String, data:*):void {
			url = URL.formatURL(url);
			if (loadedMap[url] != null) {
				console.warn("Resources already exist,is repeated loading:", url);
			} else {
				loadedMap[url] = data;
			}
		}
		
		/**
		 * 设置资源分组。
		 * @param url 资源地址。
		 * @param group 分组名。
		 */
		public static function setGroup(url:String, group:String):void {
			if (!groupMap[group]) groupMap[group] = [];
			groupMap[group].push(url);
		}
		
		/**
		 * 根据分组清理资源。
		 * @param group 分组名。
		 */
		public static function clearResByGroup(group:String):void {
			if (!groupMap[group]) return;
			var arr:Array = groupMap[group], i:int, len:int = arr.length;
			for (i = 0; i < len; i++) {
				clearRes(arr[i]);
			}
			arr.length = 0;
		}
	}
}