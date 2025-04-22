package test 
{
	import laya.events.Event;
	import laya.ui.Button;
	import laya.ui.Image;
	/**
	 * ...
	 * @author ww
	 */
	public class TestSizeGrid extends TestWithLoadBase
	{
		
		public function TestSizeGrid() 
		{
			
		}
		
		override public function test():void 
		{
			super.test();
			
			var image:Image;
			image = new Image();
			image.sizeGrid = "10,10,10,10";
			image.skin = "comp/bg.png";
			image.size(700,700);
			image.pos(100, 100);
			Laya.stage.addChild(image);
			
			
			//image = new Image();
			//image.sizeGrid = "10,10,10,10";
			//image.skin = "comp/bg.png";
			//image.size(100, 100);
			//image.pos(250, 100);
			//Laya.stage.addChild(image);
			
			
			//Laya.stage.on(Event.CLICK, this, testSizeGridButton);
			//testSizeGridButton();
		}
		
		private function testSizeGridButton():void
		{
			var btns:Array;
			var button:Button;
			button = new Button();
			button.sizeGrid = "10,10,10,10";
			button.skin = "comp/bg.png";
			button.size(100, 100);
			button.pos(100, 100);
			Laya.stage.addChild(button);
			
			
			button = new Button();
			button.sizeGrid = "10,10,10,10";
			button.skin = "comp/bg.png";
			button.size(100, 100);
			button.pos(250, 100);
			Laya.stage.addChild(button);
			
			button = new Button();
			button.sizeGrid = "10,10,10,10";
			button.skin = "comp/bg.png";
			button.size(100, 100);
			button.pos(400, 100);
			Laya.stage.addChild(button);
		}
	}

}