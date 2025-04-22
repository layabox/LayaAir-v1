package test 
{
	import laya.debug.tools.DebugTxt;
	import laya.display.Stage;
	import laya.display.Text;
	import laya.events.Event;
	import laya.utils.Stat;
	/**
	 * ...
	 * @author ww
	 */
	public class TestMouseOut 
	{
		
		public function TestMouseOut() 
		{
			Laya.init(1000, 900);
			Laya.stage.scaleMode = Stage.SCALE_FULL;
			Laya.stage.bgColor = "#00ff00";
			DebugTxt.init();
			Stat.show()
			createUI();
			//Laya.enableDebugPanel();
		}
		
		private static var txt:Text;
		private function createUI():void
		{
			txt = new Text();
			txt.color = "#ff0000";
			txt.fontSize = 40;
			//txt.text = "haha7";
			
			
			//Laya.stage.addChild(txt);
			txt.pos(100, 100);
			var msgs:Array = [Event.MOUSE_OVER,Event.MOUSE_OUT,Event.MOUSE_DOWN,Event.MOUSE_UP,Event.ROLL_OVER];
			//Laya.stage.on(Event.MOUSE_OVER, this,mouseOver,[Event.MOUSE_OVER]);
			//Laya.stage.on(Event.MOUSE_OUT, this, mouseOut);
			var i:int, len:int;
			len = msgs.length;
			for (i = 0; i < len; i++)
			{
				var tE:String;
				tE = msgs[i];
				Laya.stage.on(tE, this,mouseMsg,[tE]);
			}
			Laya.stage.on(Event.ROLL_OVER, this, stageRoolOver);
			Laya.stage.on(Event.ROLL_OUT, this,stageRoolOut);
		}
		private function stageRoolOut():void
		{
			mouseMsg("Stage roolOut");
		}
		private function stageRoolOver():void
		{
			mouseMsg("Stage roolOver");
		}
		private function mouseMsg(msg:String):void
		{
			showMsg(msg);
		}
		private function mouseOver():void
		{
			showMsg("mouseOver");
		}
		
		private function mouseOut():void
		{
			showMsg("mouseOut");
		}
		private static var id:int = 1;
		public static function showMsg(msg:String):void
		{
			id++;
			//txt.text = id + ":" + msg + "\n" + txt.text;
			DebugTxt.dTrace(id + ":" + msg);
		}
	}

}