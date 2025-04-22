package laya.utils {
	
	/**
	 * <code>Utils</code> 是工具类。
	 */
	public class Utils {
		/**@private */
		private static var _gid:int = 1;
		/**@private */
		private static var _pi:Number = /*[STATIC SAFE]*/ 180 / Math.PI;
		/**@private */
		private static var _pi2:Number = /*[STATIC SAFE]*/ Math.PI / 180;
		/**@private */
		protected static var _extReg:RegExp =/*[STATIC SAFE]*/ /\.(\w+)\??/g;
		
		/**
		 * 角度转弧度。
		 * @param	angle 角度值。
		 * @return	返回弧度值。
		 */
		public static function toRadian(angle:Number):Number {
			return angle * _pi2;
		}
		
		/**
		 * 弧度转换为角度。
		 * @param	radian 弧度值。
		 * @return	返回角度值。
		 */
		public static function toAngle(radian:Number):Number {
			return radian * _pi;
		}
		
		/**获取一个全局唯一ID。*/
		public static function getGID():int {
			return _gid++;
		}
		
		/**
		 * 给传入的函数绑定作用域，返回绑定后的函数。
		 * @param	fun 函数对象。
		 * @param	scope 函数作用域。
		 * @return 绑定后的函数。
		 */
		public static function bind(fun:Function, scope:*):Function {
			var rst:Function = fun;
			__JS__("rst=fun.bind(scope);");
			return rst;
		}
		
		/**
		 * @private
		 * 对传入的数组列表，根据子项的属性 Z 值进行重新排序。返回是否已重新排序的 Boolean 值。
		 * @param	array 子对象数组。
		 * @return	Boolean 值，表示是否已重新排序。
		 */
		public static function updateOrder(array:Array):Boolean {
			if (!array || array.length < 2) return false;
			var i:int = 1, j:int, len:int = array.length, key:Number, c:*;
			while (i < len) {
				j = i;
				c = array[j];
				key = array[j]._zOrder;
				while (--j > -1) {
					if (array[j]._zOrder > key) array[j + 1] = array[j];
					else break;
				}
				array[j + 1] = c;
				i++;
			}
			return true;
		}
		
		/**@private */
		public static function getFileExtension(path:String):String {
			_extReg.lastIndex = path.lastIndexOf(".");
			var result:Array = _extReg.exec(path);
			if (result && result.length > 1) {
				return result[1].toLowerCase();
			}
			return null;
		}
	}
}