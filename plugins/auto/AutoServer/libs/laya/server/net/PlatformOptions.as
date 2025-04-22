package laya.server.net
{
	/**
	 * 平台器选项
	 * 
	 * @author survivor
	 * 
	 */
	public class PlatformOptions
	{
		/** true连接广域网，false连接局域网 */
		public var connectToWAN:Boolean;
		
		/** 局域网主服务器地址 */
		public var platformURL_LAN:String;
		/** 广域网主服务器地址 */
		public var platformURL_WAN:String;
		
		/** 局域网服务器id */
		public var serverID_LAN:int;
		/** 广域网服务器id */
		public var serverID_WAN:int;
		
		/**
		 * 根据 <code>connectToWAN</code> 获取主服务器地址
		 * @return 主服务器地址
		 */
		public function getCenterServerURL():String
		{
			return connectToWAN ? platformURL_WAN : platformURL_LAN;
		}
		
		/**
		 * 根据 <code>connectToWAN</code> 获取服务器id
		 * @return 服务器id
		 */
		public function getServerID():int
		{
			return connectToWAN ? serverID_WAN : serverID_LAN;
		}
	}
}