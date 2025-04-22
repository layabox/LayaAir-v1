package test 
{
	import laya.html.dom.HTMLDivElement;
	/**
	 * ...
	 * @author ww
	 */
	public class TestHtml 
	{
		
		public function TestHtml() 
		{
			Laya.init(1000, 900);
			Laya.stage.bgColor = "#ffffff";
			test();
		}
		
		private function test():void
		{
			var html:HTMLDivElement = new HTMLDivElement();
				html.pos(200, 200);
				
				html.innerHTML = "This is a face <img src='res/xin.png'></img>哈哈<br/>换行了吧，<span style='color:#ff0000'>颜色</span><span style='bold:true'>粗体</span><a href='aaaa' style='text-decoration:none'>this is 测试</a>";
				Laya.stage.addChild(html);
		}
		
	}

}