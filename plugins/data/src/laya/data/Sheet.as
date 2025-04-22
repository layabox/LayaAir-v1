package laya.data {
	import laya.utils.Handler;
	
	/**
	 * 数据表，由excel导出的表数据，以数组方式存储，可以通过add，del，update增加删除更新
	 * 如果excel里面有id字段，则会用ID作为key索引，通过getByID(id)查询，否则可以通过get(index)查询
	 */
	public class Sheet extends Array {
		/**添加数据*/
		public static var TYPE_ADD:int = 0;
		/**更新数据*/
		public static var TYPE_UPDATE:int = 1;
		/**删除数据*/
		public static var TYPE_DEL:int = 2;
		/**删除根据ID删除*/
		public static var TYPE_DEL_BYID:int = 3;
		/**全部类型，只用于触发器设置*/
		public static var TYPE_ALL:int = 100;
		
		/**表名称*/
		public var name:String;
		/**@private */
		public var _table:Table;
		/**@private ID索引*/
		private var _map:Object = {};
		
		/**
		 * 数据表类
		 * @param	name 数据表名称
		 */
		public function Sheet(name:String) {
			this.name = name;
		}
		
		/**
		 * 向表里面增加一条数据
		 * @param	data	数据
		 * @param	sendEvent	数据改变是否派发事件
		 */
		public function add(data:*, sendEvent:Boolean = true):uint {
			var index:uint = super.push.call(this, data)-1;
			if (data.id) {
				_map[data.id] = data;
				data._$index = index;
			}
			if (sendEvent) {
				notify(name);
				Table.runTrigger(name, TYPE_ADD, data, index);
			}
			return index;
		}
		
		/**
		 * 复制一张表到此表中
		 * @param	arr 表数据
		 */
		public function addByArray(arr:Array):void {
			for (var i:int = 0, n:int = arr.length; i < n; i++) {
				add(arr[i], false);
			}
			notify(name);
		}
		
		/**
		 * 根据索引删除一条数据
		 */
		public function del(index:int):* {
			var data:* = this[index];
			if (data) {
				splice(index, 1);
				if (_map[data.id]) {
					_map[data.id] = null;
					//更新索引
					for (var i:int = index, n:int = length; i < n; i++) {
						this[i]._$index = i;
					}
				}
				notify(name);
				Table.runTrigger(name, TYPE_DEL, data, index);
			}
			return data;
		}
		
		/**
		 * 根据ID删除数据
		 * @param	id id索引
		 */
		public function delByID(id:*):* {
			var data:* = _map[id];
			if (data) {
				var index:* = data._$index;
				if (index != null) {
					return del(index);
				}
			}
			return null;
		}
		
		/**派发一个事件*/
		public function notify(key:String):void {
			_table && _table.notify(key);
		}
		
		/**
		 * 更新表数据
		 */
		public function update(index:int, key:String, value:*):void {
			var data:* = this[index];
			if (data && data.hasOwnProperty(key)) {
				var lastValue:* = data[key];
				data[key] = value;
				notify(name);
				Table.runTrigger(name, TYPE_UPDATE, data, key, lastValue);
			}
		}
		
		/*[IF-SCRIPT-BEGIN]
		   override function push(...rest):uint {
		   for (var i:int = 0,n:int=rest.length; i < n; i++) {
		   var item:* = rest[i];
		   return this.add(item);
		   }
		   return -1;
		   }
		   [IF-SCRIPT-END]*/
		
		/**
		 * 根据索引获取一条数据
		 */
		public function get(index:int):* {
			return this[index];
		}
		
		/**
		 * 根据ID获取一条数据，如果没找到，则返回为空
		 */
		public function getByID(id:*):* {
			return _map[id];
		}
		
		/**
		 * 加载数据表，可以加载单独的地址或者地址数组
		 * @param	url 表url路径或者路径数组，加载完成后，将使用文件名作为表名索引存储
		 * @param	complete 加载完成回调
		 */
		public static function load(url:*, complete:Handler = null):void {
			Table.I.load(url, complete);
		}
		
		/**
		 * 根据表名获取整张表
		 * @param	sheetName 表名
		 * @return	返回数据表集合
		 */
		public static function get(sheetName:String):Sheet {
			return Table.I.get(sheetName);
		}
		
		/**
		 * 是否存在某张表（表是否加载）
		 * @param	sheetName 表名
		 * @return	返回是否存在
		 */
		public static function has(sheetName:String):Boolean {
			return Table.I.has(sheetName);
		}
		
		/**
		 * 根据表名及索引获取表中某条数据
		 * @param	sheetName	表名
		 * @param	index	数组索引
		 * @return	返回具体的模型数据
		 */
		public static function getData(sheetName:String, index:int):* {
			return Table.I.getData(sheetName, index);
		}
		
		/**
		 * 根据表名及ID获取表中某条数据
		 * @param	sheetName	表名
		 * @param	id	id索引
		 * @return	返回具体的模型数据
		 */
		public static function getByID(sheetName:String, id:String):* {
			return Table.I.getByID(sheetName, id);
		}
		
		/**@private */
		public static function createByID(sheetName:String, id:String):* {
			return Table.I.createByID(sheetName, id);
		}
		
		/**派发一个事件*/
		public static function notify(key:String):void {
			Table.I.notify(key);
		}
	}
}