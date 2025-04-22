package {
	import laya.display.Sprite;
	import laya.renders.RenderData;
	import laya.resource.Context;
	import laya.resource.Texture;
	import laya.utils.Handler;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	
	public class Main {
		private var arr:Array = [];
		private var a:int = 0;
		private var b:int = 0;
		
		public function Main() {
			//WebGL.enable();
			Laya.init(800, 600);
			Stat.show();
			
			Laya.loader.load("res/xin.png", Handler.create(this, init));
			
			Laya.stage.on("click", this, onClick);
		}
		
		private function onClick():void {
			//arr;
			console.time("duo");
			var sprite:Sprite = new Sprite();
			var context:Context = new Context();
			for (var i:int = 0; i < 100000; i++) {
				test(sprite, context, i, i);
			}
			console.timeEnd("duo");
			
			console.time("dan");
			var sprite:Sprite = new Sprite();
			var context:Context = new Context();
			var data:RenderData = new RenderData();
			for (var i:int = 0; i < 1000000; i++) {
				//data.sprite = sprite;
				//data.context = context;
				data.x = i;
				data.y = i;
				test2(data);
			}
			console.timeEnd("dan");
		}
		
		private function init():void {
			//var c:Sprite = Laya.stage.addChild(new Sprite) as Sprite;
			//c.pos(100, 100);
			//c.graphics.loadImage("res/xin.png");
			//c.rotation = 45;
			//return;
			
			for (var i:int = 0; i < 50000; i++) {
				var c:Sprite = Laya.stage.addChild(new Sprite) as Sprite;
				c.alpha = 0.5;
				c.x = 100 + (i * 50) % 1000;
				c.y = (i / 100 | 0) * 100;
				c.graphics.drawRect(0, 0, 100, 100, i % 2 == 0 ? "white" : "#aaaaaa");
				//c.graphics.loadImage("res/xin.png");
				c.rotation = 45;
				c.pivot(50, 50);
			}
		}
		
		private function test(sprite:Sprite, context:Context, x:Number, y:Number):void {
			a = x;
			b = y;
		}
		
		private function test2(data:RenderData):void {
			a = data.x;
			b = data.y;
		}
	}
}