package laya.events {
	
	
	/**
	 * <code>Event</code> 是事件类型的集合。一般当发生事件时，<code>Event</code> 对象将作为参数传递给事件侦听器。
	 */
	public dynamic class Event {
		/*[DISABLE-ADD-VARIABLE-DEFAULT-VALUE]*/
		/** 一个空的 Event 对象。用于事件派发中转使用。*/
		public static const EMPTY:Event =/*[STATIC SAFE]*/ new Event();
		/** 定义 change 事件对象的 type 属性值。*/
		public static const CHANGE:String = "change";
		/** 定义 changed 事件对象的 type 属性值。*/
		public static const CHANGED:String = "changed";
		/** 定义 resize 事件对象的 type 属性值。*/
		public static const RESIZE:String = "resize";
		/** 定义 added 事件对象的 type 属性值。*/
		public static const ADDED:String = "added";
		/** 定义 removed 事件对象的 type 属性值。*/
		public static const REMOVED:String = "removed";
		/** 定义 display 事件对象的 type 属性值。*/
		public static const DISPLAY:String = "display";
		/** 定义 undisplay 事件对象的 type 属性值。*/
		public static const UNDISPLAY:String = "undisplay";
		/** 定义 error 事件对象的 type 属性值。*/
		public static const ERROR:String = "error";
		/** 定义 complete 事件对象的 type 属性值。*/
		public static const COMPLETE:String = "complete";
		/** 定义 loaded 事件对象的 type 属性值。*/
		public static const LOADED:String = "loaded";
		/** 定义 progress 事件对象的 type 属性值。*/
		public static const PROGRESS:String = "progress";
		/** 定义 input 事件对象的 type 属性值。*/
		public static const INPUT:String = "input";
		/** 定义 render 事件对象的 type 属性值。*/
		public static const RENDER:String = "render";
		/** 定义 open 事件对象的 type 属性值。*/
		public static const OPEN:String = "open";
		/** 定义 message 事件对象的 type 属性值。*/
		public static const MESSAGE:String = "message";
		/** 定义 close 事件对象的 type 属性值。*/
		public static const CLOSE:String = "close";
		/** 定义 keydown 事件对象的 type 属性值。*/
		public static const KEY_DOWN:String = "keydown";
		/** 定义 keypress 事件对象的 type 属性值。*/
		public static const KEY_PRESS:String = "keypress";
		/** 定义 keyup 事件对象的 type 属性值。*/
		public static const KEY_UP:String = "keyup";
		/** 定义 enter 事件对象的 type 属性值。*/
		public static const ENTER:String = "enter";
		/** 定义 select 事件对象的 type 属性值。*/
		public static const SELECT:String = "select";
		/** 定义 blur 事件对象的 type 属性值。*/
		public static const BLUR:String = "blur";
		/** 定义 focus 事件对象的 type 属性值。*/
		public static const FOCUS:String = "focus";
		/** 定义 visibilitychange 事件对象的 type 属性值。*/
		public static const VISIBILITY_CHANGE:String = "visibilitychange";
		/** 定义 focuschange 事件对象的 type 属性值。*/
		public static const FOCUS_CHANGE:String = "focuschange";
		/** 定义 played 事件对象的 type 属性值。*/
		public static const PLAYED:String = "played";
		/** 定义 paused 事件对象的 type 属性值。*/
		public static const PAUSED:String = "paused";
		/** 定义 stopped 事件对象的 type 属性值。*/
		public static const STOPPED:String = "stopped";
		/** 定义 start 事件对象的 type 属性值。*/
		public static const START:String = "start";
		/** 定义 end 事件对象的 type 属性值。*/
		public static const END:String = "end";
		
		/** 事件类型。*/
		public var type:String;
		/** 原生浏览器事件。*/
		public var nativeEvent:*;
		/** 事件目标触发对象。*/
		public var target:*;
		/** 事件当前冒泡对象。*/
		public var currentTarget:*;
		/** @private */
		public var _stoped:Boolean;
		/** 分配给触摸点的唯一标识号（作为 int）。*/
		public var touchId:int;
		/**键盘值*/
		public var keyCode:int;
		/**滚轮滑动增量*/
		public var delta:int;
		
		/**
		 * 设置事件数据。
		 * @param	type 事件类型。
		 * @param	currentTarget 事件目标触发对象。
		 * @param	target 事件当前冒泡对象。
		 * @return 返回当前 Event 对象。
		 */
		public function setTo(type:String, currentTarget:*, target:*):Event {
			this.type = type;
			this.currentTarget = currentTarget;
			this.target = target;
			return this;
		}
		
		/**
		 * 阻止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。此方法不会影响当前节点 (currentTarget) 中的任何事件侦听器。
		 */
		public function stopPropagation():void {
			this._stoped = true;
		}
		
		/**
		 * 表示 Alt 键是处于活动状态 (true) 还是非活动状态 (false)。
		 */
		public function get altKey():Boolean {
			return this.nativeEvent.altKey;
		}
		
		/**
		 * 表示 Ctrl 键是处于活动状态 (true) 还是非活动状态 (false)。
		 */
		public function get ctrlKey():Boolean {
			return this.nativeEvent.ctrlKey;
		}
		
		/**
		 * 表示 Shift 键是处于活动状态 (true) 还是非活动状态 (false)。
		 */
		public function get shiftKey():Boolean {
			return this.nativeEvent.shiftKey;
		}
		
		/**
		 * 包含按下或释放的键的字符代码值。字符代码值为英文键盘值。
		 */
		public function get charCode():Boolean {
			return this.nativeEvent.charCode;
		}
		
		/**
		 * 表示键在键盘上的位置。这对于区分在键盘上多次出现的键非常有用。<br>
		 * 例如，您可以根据此属性的值来区分左 Shift 键和右 Shift 键：左 Shift 键的值为 KeyLocation.LEFT，右 Shift 键的值为 KeyLocation.RIGHT。另一个示例是区分标准键盘 (KeyLocation.STANDARD) 与数字键盘 (KeyLocation.NUM_PAD) 上按下的数字键。
		 */
		public function get keyLocation():uint {
			return this.nativeEvent.keyLocation;
		}
	}
}