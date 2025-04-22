package test 
{
	import laya.net.Loader;
	import laya.ui.Button;
	import laya.utils.Handler;
	import ui.TestPageUI;
	/**
	 * ...
	 * @author ww
	 */
	public class TestAsyLoad 
	{
		
		public function TestAsyLoad() 
		{
			Laya.init(1000, 900);
			//test();
			var toLoads:Array;
			toLoads = [];
			//toLoads.push({url: "res/tmask.png", type: Loader.IMAGE});
			//toLoads.push({url: "res/bg.jpg", type: Loader.IMAGE});
			toLoads.push({url: "res/atlas/comp.json", type: Loader.ATLAS});
			//toLoads.push({url: "res/bitmapFont/BFont.fnt", type: Loader.FONT});
			//toLoads.push({url: "res/atlas/manPool/heroAni/hero1/hero_1_stand.json", type: Loader.ATLAS});
			//toLoads.push({url: "res/atlas/manPool/heroAni/hero1/hero_1_attack.json", type: Loader.ATLAS});
			//toLoads.push({url: "res/atlas/monster.json", type: Loader.ATLAS});
			
			Laya.loader.load(toLoads, new Handler(this, test));
		}
		
		private function test():void
		{
			//var btn:Button;
			//btn = new Button();
			//btn.skin = "comp/button.png";
			//btn.label = "hihi";
			//btn.size(300, 100);
			//btn.pos(100, 100);
			//Laya.stage.addChild(btn);
			
			var page:TestPageUI;
			page = new TestPageUI();
			page.pos(100, 100);
			Laya.stage.addChild(page);
		}
		
	}

}