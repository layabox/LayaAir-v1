package laya.tbgame.mini
{
	import laya.display.Input;
	import laya.events.Event;
	import laya.maths.Matrix;
	import laya.media.SoundManager;
	import laya.renders.Render;
	import laya.utils.Browser;
	import laya.utils.RunDriver;
	
	/** @private **/
	public class MiniInput {
		public function MiniInput() {
		}
		
		private static function _createInputElement():void {
			Input['_initInput'](Input['area'] = Browser.createElement("textarea"));
			Input['_initInput'](Input['input'] = Browser.createElement("input"));
			
			Input['inputContainer'] = Browser.createElement("div");
			Input['inputContainer'].style.position = "absolute";
			Input['inputContainer'].style.zIndex = 1E5;
			Browser.container.appendChild(Input['inputContainer']);
			//[IF-SCRIPT] Input['inputContainer'].setPos = function(x:int, y:int):void { Input['inputContainer'].style.left = x + 'px'; Input['inputContainer'].style.top = y + 'px'; };
			//
			//Laya.stage.on("resize", null, _onStageResize);
			//
			//TBMiniGameAdapter.window.my.onWindowResize && TBMiniGameAdapter.window.my.onWindowResize(function(res:*):void {
				//TBMiniGameAdapter.window.dispatchEvent && TBMiniGameAdapter.window.dispatchEvent("resize");
			//});
			
			//替换声音
			SoundManager._soundClass = MiniSound;
			SoundManager._musicClass = MiniSound;
			
			//运行环境判断
			var model:String= TBMiniGameAdapter.systemInfo.model;
			var system:String = TBMiniGameAdapter.systemInfo.system;
			if(model.indexOf("iPhone") != -1)
			{
				Browser.onIPhone = true;
				Browser.onIOS = true;
				Browser.onIPad = true;
				Browser.onAndroid = false;
			}
			if(system.indexOf("Android") != -1 || system.indexOf("Adr") != -1)
			{
				Browser.onAndroid = true;
				Browser.onIPhone = false;
				Browser.onIOS = false;
				Browser.onIPad = false;
			}
		}
		
		private static function _onStageResize():void {
			var ts:Matrix = Laya.stage._canvasTransform.identity();
			ts.scale((Browser.width / Render.canvas.width / RunDriver.getPixelRatio()), Browser.height / Render.canvas.height / RunDriver.getPixelRatio());
		}
		
		public static function wxinputFocus(e:*):void {
			var _inputTarget:* = Input['inputElement'].target;
            if (_inputTarget && !_inputTarget.editable) {
				return;//非输入编辑模式
			}
            TBMiniGameAdapter.window.my.prompt({
                title: '请在提示框中输入内容',
                content: _inputTarget.text || "",
                placeholder: _inputTarget.prompt || "",
                success: function(res:*):void {
                    if (res.ok) {
                        console.log('用户点击确定');
                        var str = res ? res.inputValue : "";
                        if (_inputTarget._restrictPattern) {
                            str = str.replace(/\u2006|\x27/g, "");
                            if (_inputTarget._restrictPattern.test(str)) {
                                str = str.replace(_inputTarget._restrictPattern, "");
                            }
                        }
                        _inputTarget.text = str;
                        _inputTarget.miniGameTxt && _inputTarget.miniGameTxt(str);
                        _inputTarget.event(Event.INPUT);
                        MiniInput.inputEnter(false);
                        _inputTarget.event("confirm");
                        _inputTarget.event("enter");
                    }
                    else if (!res.ok) {
                        console.log('用户点击取消');
                        MiniInput.inputEnter(false);
                    }
                }
            });
		}
		
		public static function inputEnter(isBool:Boolean):void {
			if(!Input['inputElement'].target)
				return;
			Input['inputElement'].target.focus = false;
		}
		
		public static function wxinputblur():void {
		}
		
		public static function hideKeyboard():void {
			return
			//TBMiniGameAdapter.window.my.offKeyboardConfirm();
			//TBMiniGameAdapter.window.my.offKeyboardInput();
			TBMiniGameAdapter.window.my.hideKeyboard({success: function(res:*):void {
				console.log('隐藏键盘')
			}, fail: function(res:*):void {
				console.log("隐藏键盘出错:" + (res ? res.errMsg : ""));
			}});
		}
	}
}