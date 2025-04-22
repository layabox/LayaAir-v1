package laya.data {
	
	/**
	 * 数据库，原子数据操作，失败回滚
	 */
	public class Actuator {
		/**@private */
		public static var main:Actuator;
		private var _cmds:Array = [];
		/**错误信息*/
		public var error:String;
		
		public static function create():Actuator {
			//TODO:
			return new Actuator();
		}
		
		/**
		 * 添加一条数据
		 * @param	sheetName 	表名称
		 * @param	data		数据结构
		 * @param	reason		原因
		 */
		public function add(sheetName:String, data:*):void {
			var msg:DataMessage = new DataMessage();
			msg.type = Sheet.TYPE_ADD;
			msg.sheetName = sheetName;
			msg.data = data;
			_cmds.push(msg);
		}
		
		/**
		 * 删除一条数据
		 * @param	sheetName 	表名称
		 * @param	index		数据结构
		 * @param	reason		原因
		 */
		public function del(sheetName:String, index:int):void {
			var msg:DataMessage = new DataMessage();
			msg.type = Sheet.TYPE_DEL;
			msg.sheetName = sheetName;
			msg.index = index;
			_cmds.push(msg);
		}
		
		/**
		 * 根据ID删除一条数据
		 * @param	sheetName 	表名称
		 * @param	index		数据结构
		 * @param	reason		原因
		 */
		public function delByID(sheetName:String, id:*):void {
			var msg:DataMessage = new DataMessage();
			msg.type = Sheet.TYPE_DEL_BYID;
			msg.sheetName = sheetName;
			msg.index = id;
			_cmds.push(msg);
		}
		
		/**
		 * 更改数据
		 * @param	sheetName	表名称
		 * @param	key			字段名称
		 * @param	value		修改值
		 * @param	reason		原因
		 * @param	index		行索引，默认为0
		 */
		public function update(sheetName:String, key:String, value:*, index:int = 0):void {
			var msg:DataMessage = new DataMessage();
			msg.type = Sheet.TYPE_UPDATE;
			msg.sheetName = sheetName;
			msg.index = index;
			msg.key = key;
			msg.value = value;
			_cmds.push(msg);
		}
		
		/**
		 * 执行操作
		 * @return	返回成功或者失败信息
		 */
		public function run(operation:String, player:*):Boolean {
			trace("------start:", operation, "------");
			main = this;
			//触发器可能导致新的命令产生
			for (var i:int = 0; i < _cmds.length; i++) {
				DataMessage(_cmds[i]).run(operation, player.table);
				if (error) {
					_rollBack(i);
					break;
				}
			}
			
			if (error) {
				ErrorMessage.I.error = error;
				if (player) player.send(ErrorMessage.I);
			} else {
				//发送到客户端
				if (player) {
					for (var j:int = 0, n:int = _cmds.length; j < n; j++) {
						player.send(_cmds[j]);
					}
				}
			}
			_clear();
			return error == null;
		}
		
		/**
		 * 停止当前执行器
		 * @param	reason 停止的原因
		 */
		public static function stop(reason:String):void {
			trace(reason);
			if (main) main.error = reason;
		}
		
		private function _clear():void {
			error = null;
			_cmds.length = 0;
			//TODO：复用
		}
		
		private function _rollBack(index:int):void {
			trace("------rollback(" + error + ")------");
			for (var i:int = index; i > -1; i--) {
				DataMessage(_cmds[i]).rollBack();
			}
		}
	}
}