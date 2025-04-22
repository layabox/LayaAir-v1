package {
	import laya.resource.Texture;
	import laya.utils.Handler;
	import laya.webgl.WebGL;
	/**
	 * ...
	 * @author yung
	 */
	public class TestLoader {
		
		public function TestLoader() {
			Laya.init(1000, 1000,WebGL);
			Laya.loader.load(["res/1.png"], null, Handler.create(this, onProgress, null, false));

			
			Laya.stage.on("click", this, onClick);
		}
		
		private function onClick():void {			
			//Laya.loader.load(["res/1.png", "res/2.png", "res/1.png", "res/2.png", "res/4.png"], null, Handler.create(this, onProgress, null, false));
			var texture:Texture = Laya.loader.getRes("res/1.png");
			trace(texture);
			texture.destroy();
		}
		
		private function onProgress(value:Number):void {
			//trace(value);
		}
	}
}