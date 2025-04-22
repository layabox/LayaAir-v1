package test {
	import laya.debug.tools.DebugTxt;
	import laya.events.Event;
	import laya.media.SoundManager;
	
	/**
	 * ...
	 * @author ww
	 */
	public class TestMusicPlay {
		private var MUSIC_0:String = "res/base_map.mp3";
		private var MUSIC_1:String = "res/citymap_0.mp3";
		
		public function TestMusicPlay() {
			Laya.init(1000, 900);
			SoundManager.useAudioMusic = false;
			//SoundManager.autoReleaseSound = false;
			SoundManager.autoStopMusic = false;
			DebugTxt.init();
			DebugTxt.dTrace("hihi");
			//Laya.timer.frameLoop(60, this, this.switchMusic);
			Laya.stage.on(Event.CLICK, this, playMusic);
		}
		
		private function playMusic():void
		{
			DebugTxt.dTrace("playMusic");
			//SoundManager.playMusic("mp3/btn.mp3", 0, null, 0);
			SoundManager.playMusic("mp3/battleWin.mp3", 0, null, 0);
			Laya.timer.once(1000, this, changeVolume);
		}

		private function changeVolume():void
		{
			SoundManager.setMusicVolume(0.1);
		}
		private var m_musicIdx:int;
		private function switchMusic():void {
			var playUrl:String = this.MUSIC_0;
			var releaseUrl:String = this.MUSIC_1;
			if (this.m_musicIdx == 0) {
				playUrl = this.MUSIC_1;
				releaseUrl = this.MUSIC_0;
				
				this.m_musicIdx = 1;
			}
			else {
				this.m_musicIdx = 0;
			}
			
			console.log("play url : " + playUrl + " release url : " + releaseUrl);
			
			//this.releaseMusic(releaseUrl);
			
			SoundManager.stopMusic();
			try {
				SoundManager.playMusic(playUrl, 0, null, 0);
			}
			catch (e) {
				trace(e.message);
			}
		
		}
		
		private function releaseMusic(url:String):void {
			var res = Loader.getRes(url);
			if (res != null) {
				res.dispose();
				Laya.loader.clearRes(url);
			}
		}
	
	}

}