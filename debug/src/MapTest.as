package {
	import laya.display.Sprite;
	import laya.utils.Handler;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	/**
	 * ...
	 * @author yung
	 */
	public class MapTest {
		private var box:Sprite;
		
		public function MapTest() {
			//WebGL.enable();
			Laya.init(800, 600);
			//Laya.stage.frameRate = "slow";
			Stat.show();
			
			Laya.loader.load("res/scene1.jpg", Handler.create(this, init));
		}
		
		private function init():void {
			box = new Sprite();
			Laya.stage.addChild(box);
			
			var sp1:Sprite = new Sprite();
			sp1.loadImage("res/scene1.jpg");
			box.addChild(sp1);
			
			var sp2:Sprite = new Sprite();
			sp2.loadImage("res/scene1.jpg");
			sp2.pos(1280, 0);
			box.addChild(sp2);
			
			lastTime = Laya.timer.currTimer;
			Laya.timer.frameLoop(1, this, onLoop);			
			
			Laya.stage.on("click", this, onClick);
		}
		
		private function onClick():void {
			Laya.timer.clear(this, onLoop);
		}
		private var lastTime:int;
		private var lastX:int = 0;
		private var count:int = 0;
		private function onLoop():void {
			//var timer:int = Laya.timer.currTimer-lastTime;
			//lastTime = Laya.timer.currTimer;
			//box.x = Math.round(box.x - timer * 0.3);
			//box.x = box.x - timer * 0.3;
			//count++;
			//if (count % 10==0) {				
				//trace("offset:",lastX - box.x,"time:",timer);
			//}	
			box.x -= 10;
			if (box.x <-1280) {
				box.x = 0;
			}
			//lastX = box.x;			
		}
	}

}