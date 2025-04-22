package {
	import laya.display.Sprite;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	
	/**
	 * ...
	 * @author yung
	 */
	public class CanvasTest {
		private var sprite:Sprite;
		
		public function CanvasTest() {
			WebGL.enable();
			Laya.init(1000, 1000);
			
			sprite = new Sprite();
			sprite.graphics.drawRect(0, 0, 200, 200, "#ff0000");
			sprite.loadImage("res/fighter.png");
			Laya.stage.addChild(sprite);
			
			Stat.show();			
			Laya.stage.on("click", this, onClick);
		}
		
		private function onClick():void {
			trace("start");
			Laya.timer.frameLoop(2, this, cache);
		}
		
		private function cache():void {
			sprite.cacheAs = (sprite.cacheAs === "bitmap" ? "none" : "bitmap");
			//trace(sprite.cacheAs);
		}
	}
}