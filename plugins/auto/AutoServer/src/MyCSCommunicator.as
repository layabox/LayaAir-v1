package {
	import db.AchievementCountData;
	import db.AchievementData;
	import db.BagData;
	import laya.data.MessageBase;
	import laya.data.MessageUtils;
	import laya.data.Actuator;
	import laya.data.Table;
	import laya.server.net.CSCommunicator;
	import laya.server.rpg.PlayerBase;
	import laya.utils.Handler;
	
	/**
	 * ...
	 * @author yung
	 */
	public class MyCSCommunicator extends CSCommunicator {
		private var welcomeSM:WelcomeSM;
		
		public function MyCSCommunicator() {
			welcomeSM = new WelcomeSM();
		}
		
		override protected function clientConnected(player:PlayerBase):void {
			sendWelcomeMessage(player);
		}
		
		private function sendWelcomeMessage(player:PlayerBase):void {
			player.table = new Table();
			//加载数据表
			player.table.load(["data/User.bd", "data/Bag.bd","data/Achievement.bd","data/AchievementCount.bd"],Handler.create(this,onDataLoaded,[player]));
			
			welcomeSM.time = Date.now();			
			sendMessage(player, welcomeSM);
		}
		
		private function onDataLoaded(player:PlayerBase):void {
			var obj:Object = { };
			var arr:Array = player.table.get("Achievement");
			for (var i:int = 0,n:int=arr.length; i <n; i++) {
				var achi:AchievementData = arr[i];
				var a:Array = obj[achi.type] || (obj[achi.type] = []);
				a.push(achi);
			}
			
			Table.addTrigger("checkAchievement", "AchievementCount", 2, checkGold3);
			function checkGold3(data:AchievementCountData, key:String):void {
				arr = obj[key];
				var value:* = data[key];
				if (value == null) return;
				for (var i:int = 0,n:int=arr.length; i <n; i++) {
					var achi:AchievementData = arr[i];
					if (!achi.success && value>=achi.num) {
						Actuator.main.update("Achievement", "success", true, achi.id);
					}
				}
			}
			
			player.send(SyncSheetSM.I.init("Bag", player.table.get("Bag")));
		}
		
		override protected function processMessage(message:MessageBase, player:PlayerBase):void {
			trace("Receive",message.msgKey);
			switch (message.msgId) {
			case BuyItemCM[MessageUtils.IDSign]: 
				buyItem(message as BuyItemCM, player);
				break;
			case UseItemCM[MessageUtils.IDSign]: 
				useItem(message as UseItemCM, player);
				break;
			}
		}
		
		public function useItem(msg:UseItemCM, player:PlayerBase):void {
			var actuator:Actuator = Actuator.create();
			actuator.del("Bag", msg.index);
			actuator.update("User", "gold", 10);
			actuator.run("userItem",player);
		}
		
		public function buyItem(msg:BuyItemCM, player:PlayerBase):void {
			var actuator:Actuator = Actuator.create();
			actuator.update("User", "gold", -100);
			actuator.add("Bag", new BagData().init(msg.id, 100, 2));
			actuator.update("AchievementCount", "gold", 100);
			actuator.run("buyItem",player);
		}
	}
}