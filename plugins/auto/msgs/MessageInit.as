package {
	import db.AchievementCountData;
	import db.AchievementData;
	import db.BagData;
	import db.UserData;
	import laya.data.DataMessage;
	import laya.data.ErrorMessage;
	import laya.data.MessageUtils;
	
	/**
	 * 初始化消息列表
	 */
	public class MessageInit {
		public static function init():void {
			var regMsgs:Array = [SyncSheetSM,WelcomeSM,BuyItemCM,UseItemCM,BagData,UserData,AchievementCountData,AchievementData];
			
			MessageUtils.regMessageList(regMsgs);
			MessageUtils.setMessagesKey(regMsgs);
		}
		init();
	}
}