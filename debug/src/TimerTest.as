package {
	/**
	 * ...
	 * @author yung
	 */
	public class TimerTest {
		
		public function TimerTest() {
			Laya.init(1000, 800);
			
			Laya.stage.on("click", this, onClick);
		}		
		
		private function onClick():void {
			Laya.timer.callLater(this, onCallLater);
			Laya.timer.frameOnce(1, this, onFrame);
		}
		
		private function onCallLater():void {
			trace("onCallLater");
		}
		
		private function onFrame():void {
			trace("onFrame");
		}
	}
}