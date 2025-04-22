package laya.server.rpg {
	import laya.data.IMessage;
	import laya.data.MessageUtils;
	import laya.data.Table;
	import laya.server.core.IRecoverable;
	import laya.utils.Byte;

	/**
	 * 玩家模块就是一个信息集合体，本身不包含逻辑处理。逻辑处理被组合进PlayerBase子类。比如使用QuadTree进行碰撞处理，PlayerBase的子类会组合一个Rect。
	 * <p>
	 * PlayerBase的实例不需要手动创建，在CSCommunicator中，客户端连接和断开时，会自动被对象池分配和回收。
	 * </p>
	 */
	public class PlayerBase implements IRecoverable
	{
		private static var byte:Byte = new Byte();
		public var id:int;
		public var room:RoomBase;
		public var socket:*;
		public var table:Table;
		
		public function afterRecover():void
		{
			id = 0;
			room = null;
			socket = null;
		}
		
		public function beforeReuse():void
		{
			
		}
		
		
		public function send(message:IMessage):void{
			byte.clear();
			MessageUtils.writeMessageToByte(byte, message);
			socket.send(byte.buffer);
		}
	}
}