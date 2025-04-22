package {
	import laya.data.DataMessage;
	import laya.data.ErrorMessage;
	import laya.data.GameSocket;
	import laya.data.IMessage;
	import laya.data.Sheet;
	import laya.data.Table;
	
	/**
	 * 消息中心
	 */
	public class MessageCenter {
		private var socket:GameSocket;
		public static var I:MessageCenter = new MessageCenter();
		
		public function start(ip:String, port:int):void {
			socket = new GameSocket();
			socket.connect(ip, port);
			socket.on("message", this, onMessage);
		}
		
		private function onMessage(msg:IMessage):void {
			trace(msg);
			if (msg is DataMessage) {
				DataMessage(msg).run(null);
			} else if(msg is ErrorMessage) {
				alert(ErrorMessage(msg).error);
			}else if (msg is SyncSheetSM) {
				syncSheet(msg as SyncSheetSM);
			}
		}
		
		public function syncSheet(msg:SyncSheetSM):void {
			var sheet:Sheet = new Sheet(msg.sheetName);
			sheet.addByArray(msg.data);
			Table.I.add(msg.sheetName, sheet);
		}
		
		public function send(msg:IMessage):void {
			socket.send(msg);
		}
	}
}