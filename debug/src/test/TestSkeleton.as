package test 
{
	import laya.ani.bone.Skeleton;
	/**
	 * ...
	 * @author ww
	 */
	public class TestSkeleton 
	{
		
		public function TestSkeleton() 
		{
			Laya.init(1000, 900);
			test();
		}
		private function test():void
		{
			var sk:Skeleton;
			sk = new Skeleton();
			debugger;
			sk.load("sk/skeleton.sk");
			Laya.stage.addChild(sk);
		}
	}

}