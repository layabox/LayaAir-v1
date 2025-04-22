package view {
	import ui.Scene1UI;
	
	/**
	 * ...
	 * @author ...
	 */
	public class Scene1 extends Scene1UI {
		
		public function Scene1() {
			btn.on("click", this, onClick);
		}
		
		private function onClick():void {
			var scene:Scene2 = new Scene2();
			scene.show();
		}
	}
}