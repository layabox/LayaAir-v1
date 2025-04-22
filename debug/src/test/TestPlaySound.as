package test 
{
	import laya.debug.tools.DebugTxt;
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.media.SoundManager;
	import laya.renders.Render;
	import laya.utils.Browser;
	import laya.utils.Handler;
	import laya.utils.Utils;
	/**
	 * ...
	 * @author ww
	 */
	public class TestPlaySound 
	{
		
		public function TestPlaySound() 
		{
			Laya.init(1000, 900);
			SoundManager.useAudioMusic = true;
			//SoundManager._soundClass = Audio;
			//SoundManager.autoStopMusic = true;
			//SoundManager.autoStopMusic = false;
			DebugTxt.init();
			DebugTxt.dTrace("ver:8");
			DebugTxt.dTrace("Loading");
			//Laya.loader.load(["mp3/shot.mp3", "mp3/music.mp3"], new Handler(this, onLoaded));
			onLoaded();
			Laya._runScript("console.log('eva hihi')");
			__JS__('codeImg.style.display="none"');
			
			var sp:Sprite;
			sp = new Sprite();
			sp.graphics.drawRect(0, 0, 200, 200, "#ff0000");
			sp.size(200, 200);
			sp.pos(200, 100);
			Laya.stage.addChild(sp);
			sp.on(Event.CLICK, this, showDiv);
		}
		
		private function showDiv():void
		{
			var _close:Function;
			_close = Utils.bind(onDivClose,this);
			__JS__('codeImg.style.display="flex"');
			__JS__('layaContainer.style.display="none"');
			__JS__("codeImg.addEventListener('touchstart', function(e){")
				__JS__("window.isColse=1;console.log('dw'+window.isColse);setTimeout(function(){window.isColse=0;console.log('out'+window.isColse)},500);")
			__JS__("});")
			__JS__("codeImg.addEventListener('touchend', function(e){")
			__JS__("console.log('up'+window.isColse);if(window.isColse){_close();codeImg.style.display='none';layaContainer.style.display='block';}});")

		}
		private function onDivClose():void
		{
			trace("onDivClose");
		}
		private function onLoaded():void
		{
			DebugTxt.dTrace("Start");
			Laya.stage.on(Event.CLICK, this, onClick);
		}
		
		private function onClick():void
		{
			DebugTxt.dTrace("playMusic");
			Laya.stage.off(Event.CLICK, this, onClick);
			SoundManager.playMusic("mp3/music.mp3");
			Laya.stage.on(Event.CLICK, this, onClick2);
		}
		
		private function onClick2():void
		{
			DebugTxt.dTrace("playSound");
			SoundManager.playSound("mp3/shot.mp3");
		}
	}

}