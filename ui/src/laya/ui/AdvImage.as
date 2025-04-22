package laya.ui
{
	import laya.events.Event;
	import laya.utils.Browser;

	/**
	 * 广告插件 
	 * @author 小松
	 * @date -2018-09-19
	 */	
	public class AdvImage extends Image
	{
		/**广告列表数据**/
		private  var advsListArr:Array = [];
		/**资源列表请求地址**/
		private  var resUrl:String = "https://unioncdn.layabox.com/config/iconlist.json";
		/**加载请求实例**/
		private var _http:* = new Browser.window.XMLHttpRequest();
		/**广告列表信息**/
		private var _data:* = [];
		/**每6分钟重新请求一次新广告列表**/
		private var _resquestTime:int = 360000;
		/**微信跳转appid**/
		private var _appid:String;
		/**二维码图片地址**/
		private var _appCodeImgStr:String;
		/**播放索引**/
		private  var _playIndex:int = 0;
		/**轮播间隔时间**/
		private var _lunboTime:int = 5000;
		public function AdvImage(skin:String=null)
		{
			this.skin = skin;
			init();
			this.size(120,120);
		}
		
		private function init():void
		{
			//这里需要去加载广告列表资源信息
			if(Browser.onMiniGame && isSupportJump)
			{
				Laya.timer.loop(_resquestTime,this,onGetAdvsListData);
				onGetAdvsListData();
				initEvent();
			}else
			{
				this.visible = false;
			}
		}
		
		private function initEvent():void
		{
			this.on(Event.CLICK,this,onAdvsImgClick);
		}
		
		private function onAdvsImgClick():void
		{
			var currentJumpUrl:String = getCurrentAppidObj();
			if(currentJumpUrl)
				jumptoGame();
		}
		
		/**当前小游戏环境是否支持游戏跳转功能**/
		private function get isSupportJump():Boolean
		{
			if(Browser.onMiniGame)
			{
				var isSupperJump:Boolean = __JS__('wx.navigateToMiniProgram') is Function;
				return isSupperJump;
			}
			return false;
		}
		
		private function revertAdvsData():void
		{
			if(advsListArr[_playIndex])
			{
				this.visible = true;
				this.skin = advsListArr[_playIndex];
			}
		}
		
		/**
		 * 跳转游戏 
		 * @param callBack Function 回调参数说明：type 0 跳转成功；1跳转失败；2跳转接口调用成功
		 */		
		private function jumptoGame():void
		{
			if(!Browser.onMiniGame)
				return;	
			if(isSupportJump)
			{
				__JS__('wx').navigateToMiniProgram({
					appId:_appid,
					path:"",
					extraData:"",
					envVersion:"release",
					success:function success():void{
						trace("-------------跳转成功--------------");
					},
					fail:function fail():void{
						trace("-------------跳转失败--------------");
					}, 
					complete: function complete():void
					{
						trace("-------------跳转接口调用成功--------------");
						updateAdvsInfo();
					}.bind(this)
				});
			}
		}
		
		private  function updateAdvsInfo():void
		{
			this.visible = false;
			onLunbo();
			Laya.timer.loop(_lunboTime,this,onLunbo);
		}
		
		private function onLunbo():void
		{
			if(_playIndex >= advsListArr.length-1)
				_playIndex =  0;
			else
				_playIndex += 1;
			this.visible = true;
			revertAdvsData();
		}
		
		/**获取轮播数据**/
		private  function getCurrentAppidObj():String
		{
			return advsListArr[_playIndex];
		}
		
		/**
		 * 获取广告列表数据信息 
		 */		
		private function onGetAdvsListData():void
		{
			var _this:* = this;
			var random:int = randRange(10000,1000000);
			var url:String = resUrl +"?" + random;
			_http.open("get", url, true);
			_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
			_http.responseType = "text";
			_http.onerror = function(e:*):void {
				_this._onError(e);
			}
			_http.onload = function(e:*):void {
				_this._onLoad(e);
			}
			_http.send(null);
		}
		
		/**
		 * 生成指定范围的随机数
		 * @param  minNum 最小值
		 * @param  maxNum 最大值
		 */
		private  function randRange(minNum, maxNum):int
		{
			return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
		}
		
		/**
		 * @private
		 * 请求出错侦的听处理函数。
		 * @param	e 事件对象。
		 */
		private function _onError(e:*):void {
			error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
		}
		
		/**
		 * @private
		 * 请求消息返回的侦听处理函数。
		 * @param	e 事件对象。
		 */
		private function _onLoad(e:*):void {
			var http:* = this._http;
			var status:Number = http.status !== undefined ? http.status : 200;
			if (status === 200 || status === 204 || status === 0) {
				complete();
			} else {
				error("[" + http.status + "]" + http.statusText + ":" + http.responseURL);
			}
		}
		
		/**
		 * @private
		 * 请求错误的处理函数。
		 * @param	message 错误信息。
		 */
		private function error(message:String):void {
			event(Event.ERROR, message);
		}
		
		/**
		 * @private
		 * 请求成功完成的处理函数。
		 */
		private function complete():void {
			var flag:Boolean = true;
			try {
				this._data = _http.response || _http.responseText;
				this._data = JSON.parse(this._data);
				//加载成功，做出回调通知处理
				advsListArr = this._data.list;
				_appid = this._data.appid;
				_appCodeImgStr = this._data.qrcode;
				updateAdvsInfo();
				revertAdvsData();
			} catch (e:*) {
				flag = false;
				error(e.message);
			}
		}
		
		/**
		 * @private
		 * 清除当前请求。
		 */
		private function clear():void {
			var http:* = this._http;
			http.onerror = http.onabort = http.onprogress = http.onload = null;
		}
		
		override public function destroy(destroyChild:Boolean=true):void
		{
			super.destroy(true);
			Laya.timer.clear(this,onLunbo);
			Laya.timer.clear(this,onGetAdvsListData);
			clear();
		}
	}
}