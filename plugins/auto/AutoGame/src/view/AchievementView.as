package view {
	import db.AchievementCountData;
	import db.AchievementData;
	import laya.data.Sheet;
	import laya.ui.Box;
	import laya.ui.Label;
	import laya.utils.Handler;
	import ui.AchievementUI;
	
	/**
	 * ...
	 * @author yung
	 */
	public class AchievementView extends AchievementUI {
		private static var _instance:AchievementView;
		
		/**单例*/
		public static function get I():AchievementView {
			if (!_instance) _instance = new AchievementView();
			return _instance;
		}
		
		public function AchievementView() {			
			list.renderHandler = new Handler(this,onListRender);
		}		
		
		private function onListRender(box:Box,index:int):void {
			var count:Label = box.getChildByName("count") as Label;
			var data:AchievementCountData = AchievementCountData.getData(0);
			data && (count.text = data.gold+"/"+AchievementData.getData(index).num);
			trace("Achievement change");
		}
	}
}