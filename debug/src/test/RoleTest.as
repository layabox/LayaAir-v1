package test
{
	import laya.display.Animation;
	import laya.display.Text;
	import laya.net.WorkerLoader;
	import laya.ui.TextArea;
	import laya.ui.TextInput;
	import laya.utils.Browser;
	import laya.utils.Handler;
	import laya.webgl.WebGL;

	public class RoleTest
	{
		private var _animation:Animation;
		private var arr2:Array = [];
		public function RoleTest()
		{
			// 不支持WebGL时自动切换至Canvas
			//Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
			Laya.init(Browser.clientWidth,Browser.clientHeight);
			//背景颜色
			Laya.stage.bgColor = "#ffffff";
			Config.atlasEnable = false;
			
			WorkerLoader.workerPath = "worker.js";
			WorkerLoader.enable = true;//worker打开内存高，关闭内存就低了
			
			var text:TextArea = new TextArea;
			text.width = 300;
			text.height = 1000;
			Laya.stage.addChild(text);
			
			var arr:Array = ["b016102","p016102","w001102","b016002","p016002","w001002","b016001","p016001","w001001","b016101", "p016101","w001101","b016005", "p016005", "w001005","b016105", "p016105", "w001105"];
			
			for(var i:int = 0; i < arr.length; i++)
			{
				var url:String = "temp/res/" + arr[i] + ".atlas";
				arr2.push(url);
			}
			Laya.loader.load(arr2, Handler.create(this,comHandler));
		}
		
		private function comHandler():void
		{
			return;
			for(var i:int = 0; i < arr2.length; i++)
			{
				_animation = new Animation();
				_animation.interval = 100;
				_animation.loadAtlas(arr2[i],null,arr2[i]);
				Laya.stage.addChild(_animation);
				_animation.pos(Math.random() * 600,Math.random() * 600);
				_animation.play();
			}
		}
	}
}