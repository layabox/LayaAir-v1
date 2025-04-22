package {
	import laya.display.Sprite;
	import laya.filters.ColorFilter;
	import laya.webgl.WebGL;
	
	/**
	 * ...
	 * @author yung
	 */
	public class FillterTest {
		
		public function FillterTest() {
			WebGL.enable();
			Laya.init(1000, 800);
			Laya.stage.bgColor = "#efefef";
			
			var sp:Sprite = Sprite.fromImage("res/1.png");
			sp.pos(300, 300);
			Laya.stage.addChild(sp);
			Laya.stage.once("click", null, function():void {
				doBlin(sp, 0, 1)
			});
		}
		
		private function doBlin(mc:Sprite, offset:int, plus:int):void {
			if (!mc || !mc.parent) {
				return;
			}
			if (offset <= 0 && plus < 0) {
				mc.filters = [];
				doBlin(mc, 0, 1);
				return;
			}
			if (offset >= 200) {
				plus = -1;
			}
			offset += 50 * 2 * plus;
			var mat:Array = [1, 0, 0, 0, offset, 0, 1, 0, 0, offset, 0, 0, 1, 0, offset, 0, 0, 0, 1, 0];
			mc.filters = [new ColorFilter(mat)];
			
			Laya.timer.once(50, this, doBlin, [mc, offset, plus], false);
		}
	}
}