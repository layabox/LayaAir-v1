package laya.wx.mini
{

	/**
	 * 视频类 
	 * @author xiaosong
	 * @date -2019-04-22
	 */	
	public class MiniVideo
	{
		/**视频是否播放结束**/
		public var videoend:Boolean = false;
		public var videourl:String = "";
		public var videoElement:*;
		
		public function MiniVideo(width:int = 320, height:int = 240)
		{
			videoElement = MiniAdpter.window.wx.createVideo({width:width,height:height,autoplay:true});
		}
		
		public static function __init__():void
		{
			__JS__('laya.device.media.Video = MiniVideo');
		}
		
		public var onPlayFunc:Function;
		public var onEndedFunC:Function;
		public function on(eventType:String,ths:*,callBack:Function):void
		{
			if(eventType == "loadedmetadata")
			{
				//加载完毕
				onPlayFunc = callBack.bind(ths);
				videoElement.onPlay = onPlayFunction.bind(this);
			}else if(eventType == "ended")
			{
				//播放完毕
				onEndedFunC = callBack.bind(ths);
				videoElement.onEnded = onEndedFunction.bind(this);
			}
			videoElement.onTimeUpdate = onTimeUpdateFunc.bind(this);
		}
		
		/**视频的总时⻓长，单位为秒**/
		private var _duration:Number;
		/**视频播放的当前位置**/
		private var position:Number;
		private function onTimeUpdateFunc(data:Object):void
		{
			position = data.position;
			_duration = data.duration;
		}
		
		/**
		 * 获取视频长度（秒）。ready事件触发后可用。
		 */
		public function get duration():Number
		{
			return _duration;
		}
		
		private function onPlayFunction():void
		{
			if(videoElement)
				videoElement.readyState = 200;
			trace("=====视频加载完成========");
			onPlayFunc != null && onPlayFunc();
		}
		
		private function onEndedFunction():void
		{
			if(!videoElement)
				return;
			videoend = true;
			trace("=====视频播放完毕========");
			onEndedFunC != null && onEndedFunC();
		}
		
		public function off(eventType:String,ths:*,callBack:Function):void
		{
			if(eventType == "loadedmetadata")
			{
				//加载完毕
				onPlayFunc = callBack.bind(ths);
				videoElement.offPlay = onPlayFunction.bind(this);
			}else if(eventType == "ended")
			{
				//播放完毕
				onEndedFunC = callBack.bind(ths);
				videoElement.offEnded = onEndedFunction.bind(this);
			}
		}
		
		/**
		 * 设置播放源。
		 * @param url	播放源路径。
		 */
		public function load(url:String):void
		{
			if(!videoElement)
				return;
			videoElement.src = url;
		}
		
		/**
		 * 开始播放视频。
		 */
		public function play():void
		{
			if(!videoElement)
				return;
			videoend = false;
			videoElement.play();
		}
		
		/**
		 * 暂停视频播放。
		 */
		public function pause():void
		{
			if(!videoElement)
				return;
			videoend = true;
			videoElement.pause();
		}
		
		/**
		 * 设置和获取当前播放头位置。
		 */
		public function get currentTime():Number
		{
			if(!videoElement)
				return 0;
			return videoElement.initialTime;
		}
		
		public function set currentTime(value:Number):void
		{
			if(!videoElement)
				return;
			videoElement.initialTime = value;
		}
		
		/**
		 * 获取视频源尺寸。ready事件触发后可用。
		 */
		public function get videoWidth():int
		{
			if(!videoElement)
				return 0;
			return videoElement.width;
		}
		
		public function get videoHeight():int
		{
			if(!videoElement)
				return 0;
			return videoElement.height;
		}
		
		/**
		 * 返回音频/视频的播放是否已结束
		 */
		public function get ended():Boolean
		{
			return videoend;
		}
		
		/**
		 * 设置或返回音频/视频是否应在结束时重新播放。
		 */
		public function get loop():Boolean
		{
			if(!videoElement)
				return false;
			return videoElement.loop;
		}
		
		public function set loop(value:Boolean):void
		{
			if(!videoElement)
				return;
			videoElement.loop = value;
		}
		
		/**
		 * playbackRate 属性设置或返回音频/视频的当前播放速度。如：
		 * <ul>
		 * <li>1.0 正常速度</li>
		 * <li>0.5 半速（更慢）</li>
		 * <li>2.0 倍速（更快）</li>
		 * <li>-1.0 向后，正常速度</li>
		 * <li>-0.5 向后，半速</li>
		 * </ul>
		 * <p>只有 Google Chrome 和 Safari 支持 playbackRate 属性。</p>
		 */
		public function get playbackRate():Number
		{
			if(!videoElement)
				return 0;
			return videoElement.playbackRate;
		}
		
		public function set playbackRate(value:Number):void
		{
			if(!videoElement)
				return;
			videoElement.playbackRate = value;
		}
		
		/**
		 * 获取和设置静音状态。
		 */
		public function get muted():Boolean
		{
			if(!videoElement)
				return false;
			return videoElement.muted;
		}
		
		public function set muted(value:Boolean):void
		{
			if(!videoElement)
				return;
			videoElement.muted = value;
		}
		
		/**
		 * 返回视频是否暂停
		 */
		public function get paused():Boolean
		{
			if(!videoElement)
				return false;
			return videoElement.paused;
		}
		
		/**
		 * 设置大小 
		 * @param width
		 * @param height
		 */		
		public function size(width:Number,height:Number):void
		{
			if(!videoElement)
				return;
			videoElement.width = width;
			videoElement.height = height;
		}
		
		public function get x():Number
		{
			if(!videoElement)
				return 0;
			return videoElement.x;
		}
		
		public function set x(value:Number):void
		{
			if(!videoElement)
				return;
			videoElement.x = value;
		}
		
		public function get y():Number
		{
			if(!videoElement)
				return 0;
			return videoElement.y;
		}
		
		public function set y(value:Number):void
		{
			if(!videoElement)
				return;
			videoElement.y = value;
		}
		
		/**
		 * 获取当前播放源路径。
		 */
		public function get currentSrc():String
		{
			return videoElement.src;
		}
		
		public function destroy():void
		{
			if(videoElement)
				videoElement.destroy();	
			videoElement= null;
			onEndedFunC = null;
			onPlayFunc = null;
			videoend = false;
			videourl = null;
		}
		
		/**
		 * 重新加载视频。
		 */
		public function reload():void
		{
			if(!videoElement)
				return;
			videoElement.src = videourl;
		}
	}
}