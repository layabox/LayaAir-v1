package laya.server.net {
	import laya.events.EventDispatcher;
	import laya.utils.Pool;
	import laya.server.rpg.PlayerBase;
	import laya.server.rpg.RoomBase;
	
	[Event(name="addRoom")]
	[Event(name="removeRoom")]

	/**
	 * GameServer是游戏服务器核心类。管理Socket服务器、房间以及分配房间。
	 */
	public class GameServer extends EventDispatcher
	{
		// 事件常量值
		/** 添加游戏房间时触发 */
		public static const ADD_ROOM    : String = "addRoom";
		/** 移除游戏房间时触发 */
		public static const REMOVE_ROOM : String = "removeRoom";
		
		// 尽量使用简短的key值
		// room在对象池中的记号
		public static const POOL_SIGN_ROOM:String = "r";
		// player在对象池中的记号
		public static const POOL_SIGN_PLAYER:String = "p";
		
		/** 单例引用 */
		public static var I : GameServer;
		
		// Socket服务器 & 主服务器
		private var socketServer : SocketServer;
		
		// 保存在游戏服务器的数据
		/** 所有拥有id的（除了room）对象都会保存在这里 */
		public var idMap   : Array = [];
		/** 所有玩家都被保存在这里 */
		public var players : Array = [];
		/** 所有房间都被保存在这里 */
		public var rooms   : Array = [];
		
		// 在连接Platform时，Platform会通知有客户端连接，这时平台带着key属性，用这个属性验证客户端合法性
		public var userKeys: Array = [];
		
		// 子类映射，虽然是public，只在内部使用
		// RoomBase的子类的引用
		public static var roomClass   : Class;
		// PlayerBase子类的引用
		public static var playerClass : Class;

		public static var debug:Boolean;

		/**
		 * .
		 * GameServer是单例类，通过静态方法 GameServer.runServer初始化，通过GameServer.I引用。
		 */
		public function GameServer()
		{
		}
		
		/**
		 * 入口中需要调用的唯一接口
		 * 
		 * @param socketServerClass		SocketServer子类
		 * @param csCommunicatorClass	CSCommunicator子类
		 * @param platformClass			Platform子类
		 * @param playerClass			PlayerBase子类
		 * @param roomClass				RoomBase子类
		 * @param debug					调试模式
		 * 
		 */
		public static function runServer(socketServerClass:Class,
										 csCommunicatorClass:Class,
										 platformClass:Class,
										 playerClass:Class, 
										 roomClass:Class, 
										 debug:Boolean):void
		{
			SocketServer.runTimeClass = socketServerClass;
			
			GameServer    .I = new GameServer();
			CSCommunicator.I = new csCommunicatorClass();
			Platform      .I = new platformClass();
			
			GameServer.playerClass = playerClass;
			GameServer.roomClass = roomClass;
			GameServer.debug = debug;
			
			if(debug)
				SocketServer.runServer();
			else
				Platform.I.connectToPlatform();
		}
		
		/**	
		 * 分配玩家的房间。
		 * 
		 * @param player	待分配的玩家
		 * @param roomId	roomId
		 * 
		 */
		public function assignPlayerToRoom(player:PlayerBase, roomId:int):void
		{
			if(debug)
			{
				addRoom(roomId, "Debug Room");				
			}
			rooms[roomId].addPlayer(player);
			
			trace("assign player " + player.id + " to room " + roomId);
		}
		
		/**
		 * 添加一个房间。
		 * 在游戏服务器收到来自主服务器的消息后被调用。
		 * 
		 * @param id	id
		 * @param name	name
		 * 
		 */
		public function addRoom(id:int, name:String,type:Number=0):void
		{
			if(rooms[id])
				return;
			
			var room:RoomBase = Pool.getItemByClass(POOL_SIGN_ROOM, roomClass);
			rooms[id] = room;
			room.init(id,name,type);
			
			trace("create room " + name + ", id:" + id);
			
			event(ADD_ROOM, [room]);
		}
		
		/**
		 * 根据id移除room。
		 * 如果room不存在，则忽略。
		 */
		public function removeRoom(id:int):void
		{
			if(!rooms[id])
				return;
			
			var room:RoomBase = rooms[id];
			event(REMOVE_ROOM, [room]);
			Pool.recover(POOL_SIGN_ROOM, room);
			
			room.id = 0;
			rooms.splice(id, 1);
		}
		
		/**
		 * 根据id，获取room
		 */
			
		public function getRoom(id:int):RoomBase{
			return rooms[id];
		}
	}
	
	// QuadTree引用重定向。
	/*[IF-SCRIPT-BEGIN]
	__JS__('
	laya.server.collisions || (laya.server.collisions = {});
	laya.server.collisions.quadtree || (laya.server.collisions.quadtree = {});
	laya.server.collisions.quadtree.QuadTree = {};
	laya.server.collisions.quadtree.QuadTree.enable = function()
	{
		var modual;
		if(process.argv[0].indexOf("electron") != -1)
			modual = "quad_tree/quad_tree_electron";
		else
			modual = "quad_tree/quad_tree";
	
		var QTree = require(modual);
	
		laya.server.collisions.quadtree.QuadTree = QTree.QuadTree;
		laya.server.collisions.quadtree.Rect     = QTree.Rect;
	}
	');
	[IF-SCRIPT-END*/
}