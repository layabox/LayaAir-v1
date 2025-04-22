package {
	import db.AchievementCountData;
	import db.AchievementData;
	import db.UserData;
	import laya.data.Actuator;
	import laya.data.Sheet;
	import laya.data.Table;
	import laya.server.net.GameServer;
	import laya.server.net.Platform;
	import laya.server.net.SocketServer;
	import laya.server.rpg.PlayerBase;
	import laya.server.rpg.RoomBase;
	import laya.utils.Handler;
	
	/**
	 * ...
	 * @author yung
	 */
	public class Main {
		
		public function Main() {
			Laya.init(60);
			//初始化消息类
			MessageInit;
			//QuadTree.enable();
			
			//加载基础数据表
			Table.I.load(["data/Item.bd"]);
			
			//初始化server
			GameServer.runServer(SocketServer, MyCSCommunicator, Platform, PlayerBase, RoomBase, true);
			
			trace("Server startup successful!");
			
			//测试触发器
			Table.addTrigger("checkUserGold", "User", Sheet.TYPE_UPDATE, checkGold);
			function checkGold(data:UserData):void {
				if (data.gold < 0) {
					//trace("gold is not enough");
					Actuator.stop("gold is not enough");
				}
			}
			
			Table.addTrigger("checkUserGold2", "User", Sheet.TYPE_UPDATE, checkGold2);
			function checkGold2(data:UserData):void {
				if (data.gold > 10000) {
					//trace("gold is not enough");
					Actuator.main.update("User", "isVip", true);
				}
			}
		}
	}
}