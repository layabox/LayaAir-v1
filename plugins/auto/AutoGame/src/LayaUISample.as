package {
	import MessageCenter;
	import db.BagData;
	import db.UserData;
	import laya.data.Table;
	import laya.data.Sheet;
	import laya.debug.DebugPanel;
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.events.Keyboard;
	import laya.ui.Clip;
	import laya.ui.Panel;
	import laya.utils.Browser;
	import laya.utils.Handler;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	import ui.TestUI;
	import view.Hall;
	
	public class LayaUISample {
		private var hall:Hall;
		
		public function LayaUISample() {	
			//WebGL.enable();
			//初始化引擎
			Laya.init(1280, 720);
			
			//加载引擎需要的资源
			Laya.loader.load(["res/atlas/comp.atlas", "res/atlas/hall.atlas"], Handler.create(this, onLoaded));
			Sheet.load(["data/Achievement.bd","data/AchievementCount.bd"]);
			
			//显示fps信息
			Stat.show();
			
			MessageInit;
		}
		
		private function onLoaded():void {
			hall = new Hall();
			Laya.stage.addChild(hall);
			MessageCenter.I.start("10.10.20.38", 9000);
		}
	}
}