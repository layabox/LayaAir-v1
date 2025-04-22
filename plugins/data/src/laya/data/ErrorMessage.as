package laya.data {
	
	/**
	 * 错误消息
	 */
	public class ErrorMessage extends MessageBase {
		public static var I:ErrorMessage = new ErrorMessage();
		public var type:int;
		public var error:String;
		
		public static const DES:Array = [
			["type", MessageBase.UINT8], 
			["error", MessageBase.STRING]
		];
	}
}