package  
{
	import laya.display.Sprite;
	import laya.net.Loader;
	import laya.net.URL;
	import laya.resource.Texture;
	import laya.utils.Handler;
	/**
	 * ...
	 * @author ww
	 */
	public class TestPreLoadedMap 
	{
		
		public function TestPreLoadedMap() 
		{
			Laya.init(1000, 900);
			loadMergedJson();
		}
		
		private function loadMergedJson():void
		{
			trace("loadMergedJson");
			//加载合并的json文件,可以是任意格式的数据，只要后面能自己解析出文件就行
			Laya.loader.load("merge.jsonall", new Handler(this, onMegerdJsonLoaded), null, Loader.JSON);
		}
		private function onMegerdJsonLoaded(dataO:Object):void
		{
			trace("onMegerdJsonLoaded");
			
			
			var key:String;
			//将json数据设置到Loader.preLoadedMap中
			for (key in dataO)
			{
				Loader.preLoadedMap[URL.formatURL(key)]=dataO[key]
			}
			
			var atlasList:Array;
			//加载图集文件，因为前面已经设置了预加载的图集配置文件，所以此处加载最终只是加载了图集里面的图片
			atlasList = ["res/atlas/comp.atlas", "res/atlas/comp2.atlas"];
			Laya.loader.load(atlasList, new Handler(this, onAtlasLoaded));
		}
		
		private function onAtlasLoaded():void
		{
			trace("onAtlasLoaded");
			var texture:Texture;
			texture = Loader.getRes("comp/image.png");
			trace("texture:",texture)
		}
	}

}