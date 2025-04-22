package laya.vv.mini
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
			
			Laya.stage.on("resize", null, _onStageResize);
			
			VVMiniAdapter.window.qg.onWindowResize && VVMiniAdapter.window.qg.onWindowResize(function(res:*):void {
				VVMiniAdapter.window.dispatchEvent && VVMiniAdapter.window.dispatchEvent("resize");
			});
			
			//替换声音
			SoundManager._soundClass = MiniSound;
			SoundManager._musicClass = MiniSound;
			
			//运行环境判断
			Browser.onAndroid = true;
			Browser.onIPhone = false;
			Browser.onIOS = false;
			Browser.onIPad = false;
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
			VVMiniAdapter.window.qg.offKeyboardConfirm();
			VVMiniAdapter.window.qg.offKeyboardInput();
			VVMiniAdapter.window.qg.showKeyboard({defaultValue: _inputTarget.text, maxLength: _inputTarget.maxChars, multiple: _inputTarget.multiline, confirmHold: true, confirmType: 'done', success: function(res:*):void {
			}, fail: function(res:*):void {
			}});
			
			VVMiniAdapter.window.qg.onKeyboardConfirm(function(res:*):void {
				var str:String = res ? res.value : "";
				_inputTarget.text = str;
				_inputTarget.event(Event.INPUT);
				MiniInput.inputEnter();
			})
			VVMiniAdapter.window.qg.onKeyboardInput(function(res:*):void {
				var str:String = res ? res.value : "";
				if (!_inputTarget.multiline) {
					if (str.indexOf("\n") != -1) {
						MiniInput.inputEnter();
						return;
					}
				}
				_inputTarget.text = str;
				_inputTarget.event(Event.INPUT);
			});
		}
		
		public static function inputEnter():void {
			Input['inputElement'].target.focus = false;
		}
		
		public static function wxinputblur():void {
			hideKeyboard();
		}
		
		public static function hideKeyboard():void {
			VVMiniAdapter.window.qg.offKeyboardConfirm();
			VVMiniAdapter.window.qg.offKeyboardInput();
			VVMiniAdapter.window.qg.hideKeyboard({success: function(res:*):void {
				console.log('隐藏键盘')
			}, fail: function(res:*):void {
				console.log("隐藏键盘出错:" + (res ? res.errMsg : ""));
			}});
		}
	}
}