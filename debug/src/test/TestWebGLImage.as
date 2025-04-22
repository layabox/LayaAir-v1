package test {
	import laya.net.Loader;
	import laya.resource.ResourceManager;
	import laya.ui.Label;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	
	/**
	 * ...
	 * @author ww
	 */
	public class TestWebGLImage {
		
		public function TestWebGLImage() {
			WebGL.enable();
			Laya.init(1000, 900);
			test();
		}
		
		private var label:Label;
		private var urlPath:String = "res/bunny.png";
		
		private function test():void {
			label = new Label();
			Laya.stage.addChild(label);
			label.color = '#FFFFFF';
			label.size = 24;
			label.x = 200;
			Stat.show();
			testClearRes();
			Laya.timer.loop(100, this, testClearRes);
		}
		
		private function testClearRes():void
		{
			Loader.clearRes(urlPath);
			Laya.loader.load(urlPath);
			label.text = "WebGLImage: " + getCount();
		}
		
		private function getCount():int
		{
			var i:int, len:int;
			var arr:Array;
			arr = ResourceManager.systemResourceManager._resources;
			len = arr.length;
			var count:int;
			count = 0;
			var tItem:Object;
			for (i = 0; i < len; i++)
			{
				tItem = arr[i];
				if (tItem.__className == "laya.webgl.resource.WebGLImage")
				{
					count++;
				}
			}
			return count;
		}
	}

}