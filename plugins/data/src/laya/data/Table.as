package laya.data {
	import laya.events.EventDispatcher;
	import laya.net.Loader;
	import laya.net.URL;
	import laya.utils.Byte;
	import laya.utils.ClassUtils;
	import laya.utils.Handler;
	import laya.utils.Pool;
	
	/**
	 * 数据表
	 */
	public class Table {
		/**单例*/
		public static var I:Table = new Table();
		/**数据变化通知器*/
		public var notifer:EventDispatcher = new EventDispatcher();
		/**@private */
		private var _notifies:Object = {};
		/**@private */
		private var _notifyCont:int = 0;
		/**@private */
		private var _sheets:Object = {};
		
		/**
		 * 增加一张数据表
		 * @param	key 	表名称
		 * @param	sheet	表对象
		 */
		public function add(key:String, sheet:Sheet):void {
			_sheets[key] = sheet;
			sheet._table = this;
			notify(key);
		}
		
		/**
		 * 删除表
		 * @param	key	表名称
		 */
		public function del(key:String):void {
			delete _sheets[key];
		}
		
		/**
		 * 加载数据表，可以加载单独的地址或者地址数组
		 * @param	url 表url路径或者路径数组，加载完成后，将使用文件名作为表名索引存储
		 * @param	complete 加载完成回调
		 */
		public function load(url:*, complete:Handler = null):void {
			var loads:Array = [];
			if (url is Array) {
				var i:int, len:int;
				len = url.length;
				for (i = 0; i < len; i++) {
					loads.push({url: url[i], type: Loader.BUFFER});
				}
			} else if (url is String) {
				loads.push({url: url, type: Loader.BUFFER});
			}
			Laya.loader.load(loads, Handler.create(this, _dataLoaded, [url, complete]));
		}
		
		/**@private */
		private function _dataLoaded(url:*, complete:Handler):void {
			if (url is Array) {
				var i:int, len:int;
				len = url.length;
				for (i = 0; i < len; i++) {
					_dealLoadedData(url[i]);
				}
			} else if (url is String) {
				_dealLoadedData(url);
			}
			if (complete) complete.run();
		}
		
		/**@private */
		private function _dealLoadedData(url:String):void {
			var fileName:String = URL.getFileName(url).split(".")[0];
			if (_sheets[fileName]) return;
			var buffer:* = Loader.getRes(url);
			if (buffer) {
				var byte:Byte = new Byte(buffer);
				var data:Sheet = DataDecoder.decodeData(byte, fileName);
				add(fileName, data);
			}
		}
		
		/**
		 * 根据表名获取整张表
		 * @param	sheetName 表名
		 * @return	返回数据表集合
		 */
		public function get(sheetName:String):Sheet {
			return _sheets[sheetName];
		}
		
		/**
		 * 是否存在某张表（表是否加载）
		 * @param	sheetName 表名
		 * @return	返回是否存在
		 */
		public function has(sheetName:String):Boolean {
			return _sheets[sheetName] != null;
		}
		
		/**
		 * 根据表名及索引获取表中某条数据
		 * @param	sheetName	表名
		 * @param	index	数组索引
		 * @return	返回具体的模型数据
		 */
		public function getData(sheetName:String, index:int):* {
			var sheet:Sheet = _sheets[sheetName];
			if (!sheet) return null;
			return sheet.get(index);
		}
		
		/**
		 * 根据表名及ID获取表中某条数据
		 * @param	sheetName	表名
		 * @param	id	id索引
		 * @return	返回具体的模型数据
		 */
		public function getByID(sheetName:String, id:String):* {
			var sheet:Sheet = _sheets[sheetName];
			if (!sheet) return null;
			return sheet.getByID(id);
		}
		
		/**
		 * 通知表数据发生变化，相同的key会被过滤，只派发一次
		 */
		public function notify(key:String):void {
			_notifies[key] = true;
			Laya.timer.callLater(this, _sendNotify);
		}
		
		private function _sendNotify():void {
			_notifyCont++;
			for (var key:String in _notifies) {
				if (_notifies[key]) {
					_notifies[key] = null;
					notifer.event(key);
				}
			}
			if (_notifyCont > 50) _notifies = {};
		}
		
		//{key:[],data:{[id:[1,1,1,2],id:[1,1,1,2]}}
		/**@private */
		public function createByID(sheetName:String, id:String):* {
			//所有类都从对象池创建
			var keys:Array = _sheets[sheetName].key;
			var values:Array = _sheets[sheetName].data[id];
			var box:*;
			var comp:*;
			for (var i:int = 0, n:int = keys.length; i < n; i++) {
				var key:String = keys[i];
				var value:String = values[i];
				if (key === "ClassName") {
					comp = Pool.getItemByClass(value, ClassUtils.getClass(value));
					if (!box) box = comp;
					else box.addPlugin(null, comp);
				} else if (key === "var") {
					box && (box[key] = comp);
				} else if (comp) {
					if (comp.hasOwnProperty(key)) comp[key] = value;
				}
			}
			box.init || box.init();
			return box;
		}
		
		//{sheet:[[name,fun],[],[]]}
		private static var _triggers:Object = {};
		
		/**
		 * 增加触发器
		 * @param	name 		触发器名称
		 * @param	sheetName	表名
		 * @param	type 		Sheet.TYPE_ADD:添加,Sheet.TYPE_UPDATE:更新,Sheet.TYPE_DEL:删除,Sheet.TYPE_ALL:全部类型
		 * @param	fun			回调函数，触发器执行后，自动返回data，key，lastValue，即执行fun(data,key,lastValue)，key定义：添加删除操作为索引，更新为字段名称，lastValue只有更新才有，返回上次值
		 */
		public static function addTrigger(name:String, sheetName:String, type:int, fun:Function):void {
			var sheet:Array = _triggers[sheetName];
			if (!sheet) {
				sheet = [[], [], []];
				_triggers[sheetName] = sheet;
			}
			if (type === Sheet.TYPE_ALL) {
				sheet[Sheet.TYPE_ADD].push(name, fun);
				sheet[Sheet.TYPE_UPDATE].push(name, fun);
				sheet[Sheet.TYPE_DEL].push(name, fun);
			} else {
				sheet[type].push(name, fun);
			}
		}
		
		/**
		 * 删除触发器
		 * @param	name	触发器名称
		 * @param	sheetName 表名称
		 */
		public static function delTrigger(name:String, sheetName:String):void {
			var sheet:Array = _triggers[sheetName];
			if (sheet) {
				for (var j:int = 0; j < 3; j++) {
					var arr:Array = sheet[j];
					if (arr && arr.length > 0) {
						for (var i:int = 0, n:int = arr.length; i < n; i += 2) {
							var key:String = arr[i];
							if (key === name) {
								arr.splice(i, 2);
								n -= 2;
							}
						}
					}
				}
			}
		}
		
		/**@private */
		public static function runTrigger(sheetName:String, type:int, data:*, key:*, lastValue:* = null):void {
			var sheet:Array = _triggers[sheetName];
			if (sheet) {
				var arr:Array = sheet[type];
				if (arr && arr.length > 0) {
					for (var i:int = 0, n:int = arr.length; i < n; i++) {
						var name:String = arr[i++];
						var fun:Function = arr[i];
						trace("runTrigger", name);
						fun(data, key, lastValue);
					}
				}
			}
		}
	}
}