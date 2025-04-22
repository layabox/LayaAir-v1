package {
	import laya.data.MessageBase;
	/**
	 * ...
	 * @author yung
	 */
	public class UseItemCM extends MessageBase {
		public static var I:UseItemCM = new UseItemCM();
		public var index:int;
		public static const DES:Array = [
			["index", MessageBase.UINT8]
		];	
		
		public function init(index:int):UseItemCM {
			this.index = index;
			return this;
		}
	}

}