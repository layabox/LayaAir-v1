package laya.server.net
{
	/**
	 * 详情参见：
	 * https://github.com/websockets/ws/blob/master/doc/ws.md
	 * @author survivor
	 */
	public class SocketServerOptions
	{
		/** server绑定的主机名 */
		public var host:String;
		
		/** server绑定的端口号，用户不需要设置 */
		public var port:int;
		public var debugPort:int = 9000;
		
		/** 等待连接的队列的最大长度。 */
		public var backlog:int;
		
		/**
		 * http.Server|https.Server
		 * <p>预先创建的Node.js HTTP server</p>
		 */
		public var server:Object;
		
		/** 用来验证传入的连接的函数  */
		public var verifyClient:Function;
		
		/** 用来处理WebSocket subprotocols */
		public var handleProtocols:Function;
		
		/** 只接受匹配该路径的连接 */
		public var path:String;
		
		/** 启用no server模式  */
		public var noServer:Boolean;
		
		/** 是否追踪用户 */
		public var clientTracking:Boolean;
		
		/** 启用permessage-deflate */
		public var perMessageDeflate:Object;
		
		/** 最大允许的消息字节数 */
		public var maxPayload:int;
	}
}