package laya.server.net
{
	import laya.utils.Pool;
	import laya.utils.Utils;
	import laya.server.rpg.PlayerBase;

	/**
	 * 在子类的构造函数中设置options。
	 * 除了options，还有一些公开方法可以设置socket服务器。
	 * 
	 * 更多参见：
	 * https://github.com/websockets/ws/blob/master/doc/ws.md
	 * 
	 * @author survivor
	 */
	public class SocketServer
	{
		///////////////////
		// Static Member //
		///////////////////
		/** SocketServer的运行时类（子类） */
		public static var runTimeClass:Class;
		
		/** 单例引用 */
		public static var I:SocketServer;

		///////////////////
		// Public Member //
		///////////////////
		/**
		 * Socket服务器选项，用户只需要在子类中对它赋值即可。
		 * 之所以访问权限是public，是因为Platform需要设置它的端口号
		 */
		public static var options:SocketServerOptions = new SocketServerOptions();

		/**
		 * 保存所有已连接的客户端。仅在options.clientTracking为true时有效
		 */
		public function get clients():Array
		{
			return server.clients;
		}
		
		//////////////////////
		// Protected Member //
		//////////////////////
		protected var server:Object;  // web socket server引用

		// WebSocketServer EVENTS
		protected static const CONNECTION : String = "connection";
		protected static const ERROR      : String = "error";
		protected static const HEADERS    : String = "headers";
		protected static const LISTENING  : String = "listening";
		
		public function SocketServer()
		{
		}
		
		/**
		 * 使用options的选项创建服务器
		 */
		private function start():void
		{
			// 在electron中运行使用ws模块；
			// 在nodejs中运行使用uws模块；
			const modual:String   = (__JS__("process").argv[0].indexOf("electron") != -1) ? "ws":"uws";
			const WebSocket:* = __JS__("require")(modual);
			
			// 调试的时候无视port（这时候port也是null），使用debugPort
			if(GameServer.debug)
				options.port = options.debugPort;
			
			server = new WebSocket.Server(options);
			server.on(SocketServer.CONNECTION, Utils.bind(clientConnected, this));
			
			trace(options.host || 'localhost' + ' listen on ' + options.port);			
		}
		
		/**
		 * 在debug模式下，被GameServer调用；
		 * 非debug模式下，被Platform调用；
		 */
		public static function runServer():void
		{
			I = new runTimeClass();
			I.start();
		}
		
		/**
		 * 客户端连接到服务器时触发。
		 * @param channel	客户端Socket引用
		 */
		private function clientConnected(channel:*):void
		{
			
			CSCommunicator.I.watchClient(channel);
		}
		
		/**
		 * 监听事件。事件侦听器的this指向socket。
		 * 
		 * @param eventName	事件名称
		 * @param callback	事件侦听器的this指向socket
		 * 
		 */
		protected function on(eventName:String, callback:Function):void
		{
			server.on(eventName, callback);
		}
		
		/**
		 * 关闭服务，并且终止所有客户端。完成时调用callback
		 * 
		 * 参见：
		 * https://github.com/websockets/ws/blob/master/doc/ws.md
		 * 
		 * @param callback
		 */
		public function close(callback:Function):void 
		{
			server.close(callback);
		}
		
		/**
		 * 处理HTTP升级请求。当HTTP server在内部创建或者通过server选项传入时，该方法会被自动调用。如果是"noServer"模式，该方法需要手动调用。
		 * 
		 * 参见：
		 * https://github.com/websockets/ws/blob/master/doc/ws.md
		 * 
		 * @param request	http.IncomingMessage，客户端HTTP GET请求
		 * @param socket	net.Socket，客户端和服务端间的网络socket
		 * @param head		Buffer，第一个升级流的数据包
		 * @param callback	如果升级成功，callback会被调用，并带有WebSocket对象作为参数
		 * 
		 */
		public function handleUpgrade(request:Object, socket:Object, head:Object, callback:Function):void
		{
			server.handleUpgrade(request, socket, head, callback);
		}
		
		/**
		 * 是否一个给定的请求应该由该服务器处理。
		 * 默认情况下这个方法验证请求的路径名，匹配提供的对path选项。
		 *
		 * 参见：
		 * https://github.com/websockets/ws/blob/master/doc/ws.md
		 * 
		 * @param request	http.IncomingMessage，客户端HTTP GET请求
		 * @return true为接受握手
		 */
		public function shouldHandle(request:Object):Boolean
		{
			return server.shouldHandle(request);
		}
	}
}