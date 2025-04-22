package test {
	import laya.events.Event;
	import laya.net.Loader;
	import laya.ui.Button;
	import laya.ui.Clip;
	import laya.ui.Image;
	import laya.utils.Handler;
	
	public class TestClipDispose {
		
		private var clip:Clip;
		private var skin:String;
		
		public function TestClipDispose() {
			
			Laya.init(800, 600);
			skin = "res/fighter.png";
			//onLoa();
			Laya.loader.load([{url:"res/comp.json",type:Loader.ATLAS}], new Handler(this, onLoa));
		}
		
		private function onLoa():void {
			clip = new Clip(skin);
			Laya.stage.addChild(clip);
			clip.clipX = 10;
			Laya.timer.once(3000, this, onTime);
			Laya.stage.on(Event.CLICK, this, onClick);
			debugger;
			var btn:Button;
			btn = new Button("comp/button.png");
			btn.size(100, 50);
			btn.sizeGrid = "2,2,2,2";
			Laya.stage.addChild(btn);
			btn.pos(100, 100);
			
			btn = new Button("comp/button.png");
			btn.size(100, 50);
			btn.sizeGrid = "2,2,2,2";
			Laya.stage.addChild(btn);
			btn.pos(200, 100);
			
			//var img:Image;
			//img = new Image("comp/image.png");
			//img.size(100, 100);
			//img.sizeGrid = "2,2,2,2";
			//Laya.stage.addChild(img);
			//img.pos(100, 200);
			//
			//img = new Image("comp/image.png");
			//img.size(100, 100);
			//img.sizeGrid = "2,2,2,2";
			//Laya.stage.addChild(img);
			//img.pos(200, 200);
		}
		
		private function onClick():void {
			// TODO Auto Generated method stub
			var clip1:Clip = new Clip(skin);
			Laya.stage.addChild(clip1);
			clip1.clipX = 10;
		}
		
		private function onTime():void {
			// TODO Auto Generated method stub
			clip.dispose();
		}
	}
}