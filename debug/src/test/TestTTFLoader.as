package test 
{
	import laya.display.Sprite;
	import laya.display.Text;
	import laya.utils.Handler;
	/**
	 * ...
	 * @author ww
	 */
	public class TestTTFLoader 
	{
		
		public function TestTTFLoader() 
		{
			Laya.init(1000, 900);
			
			Laya.loader.load("res/remember.ttf",new Handler(this,test));
		}
		
		private function test():void
		{
			var text:Text;
			text = new Text();
			text.fontSize = 30;
			text.color = "#ff0000";
			text.text = "你好";
			text.pos(100, 100);
			Laya.stage.addChild(text);
			
			text = new Text();
			text.fontSize = 30;
			text.color = "#ff0000";
			text.text = "你好";
			text.font = "remember";
			text.pos(100, 200);
			Laya.stage.addChild(text);
		}
		
	}

}