package laya.data {
	import laya.events.Event;
	import laya.events.EventDispatcher;
	import laya.net.Socket;
	import laya.utils.Byte;
	
	/**
	 * GameSocket封装了游戏Socket连接，提供收发Socket消息功能
	 * 收发消息类型必须为IMessage类型，消息为二进制格式，一般只需继承自MessageBase类
	 * MessageBase类实现了消息的自动序列化和反序列化
	 */
	public class GameSocket extends EventDispatcher {
		/**连接成功后派发*/
		public static const SERVER_SUCCESS:String = "success";
		/**连接失败后派发*/
		public static const SERVER_ERROR:String = "error";
		/**连接关闭后派发*/
		public static const SERVER_CLOSE:String = "close";
		
		/**是否打印消息信息*/
		public var traceEnabled:Boolean = false;
		protected var _socket:Socket;
		
		/**
		 * 连接到socket服务器
		 * @param	ip 服务器IP
		 * @param	port 服务器端口
		 */
		public function connect(ip:String = "10.10.20.4", port:int = 8011):void {
			if (!_socket) {
				if (traceEnabled) trace("try connect new+" + "ip：" + ip + "port:" + port);
				_socket = new Socket(ip, port, Byte);
				_socket.endian = Socket.LITTLE_ENDIAN;
				_socket.on(Event.OPEN, this, onConnect);
				_socket.on(Event.MESSAGE, this, onMessage);
				_socket.on(Event.ERROR, this, onError);
				_socket.on(Event.CLOSE, this, onClose);
			} else {
				if (traceEnabled) trace("try connect old +" + "ip：" + ip + "port:" + port);
				_socket.close();
				_socket.connect(ip, port);
			}
		}
		
		/**
		 * 连接到socket服务器
		 * @param	serverUrl 服务器url
		 */
		public function connectByUrl(serverUrl:String):void
		{
			if (!_socket) {
				if (traceEnabled) trace("try connect new+ server:" + serverUrl);
				_socket = new Socket();
				_socket.endian = Socket.LITTLE_ENDIAN;
				_socket.on(Event.OPEN, this, onConnect);
				_socket.on(Event.MESSAGE, this, onMessage);
				_socket.on(Event.ERROR, this, onError);
				_socket.on(Event.CLOSE, this, onClose);
				_socket.connectByUrl(serverUrl);
			} else {
				if (traceEnabled) trace("try connect old + server:" + serverUrl);
				_socket.close();
				_socket.connectByUrl(serverUrl);
			}
		}
		
		/**
		 * 关闭socket连接
		 */
		public function close():void {
			if (!_socket) return;
			if (traceEnabled) trace("close Socket");
			var s:Socket = _socket;
			_socket = null;
			s.close();
		}
		
		/**
		 * 连接成功的回调函数
		 */
		private function onConnect():void {
			if (traceEnabled) trace("socket onConnect。");
			event(SERVER_SUCCESS);
		}
		
		/**
		 * 客户端接SMsg
		 * 获取消息
		 */
		protected function onMessage(data:*):void {
			if (!_socket || !_socket.input) return;
			var byte:Byte = _socket.input;
			while (byte.bytesAvailable > 0) {
				var tMsg:IMessage = MessageUtils.readMessageFromByte(byte);
				//if (traceEnabled) trace("receive:", JSON.stringify(tMsg));
				if (traceEnabled) trace("receive:", tMsg);
				event("message", tMsg);
			}
		}
		
		private function onError(e:Event):void {
			if (traceEnabled) trace("socket error", e);
			event(SERVER_ERROR);
		}
		
		private function onClose(e:*):void {
			if (traceEnabled) trace("socket close", e);
			event(SERVER_CLOSE);
		}
		
		/**
		 * 发送消息
		 * @param	msg 发送消息
		 */
		public function send(msg:IMessage):void {
			if (!_socket || !_socket.output) return;
			if (traceEnabled) trace("send:", msg);
			MessageUtils.writeMessageToByte(_socket.output, msg);
			_socket.flush();
		}
	}
}