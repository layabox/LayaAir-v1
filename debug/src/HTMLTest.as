package  {
	import laya.display.Input;
	import laya.html.dom.HTMLDivElement;
	import laya.utils.Stat;
	/**
	 * 
	 */
	public class HTMLTest {
		public static var input:Input;
		
		public function HTMLTest() {
			Laya.init(1000, 900);
			Laya.stage.bgColor = "#efefef";
			Laya.stage.graphics.drawCircle(400, 50, 50, null, "#ff0000");
			Laya.stage.graphics.drawCircle(400, 850, 50, null, "#ff0000");
			
			//Laya.stage.on("click", this, onClick);
			
			input = new Input();
			input.size(300, 80);
			input.pos(200, 200);
			input.borderColor = "#ff0000";
			Laya.stage.addChild(input);
			
			Stat.show();
		}		
		
		private function onClick():void {
			for (var i:int = 0,n:int=10; i < n; i++) {
				var html:HTMLDivElement = new HTMLDivElement();
				html.pos(Laya.stage.width * Math.random(), Laya.stage.height * Math.random());
				//html.innerHTML = "<div style='font-size:30px;color:#ffff00'>This is a face <img src='res/xin.png'></img>哈哈<br/>换行了吧，<span style='color:#ff0000'>颜色</span><span style='bold:true'>粗体</span></div>";
				html.innerHTML = "This is a face <img src='res/xin.png'></img>哈哈<br/>换行了吧，<span style='color:#ff0000'>颜色</span><span style='bold:true'>粗体</span><a href='aaaa'>this is 测试</a>";
				Laya.stage.addChild(html);
			}
		}
	}
}