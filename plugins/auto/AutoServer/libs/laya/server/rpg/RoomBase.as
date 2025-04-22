package laya.server.rpg {
	import laya.data.IMessage;
	import laya.events.EventDispatcher;
	import laya.server.net.CSCommunicator;

	/**
	 * Room负责房间用户管理，广播及房间逻辑。
	 * <p>
	 * 继承自RoomBase实现针对游戏的逻辑处理。
	 * </p>
	 * <p>
	 * RoomBase实例不需要手动创建，在GameServer.addRoom中会自动被对象池分配；在GameServer.removeRoom中会自动回收Room
	 * </p>
	 */
	public class RoomBase extends EventDispatcher
	{
		/** 添加玩家时触发 */
		public static const ADD_PLAYER:String    = "roomAddPlayer";
		/** 移除玩家时触发 */
		public static const REMOVE_PLAYER:String = "roomRemovePlayer";
		
		/**
		 * 标识房间是否在激活状态
		 * 在调用active后，isActived为true；
		 * 调用deactive后，isActived为false；
		 */
		public var isActived:Boolean = false;
		/** 房间id */
		public var id:int = 0;
		/** 房间内的玩家 */
		public var players:Array = [];
		/** 房间名字 */
		public var name:String;
		/**房间类型*/
		public var type:Number;
		/**
		 *初始化房间 
		 * @param id
		 * @param name
		 * @param type
		 * 
		 */		
		public function init(id:int,name:String,type:Number):void{
			this.id = id;
			this.name = name;
			this.type = type;
		}
		
		/**
		 * 在房间内广播消息。
		 * 
		 * @param message	message
		 * @param exclude	排除指定的玩家，不向他发送消息
		 */
		public function broadcast(message:IMessage,exclude:PlayerBase = null):void 
		{
			var player:PlayerBase;
			for(var i:int = 0,len:int = players.length; i < len; i++)
			{
				player = players[i];
				
				if(player != exclude)
					CSCommunicator.sendMessage(players[i], message);
			}
		}
		
		/**
		 * 往房间添加玩家
		 * @param player
		 */
		public function addPlayer(player:PlayerBase):void 
		{
			player.room = this;
			players.push(player);
			
			this.event(ADD_PLAYER, [player]);
		}
		
		/**
		 * 移除房间内的指定玩家
		 * @param player
		 * 
		 */
		public function removePlayer(player:PlayerBase):void 
		{
			var idx:int = players.indexOf(player);
			if(idx != -1)
			{
				players.splice(idx, 1);
				
				this.event(REMOVE_PLAYER, [player]);
			}
		}

		/**
		 * 判断房间内是否有玩家。
		 */
		public function isEmpty():Boolean
		{
			return players.length == 0;
		}
		
		/**
		 * 激活房间，开始执行loop函数。
		 */
		public function active():void
		{
			isActived = true;
			Laya.timer.frameLoop(1, this, loop);
		}
		
		/**
		 * 停止房间活动，停止执行loop函数。
		 */
		public function deactive():void
		{
			isActived = false;
			Laya.timer.clear(this, loop);
		}
		
		/**
		 * 房间循环。在active()后开始，deactive()后停止。
		 * <p>在子类重写实现游戏逻辑。</p>
		 */
		protected function loop():void
		{
		}
	}
}