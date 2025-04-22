package  {
	import laya.display.Input;
	import laya.display.Text;
	import laya.utils.Browser;
	import laya.utils.Stat;
	/**
	 * ...
	 * @author yung
	 */
	public class TextTest {
		private var text:Text;
		
		public function TextTest() {
			Laya.init(Browser.width, Browser.height);
			
			//Laya.stage.once("click", this, onClick);
			//
			//text = new Text();
			//text.text = "this is a test";
			//text.color = "#ff0000";
			//text.fontSize = 30;
			//Laya.stage.addChild(text);
			var input:Input;
			input = new Input();
			input.text = "hihi";
			input.fontSize = 50;
			input.color = "#ff0000";
			input.pos(100, 100);
			input.size(300, 300);
			
			Laya.stage.addChild(input);
			//Stat.show();
		}
		private var _count:int=0;
		private var aaaa:String="aaaa";
		private var bbbb:String="bbbb";
		private function onClick():void {
			for (var i:int = 0,n:int=10000; i < n; i++) {				
				//text.changeText(i%2===0?aaaa:bbbb);
				var text:Text = new Text();
				text.text = "this is a test";
				text.color = "#ff0000";
				text.fontSize = 30;
				text.pos(Laya.stage.width * Math.random(), Laya.stage.height * Math.random());
				Laya.stage.addChild(text);
			}
			//text.changeText(aaaa);
			//text.color = "#ffff00";
			//text.underline = true;
			//text.underlineColor = "#ff0000";
			//text.text = "bsdferwe";
		}		
	}
}