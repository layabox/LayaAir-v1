package test {
	import laya.display.Stage;
	import laya.events.Event;
	import laya.net.Loader;
	import laya.net.URL;
	import laya.utils.Browser;
	import laya.utils.Handler;
	
	/**
	 * 测试基类，主要做资源预加载
	 * @author ww
	 */
	public class TestWithLoadBase {
		
		public function TestWithLoadBase() {
			
			initWork();
			Laya.stage.on(Event.CLICK, this, onStageClick);
			beginLoad();
		}
		
		protected function initWork():void {

			Laya.init(800, 600);
			//Laya.init(Browser.width, Browser.clientHeight);
			Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
		}
		
		protected function beginLoad():void {
			var toLoads:Array;
			toLoads = [];
			//toLoads.push({url: "res/tmask.png", type: Loader.IMAGE});
			//toLoads.push({url: "res/bg.jpg", type: Loader.IMAGE});
			toLoads.push({url: "res/atlas/comp.json", type: Loader.ATLAS});
			//toLoads.push({url: "res/bitmapFont/BFont.fnt", type: Loader.FONT});
			//toLoads.push({url: "res/atlas/manPool/heroAni/hero1/hero_1_stand.json", type: Loader.ATLAS});
			//toLoads.push({url: "res/atlas/manPool/heroAni/hero1/hero_1_attack.json", type: Loader.ATLAS});
			//toLoads.push({url: "res/atlas/monster.json", type: Loader.ATLAS});
			
			Laya.loader.load(toLoads, new Handler(this, onLoaded));
		}
		
		public function test():void {
		
		}
		
		public function onClickFun():void {
		
		}
		
		private function onStageClick():void {
			onClickFun();
		}
		
		public function onLoaded():void {
			test();
		
		}
	}

}