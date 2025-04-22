package test {
	import laya.display.Sprite;
	import laya.filters.BlurFilter;
	import laya.filters.webgl.BlurFilterActionGL;
	import laya.ui.Image;
	import laya.utils.Browser;
	import laya.utils.Handler;
	import laya.utils.Stat;
	
	/**
	 * ...
	 * @author yung
	 */
	public class MaskTest {
		private var img:Image;
		
		public function MaskTest() {
			Laya.init(1000, 800);
			
			Laya.loader.load("res/comp.atlas", new Handler(this, onLoaded))
		}
		
		private function onLoaded():void {
			var bg:Sprite = Sprite.fromImage("res/bg.jpg");
			Laya.stage.addChild(bg);
			
			img = new Image();
			img.skin = "comp/image.png";
			Laya.stage.addChild(img);
			
			var mask:Sprite = new Sprite();
			mask.graphics.drawRect(0, 0, 100, 100,"#ff0000");
			img.mask = mask;
			
			var iframe:* = Browser.createElement("iframe");
			iframe.src = "test.html";
			iframe.style="position: absolute;width: 800px;height: 800px";
			Browser.document.body.appendChild(iframe);
			
			alert(Browser.window.WebAssembly);
			
			Laya.stage.on("click", this, onClick);
			
			Stat.show();
		}
		
		private function onClick():void {
			img.removeSelf();
			Laya.timer.once(1000, this, onTimer);
		}
		
		private function onTimer():void {
			Laya.stage.addChild(img);
		}
	}
}