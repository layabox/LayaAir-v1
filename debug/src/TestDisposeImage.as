package  
{
	import BKLaya.LayaBKAdpter;
	import laya.events.Event;
	import laya.net.Loader;
	import laya.ui.Image;
	import laya.webgl.WebGL;
	/**
	 * ...
	 * @author ww
	 */
	public class TestDisposeImage 
	{
		
		public function TestDisposeImage() 
		{
			//LayaBKAdpter;
			WebGL.enable();
			Laya.init(1000, 900);
			Laya.stage.on(Event.CLICK, this, test);
		}
		
		private var img:Image;
		private function test():void
		{
			if (img)
			{
				removeImage();
			}else
			{
				addImage();
			}
		}
		private var imagePath:String="res/fighter.png";
		private function addImage():void
		{
			img = new Image();
			img.skin = imagePath;
			Laya.stage.addChild(img);
			img.pos(100, 100);
		}
		private function removeImage():void
		{
			img.removeSelf();
			img = null;
			debugger;
			Loader.clearRes(imagePath,true);
		}
		
	}

}