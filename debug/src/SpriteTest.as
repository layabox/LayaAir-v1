package {
	import laya.display.Sprite;
	/**
	 * ...
	 * @author yung
	 */
	public class SpriteTest {
		
		public function SpriteTest() {
			Laya.init(1000, 1000);
			
			var sp:Sprite = Sprite.fromImage("http://cdn.mqgame.net/jpnn/image/background/loading_bg.jpg");
			Laya.stage.addChild(sp);
		}
		
	}

}