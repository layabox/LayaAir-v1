package laya.utils {
	
	/**
	 * <code>ClassUtils</code> 是一个类工具类。
	 */
	public class ClassUtils {
		public static var _classMap:Object = /*[STATIC SAFE]*/ {}
		
		/**
		 * 注册 Class 映射。
		 * @param	className 映射的名字，或者类名简写。
		 * @param	classDef 类的全名或者类的引用，全名比如:"laya.display.Sprite"。
		 */
		public static function regClass(className:String, classDef:*):void {
			_classMap[className] = classDef;
		}
		
		/**
		 * 返回注册 Class 映射。
		 * @param	className 映射的名字。
		 */
		public static function getRegClass(className:String):* {
			return _classMap[className];
		}
		
		/**
		 * 根据名字返回类对象。
		 * @param	className 类名。
		 * @return 类对象
		 */
		public static var getClass:Function = function(className:String):* {
			var classObject:* = _classMap[className] || className;
			if (classObject is String)
				return Laya["__classmap"][classObject];
			return classObject;
		}
		
		/**
		 * 根据名称创建 Class 实例。
		 * @param	className 类名。
		 * @return	返回类的实例。
		 */
		public static function getInstance(className:String):* {
			var compClass:* = getClass(className);
			if (compClass)
				return new compClass();
			else
				console.warn("[error] Undefined class:", className);
			return null;
		}
	}
}