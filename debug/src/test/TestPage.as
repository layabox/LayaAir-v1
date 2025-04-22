package test 
{
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.html.dom.HTMLDivElement;
	import test.view.TestSimpleEvent;
	/**
	 * ...
	 * @author ww
	 */
	public class TestPage extends TestWithLoadBase
	{
		
		public function TestPage() 
		{
			
		}
		
		override public function test():void 
		{
			super.test();
			testPage();
		}
		
		private function testPage():void
		{
			//var pg:*;
			//pg = new TestSimpleEvent();
			//Laya.stage.addChild(pg);
			
			var str:String = "<div color='#50d337'><a name='keyword' href='#javascript' onClick='this.pic()'>恶魔</a><a name='keyword' href='#javascript' onClick='this.pic()'><font color='#65e2ff'>力量</font></a>、<a name='keyword' href='#javascript' onClick='this.pic()'><font color='#65e2ff'>敏捷</font></a>、<a name='keyword' href='#javascript' onClick='this.pic()'><font color='#65e2ff'>智力</font></a></div>";
			//var str:String = "<a name='keyword' href='#javascript' onClick='this.pic()'>恶魔</a><a name='keyword' href='#javascript' onClick='this.pic()'><font color='#65e2ff'>力量</font></a>、<a name='keyword' href='#javascript' onClick='this.pic()'><font color='#65e2ff'>敏捷</font></a>、<a name='keyword' href='#javascript' onClick='this.pic()'><font color='#65e2ff'>智力</font></a>";
			var html:HTMLDivElement = new HTMLDivElement();
			html.pos(100,100);
				//html.innerHTML = "<div style='font-size:30px;color:#ffff00'>This is a face <img src='res/xin.png'></img>哈哈<br/>换行了吧，<span style='color:#ff0000'>颜色</span><span style='bold:true'>粗体</span></div>";
				debugger;
			html.innerHTML = str;
			Laya.stage.addChild(html);
			
			Laya.stage.on(Event.CLICK, this, onClick,[html]);
		}
		
		private function onClick(sp:Sprite):void
		{
			var cc:*;
			cc = sp.drawToCanvas(200, 200, 0, 0);
			debugger;
		}
	}

}