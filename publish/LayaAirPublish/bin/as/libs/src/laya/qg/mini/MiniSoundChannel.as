package laya.qg.mini
{
	import laya.events.Event;
	import laya.media.SoundChannel;
	import laya.media.SoundManager;
	
	/** @private **/
	public class MiniSoundChannel extends SoundChannel {
		/**@private **/
		private var _audio:*;
		/**@private **/
		private var _onEnd:Function;
		private var _onCanplay:Function;
		private var _onError:Function;
		
		/**@private **/
		private var _miniSound:MiniSound;
		
		public function MiniSoundChannel(miniSound:MiniSound) {
			this._audio = miniSound._sound;
			this._miniSound = miniSound;
			_onEnd = bindToThis(__onEnd, this);
			_onCanplay = bindToThis(onCanPlay,this);
			_onError = bindToThis(onError, this);
			addEventListener();
		}
		
		private function addEventListener():void{
			_audio.onError(_onError);
			_audio.onCanplay(_onCanplay);
			//_audio.onEnded(_onEnd);
		}
		
		private function offEventListener():void{
			_audio.offError(_onError);
			_audio.offCanplay(_onCanplay);
			_audio.offEnded(_onEnd);
		}
		
		/**@private **/
		private function onError(error:*):void
		{
			console.log("-----1---------------minisound-----url:",url);
			//console.log(error);
			event(Event.ERROR,[error]);
			if(!_audio)return;
			_miniSound.dispose();
			offEventListener();
			_audio = _miniSound = null;
		}
		
		/**@private **/
		private function onCanPlay():void
		{
			if(!_audio)return;
			event(Event.COMPLETE);
			offEventListener();
			_audio.onEnded(_onEnd);
			if (!isStopped) {
				play()
			}else{
				stop();
			}
		}
		
		/**
		 * @private 
		 * 给传入的函数绑定作用域，返回绑定后的函数。
		 * @param	fun 函数对象。
		 * @param	scope 函数作用域。
		 * @return 绑定后的函数。
		 */
		public static function bindToThis(fun:Function, scope:*):Function {
			var rst:Function = fun;
			__JS__("rst=fun.bind(scope);");
			return rst;
		}
		
		/**@private **/
		private function __onEnd():void {
			if (this.loops == 1) {
				if (completeHandler) {
					Laya.timer.once(10, this, __runComplete, [completeHandler], false);
					completeHandler = null;
				}
				this.stop();
				event(Event.COMPLETE);
				return;
			}
			if (this.loops > 0) {
				this.loops--;
			}
			this.startTime = 0;
			this.play();
		}
		
		
		
		/**
		 * @private 
		 * 播放
		 */
		override public function play():void {
			this.isStopped = false;
			SoundManager.addChannel(this);
			if(!this._audio || !this._audio.src)return;
			this._audio.play();
		}
		
		/**
		 * 设置开始时间 
		 * @param time
		 */		
		public function set startTime(time:Number):void
		{
			if(!this._audio)return;
				this._audio.startTime = time;
			
		}
		
		/**
		 * 设置开始时间 
		 * @param time
		 */		
		public function get startTime():Number
		{
			if(!this._audio) return 0;
				return this._audio.startTime;
		}
			
		/**@private  **/
		public function set autoplay(value:Boolean):void
		{
			if(!this._audio)return;
			this._audio.autoplay = value;
		}
		
		/**
		 * @private 
		 * 自动播放 
		 * @param value
		 */	
		public function get autoplay():Boolean
		{
			if(!this._audio)return false;
			return this._audio.autoplay;
		}
		
		/**
		 * @private 
		 * 获取总时间。
		 */
		public function	get duration():Number {
			if(!this._audio)return 0;
			return this._audio.duration;
		}
		
		/**
		 * @private 
		 * 当前播放到的位置
		 * @return
		 *
		 */
		override public function get position():Number {
			if (!this._audio)
				return 0;
			return _audio.currentTime;
		}
		
		/**
		 * @private 
		 * 获取总时间。
		 */
		override public function get duration():Number {
			if (!this._audio)
				return 0;
			return _audio.duration;
		}
		
		/**
		 * @private 
		 * 停止播放
		 *
		 */
		override public function stop():void {
			super.stop();
			this.isStopped = true;
			SoundManager.removeChannel(this);
			completeHandler = null;
			if (!_audio)
				return;
			_audio.stop();//停止播放
			if (!loop) {
				offEventListener();
				_miniSound.dispose();
				_miniSound = null;
				_audio = null;
			}
		}
		
		/**@private **/
		override public function pause():void {
			this.isStopped = true;
			if(!this._audio)return;
			_audio.pause();
		}
		
		/**@private **/
		public function get loop():Boolean
		{
			if(!this._audio)return false;
			return _audio.loop;
		}
		
		/**@private **/
		public function set loop(value:Boolean):void
		{
			if(!this._audio)return;
			_audio.loop = value;
		}
		
		/**@private **/
		override public function resume():void {
			if (!_audio)
				return;
			this.isStopped = false;
			SoundManager.addChannel(this);
			_audio.play();
		}
		
		/**
		 * @private 
		 * 设置音量
		 * @param v
		 *
		 */
		override public function set volume(v:Number):void {
			if (!this._audio)return;
			this._audio.volume=v;
		}
		
		/**
		 * @private 
		 * 获取音量
		 * @return
		 */
		override public function get volume():Number {
			if (!this._audio)return 1;
			return this._audio.volume;
		}
	}	
}