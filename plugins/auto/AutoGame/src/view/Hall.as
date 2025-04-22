package view {
	import laya.events.Event;
	import ui.HallUI;
	
	/**
	 * 示例大厅
	 */
	public class Hall extends HallUI {
		
		public function Hall() {
			on("click", this, onClick);
		}
		
		public function onClick(e:Event):void {
			var name:String = e.target.name;
			switch(name) {
				case "bag":
					BagView.I.popup();
					break;
				case "achievement":
					AchievementView.I.popup();
					break;
			}
		}
	}
}