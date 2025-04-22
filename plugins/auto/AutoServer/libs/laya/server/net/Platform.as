package laya.server.net
{
	import laya.utils.Utils;
	

	/**
	 * Platform负责游戏服务器与平台通信。
	 * Platform的子类可以
	 *
	 * - 重写connectSucceeded处理连接上平台
	 * - 重写connectFailed处理连接平台失败
	 * - 重写listenMessages侦听来自平台的消息，会被connectSucceeded调用
	 *
	 * 在listenMessages里我们已经监听了“创建房间“和”用户进入“两个消息。通过
	 *
	 * - 重写onCreateRoom修改创建房间逻辑
	 * - 重写onUserIntoRoom修改用户进入房间的逻辑
	 *
	 * @author survivor
	 */
	public class Platform
	{
		public static var I:Platform;
		
		protected var options:PlatformOptions = new PlatformOptions();
		
		protected var l8Client:Object;

		private var fs  :* = __JS__('require')('fs');
		private var path:* = __JS__('require')('path');
		
		//发出
		protected static var CREATE_ROOM_OK  : String = "game.created";
		protected static var ROOM_START      : String = "game.restart";
		protected static var USER_JOIN_GAME  : String = "game.join";
		protected static var USER_LEAVE_GAME : String = "game.leave";
		protected static var DESTROY_GAME    : String = "game.destroy";
		protected static var START_GAME      : String = "game.restart";
		
		protected static var CREATE_ROOM   : String = "room.create";
		protected static var USER_INTOROOM : String = "room.usrin";

		public function Platform()
		{
			var _l8ClientClz:Class = __JS__('require')("./conn/index.js").Laya8Client;
			l8Client = new _l8ClientClz();
		}
		
		/**
		 * 非debug模式下被GameServer调用
		 */
		public function connectToPlatform():void
		{
			l8Client.open(
				options.getCenterServerURL(), 
				options.getServerID(),
				Utils.bind(onL8ClientRespond, this));
			
			trace("Master Server URL: " + options.getCenterServerURL());
			trace("Server ID: " + options.getServerID());
		}

		private function onL8ClientRespond(err:Error, data:Object):void
		{
			if(err)
				connectFailed(err);
			else
				connectSucceeded(data);
		}
		
		/**
		 * 重写connectFailed处理连接平台失败
		 * 
		 * @param err error
		 */
		protected function connectFailed(err:Error):void
		{
			trace(err);
		}
		
		/**
		 * 重写connectSucceeded处理连接上平台
		 * 
		 * @param data	如 {id:50101, idc:1, ip:"10.10.20.62", link:null, port:9001, type:5}
		 */
		protected function connectSucceeded(data:Object):void
		{
			trace("l8 client connected.");
			
			SocketServer.options.port = data.port;
			SocketServer.runServer();
			
			listenMessages();			
		}
		
		/**
		 * 重写listenMessages侦听来自平台的消息，会被connectSucceeded调用
		 */
		protected function listenMessages():void
		{
			l8Client.on(CREATE_ROOM,   Utils.bind(onCreateRoom, this));
			l8Client.on(USER_INTOROOM, Utils.bind(onUserIntoRoom, this));
		}

		/**
		 * 重写onCreateRoom修改创建房间逻辑
		 * 
		 * @param msg  消息类型为Platform静态常量
		 * @param data 如{type: "1", roomid: "15", roomname: "AUTO", force: "0", linkId: 40001}
		 */
		protected function onCreateRoom(msg:String , data: Object):void
		{
			trace("[onCreateRoom]",msg,data);
			var roomid:int = parseInt(data.roomid);
			GameServer.I.addRoom(roomid, data.roomname,parseInt(data.type));
			
			// 创建房间后回复平台
			var d:Object = {};
			d.url = CREATE_ROOM_OK;
			d.params = {"roomid": roomid, "ret": 0};
			send(d, data.linkId);
		}
		
		/**
		 * 重写onUserIntoRoom修改用户进入房间的逻辑
		 * 
		 * @param msg	消息类型为Platform静态常量
		 * @param data	如{ aip: ""avtor: "1"gender: "0"grade: "1"key: "64438"level: "1"linkId: 40001memberendtime: "0"money: "0"nip: ""nkname: "★~★剑圣"referee: "0"roomid: "15"spid: "308"team: "0"userid: "1074278293"username: "5a84a8b2e6a29ad9bf761bdd14a7ac1d" }
		 */
		protected function onUserIntoRoom(msg:String, data: Object):void
		{
			var roomId:int = parseInt(data.roomid);
			var userId:int = parseInt(data.userid);
			var key:int    = parseInt(data.key);
			
			// 保留数据，在客户端连接时，用roomId和key验证
			GameServer.I.userKeys[userId] = {roomId: roomId, key: data.key};
		}
		
		/**
		 * 向平台发送数据
		 * @param data
		 * @param linkId
		 * 
		 */
		public function send(data:Object, linkId:int = 0):void
		{
			l8Client.send(data, linkId);
		}
		
		public function getGameID():Number
		{
			return __JS__('this._l8Client.gameId');
		}
		
		public function close():void
		{
			l8Client.close();
		}
		
		/**
		 * 检查当前实例是否已经连接到Master Server
		 *
		 * @return
		 */
		public function isConnected():Boolean 
		{
			return l8Client.getIsConnected();
		}
	}
}