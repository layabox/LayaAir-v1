package laya.server.net
{
	import laya.data.IMessage;
	import laya.data.MessageBase;
	import laya.data.MessageUtils;
	import laya.utils.Pool;
	import laya.utils.Utils;
	import laya.server.rpg.PlayerBase;
	import laya.utils.Byte;

	/**
	 * `CSCommunicator`是Client和Server间的通信员，通过`CSCommunicator.I`获得单例引用。
	 * 
	 * 它会收到来自客户端的Message，并且处理这些Message。还能发送Message到某个客户端，或者是游戏服务器中的所有客户端。
	 * 
	 *  CSCommunicator的子类应该
	 * 
	 * - 重写processMessage处理来自客户端的Message
	 * - 重写clientConnected处理客户端连接
	 * - 重写clientDisconnected处理客户端断开
	 * - 增加针对游戏的Message发送函数
	 * 
	 * @author survivor
	 * 
	 */
	public class CSCommunicator
	{
		public static var I:CSCommunicator;
		
		private static var byte:Byte = new Byte();
		
		/**
		 * 监听客户端连接。
		 * 
		 * @param channel
		 */
		public function watchClient(channel:*):void
		{
			createPlayer(channel);
			
			channel.on("message", processClientMessage);
			channel.on("close"  , internal_clientDisconnected);
			channel.on("error"  , internal_clientError);
			
			clientConnected(channel["player"]);
		}
		
		private function createPlayer(channel:*):void
		{
			var gs:GameServer = GameServer.I;
			
			var player:PlayerBase = Pool.getItemByClass("player", GameServer.playerClass);
			player.beforeReuse();
			gs.players.push(player);
			
			// id
			player.id = Utils.getGID(); 
			gs.idMap[player.id] = player;
			
			// 建立Player和Socket的交叉引用
			player.socket  = channel;
			channel.player = player;			
		}
		
		/**
		 * 接收到客户端的消息时触发。
		 * 
		 * @param  msg   来自客户端的消息，可能是二进制数据，可能是字符串
		 */
		private function processClientMessage(buffer:*):void
		{
			// 解码消息
			byte.clear();
			byte.writeArrayBuffer(buffer);
			byte.pos = 0;
			
			var message:MessageBase = MessageUtils.readMessageFromByte(byte) as MessageBase;
			CSCommunicator.I.processMessage(message, this['player']);
		}
		
		/**
		 * 处理客户端消息。
		 * 重写processMessage处理来自客户端的Message。
		 * 
		 * @param message
		 */
		protected function processMessage(message:MessageBase, player:PlayerBase):void
		{
			trace("Message from client");
		}
		
		/**
		 * 客户端连接时触发。
		 * 重写clientConnected处理客户端连接。
		 * 
		 * @param player	player
		 * 
		 */
		protected function clientConnected(player:PlayerBase):void
		{
			
		}
		
		/**
		 * 客户端连接被关闭时触发。
		 * 重写clientDisconnected处理客户端断开。
		 * 
		 * @player PlayerBase 
		 * @param  code   Socket被关闭的原因对应的状态值
		 * @param  reason 以人类可读的形式表达Socket被关闭的原因
		 * @return        void
		 */
		protected function clientDisconnected(player:PlayerBase, code:int, reason:String):void
		{
		}
		
		private function internal_clientDisconnected(code:int, reason:String):void
		{
			// this域指向WebSocket
			var player:PlayerBase = this["player"];
			
			CSCommunicator.I.clientDisconnected(player, code, reason);
			
			Pool.recover(GameServer.POOL_SIGN_PLAYER, player);
			
			// 解除交叉引用
			this["player"] = null;
			
			// 置空id
			GameServer.I.idMap[player.id] = null;
			
			// 从players中移除
			var idx:int = GameServer.I.players.indexOf(player);
			if(idx != -1)
				GameServer.I.players.splice(idx, 1);
			else
				console.assert(false);
			
			// 移出房间
			if(player.room)
				player.room.removePlayer(player);
			
			player.afterRecover();
			// 需要调用socket.close()???
			// this["close"]();
			
			if(GameServer.debug && player.room && player.room.isEmpty())
			{
				GameServer.I.removeRoom(player.room.id);
			}
		}
		
		/**
		 * 客户端出错时，会导致客户端被关闭。
		 * @param err
		 * 
		 */
		private function internal_clientError(err:Error):void
		{
			// this域指向WebSocket
			I.internal_clientDisconnected.call(this, err.errorID, err.message);
		}

		/**
		 * 发送message到player客户端
		 * 
		 * @param  player  player
		 * @param  message message
		 */
		public static function sendMessage(player:PlayerBase, message:IMessage):void
		{
			player.send(message);
		}
		
		/**
		 * 向所有连接至服务器的客户端发送消息。
		 * 
		 * @param message message
		 */
		public static function broadcast(message:IMessage):void 
		{
			for(var i:int = 0,len:int = GameServer.I.players.length; i < len; i++)
			{
				sendMessage(GameServer.I.players[i], message);
			}
		}
	}
}