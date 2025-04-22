package {
	import laya.media.SoundManager;
	import laya.media.h5audio.AudioSound;
	import laya.ui.Button;
	import laya.ui.Clip;
	import laya.utils.Handler;
	/**
	 * ...
	 * @author yung
	 */
	public class ButtonTest {
		
		public function ButtonTest() {
			Laya.init(1000, 1000);
			AudioSound._initMusicAudio();
			//Laya.loader.load("res/1.png", Handler.create(this, onLoaded));	
			Laya.stage.on("click", this, onClick);
		}
		
		//private function onLoaded():void {
			//var btn:Button = new Button();
			//btn.pos(200, 200);
			//btn.skin = "res/1.png";
			//btn.on("click", this, onClick);
			//Laya.stage.addChild(btn);
		//}
		
		private function onClick():void {
			//trace(1);
			//Button
			//Clip
			//SoundManager.playMusic("mp3/test.mp3");
			SoundManager.autoStopMusic = true;
			SoundManager.playMusic("mp3/test.mp3");
			//alert("click");
		}
	}
}