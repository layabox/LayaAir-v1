package test 
{
	import laya.display.Sprite;
	/**
	 * ...
	 * @author ww
	 */
	public class TestGetSet 
	{
		
		public function TestGetSet() 
		{
			Laya.init(1000, 900);
			test();
		}
		public static function getDes(tar:Object, key:String):*
		{
			var oldO:Object = __JS__("Object.getOwnPropertyDescriptor(tar, key);")
			return oldO;
		}
		private function test():void
		{
			var sp:Sprite;
			sp = new Sprite();
			var des:Object;
			des = getDes(Sprite["prototype"], "x");
			debugger;
			var setFun:Function;
			setFun = des["set"];
			setFun.call(sp, 22);
			trace(sp.x);
		}
	}

}