package {
	import laya.data.MessageBase;
	
	/**
	 * ...
	 * @author yung
	 */
	public class BuyItemCM extends MessageBase {
		public static var I:BuyItemCM = new BuyItemCM();
		public var id:int;
		public static const DES:Array = [
			["id", MessageBase.UINT8]
		];	
		
		public function init(id:int):BuyItemCM {
			this.id = id;
			return this;
		}
	}
}