package test.view 
{
	import laya.events.Event;
	import ui.TestSimpleEventUI;
	
	/**
	 * ...
	 * @author ww
	 */
	public class TestSimpleEvent extends TestSimpleEventUI 
	{
		
		public function TestSimpleEvent() 
		{
			
		}
		
		override protected function onEvent(type:String, evt:Event):void 
		{
			super.onEvent(type, evt);
			trace("onEvent:",type,evt);
		}
	}

}