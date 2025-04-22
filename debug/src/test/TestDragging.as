package test 
{
	import laya.display.Sprite;
	import laya.events.Event;
	/**
	 * ...
	 * @author ww
	 */
	public class TestDragging 
	{
		
		public function TestDragging() 
		{
			Laya.init(1000, 900);
			test();
		}
		
		private function test():void
		{
			var con:Sprite = new Sprite();
			con.graphics.drawRect(0,0,500,500,"#cccccc");
			Laya.stage.addChild(con);
			con.pos(200,200);
			con.scale(2,2);
			
			var sp:Sprite = new Sprite();
			sp.graphics.drawRect(0,0,200,200,"#ff0000");
			
			con.addChild(sp);
			sp.size(200,200);
			sp.scale(0.5,0.5);

			sp.on(Event.MOUSE_DOWN,this,function(){
				sp.startDrag();
			});
			
			Laya.stage.on(Event.MOUSE_UP,this,function(){
				sp.stopDrag();
			})
		}
		
	}

}