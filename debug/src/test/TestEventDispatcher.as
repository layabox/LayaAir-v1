package test {
	import laya.events.EventDispatcher;
	
	/**
	 * ...
	 * @author ww
	 */
	public class TestEventDispatcher {
		
		public function TestEventDispatcher() {
			Laya.init(1000, 900);
			test();
		}
		
		private function test():void {
			var e:EventDispatcher = new EventDispatcher();
			e.on("test", this, this.test1);
			e.on("test", this, this.test2);
			
			e.off("test", this, this.test1);
			e.off("test", this, this.test2);
			console.log(e.hasListener("test"));
		}
	
		private function test1():void
		{}
		private function test2():void
		{}
	}

}