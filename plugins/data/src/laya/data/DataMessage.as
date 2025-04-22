package laya.data {
	import laya.data.MessageBase;
	import laya.utils.ClassUtils;
	
	/**
	 * 数据更改消息
	 */
	public class DataMessage extends MessageBase {
		/**单例*/
		public static var I:DataMessage = new DataMessage();
		
		public var type:int;
		public var sheetName:String;
		public var data:*;
		public var index:int;
		public var key:String;
		public var value:*;
		public var oldValue:*;
		public var operation:String;
		private var _table:Table;
		
		/**@private */
		public static const DES:Array = [["type", MessageBase.UINT8], ["index", MessageBase.UINT32], ["sheetName", MessageBase.STRING], ["key", MessageBase.STRING], ["data", MessageBase.DYNAMIC], ["operation", MessageBase.STRING]];
		
		/**@private */
		public function getClass(field:String = null):* {
			return ClassUtils.getClass("db." + sheetName + "Data");
		}
		
		/**@private */
		public function run(operation:String, table:Table = null):Boolean {
			this._table = table || Table.I;
			//TODO:写入日志
			trace(operation, sheetName, type == 0 ? "add" : type == 1 ? "del" : "update");
			this.operation = operation;
			var sheet:Sheet = this._table.get(sheetName);
			if (!sheet) {
				if (Actuator.main) Actuator.stop("can not find sheet " + sheetName);
				return false;
			}
			switch (type) {
			case Sheet.TYPE_ADD: 
				sheet.add(this.data);
				break;
			case Sheet.TYPE_UPDATE: 
				var oldData:* = sheet[index];
				if (oldData && oldData.hasOwnProperty(key)) {
					oldValue = oldData[key];
					if (value == null) {
						sheet.update(index, key, this.data[key]);
					} else {
						sheet.update(index, key, value);
					}
					this.data = oldData;
				} else {
					Actuator.stop("Cannot modify key that does not exist");
				}
				break;
			case Sheet.TYPE_DEL: 
				if (index > -1 && index < sheet.length) {
					this.data = sheet.del(index);
				} else {
					Actuator.stop("Cannot delete sheet " + sheetName + " by index " + index);
				}
				break;
			case Sheet.TYPE_DEL_BYID: 
				var index:int = data._$index;
				this.data = sheet.del(index);
				break;
			}
			return true;
		}
		
		/**@private */
		public function rollBack():Boolean {
			var sheet:Sheet = _table.get(sheetName);
			switch (type) {
			case Sheet.TYPE_ADD: 
				sheet.pop();
				break;
			case Sheet.TYPE_UPDATE: 
				var data:* = sheet[index];
				if (data && data.hasOwnProperty(key)) {
					//TODO:客户端恢复会有问题
					data[key] = oldValue;
				}
				break;
			case Sheet.TYPE_DEL: 
				sheet.splice(index, 0, data);
				break;
			case Sheet.TYPE_DEL_BYID: 
				var index:int = data._$index;
				sheet.splice(index, 0, data);
				break;
			}
			//TODO:写入日志
			trace("roll back:", operation);
			return true;
		}
		
		/**
		 * 设置同步的数据
		 * @param	sheetName 	表名称
		 * @param	type		操作类型：Sheet.TYPE_ADD:添加数据 Sheet.TYPE_UPDATE:更改数据 Sheet.TYPE_DEL:根据index删除数据 Sheet.TYPE_DEL_BYID:根据id删除数据
		 * @param	index		索引位置
		 * @param	key			如果是更新，则为更新的字段名称，否则不用填写
		 * @param	data		一条数据实例，必须是sheetName对应的类的实例，删除操作时，data可以为空，其他情况data不能为空
		 * @param	operation	操作代码（原因）
		 */
		public function setData(sheetName:String, type:int, index:int, key:String, data:*, operation:String = ""):void {
			this.sheetName = sheetName;
			this.type = type;
			this.index = index;
			this.key = key;
			this.data = data;
			this.operation = operation;
			if (type !== 1 && data == null) {
				throw "data is null!";
			}
		}
	}
}