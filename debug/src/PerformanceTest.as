package {
	import laya.display.Sprite;
	import laya.utils.Handler;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	/**
	 * ...
	 * @author yung
	 */
	public class PerformanceTest {
		
		public function PerformanceTest() {
			WebGL.enable();
			Laya.init(800, 600);
			Stat.show();
			
			Laya.loader.load("res/bunny.png", Handler.create(this, init));
		}	
		
		private function init():void {
			//var sp:Sprite = Laya.stage.addChild(new Sprite) as Sprite;
			for (var i:int = 0; i < 100000; i++) {
				//var c:Sprite = sp.addChild(new Sprite) as Sprite;
				var c:Sprite = Laya.stage.addChild(new Sprite) as Sprite;
				//c.alpha = 0.5;
				c.x = 100 + (i * 50) % 1000;
				c.y = (i / 100 | 0) * 100;
				//c.graphics.drawRect(0, 0, 100, 100, i % 2 == 0 ? "white" : "gray");
				//c.graphics.drawRect(49, 49, 2, 2, "red");
				//if (i % 8 != 0) c.alpha = 0.1;
				//c.loadImage("res/bunny.png");
				c.rotation = 45;
				//c.scale(2, 2);
				//c.pivot(50, 50);
			}			
			//sp.cacheAs = "bitmap";
		}
	}
}