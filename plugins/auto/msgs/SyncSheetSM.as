package {
	import laya.data.MessageBase;
	import laya.utils.ClassUtils;
	
	/**
	 * 同步表消息
	 */
	public class SyncSheetSM extends MessageBase {
		/**单例*/
		public static var I:SyncSheetSM = new SyncSheetSM();
		
		public var sheetName:String;
		public var data:Array;
		
		/**@private */
		public static const DES:Array = [["sheetName", MessageBase.STRING], ["data", MessageBase.ARRAY, [MessageBase.DYNAMIC]]];
		
		/**@private */
		public function getClass(field:String = null):* {
			return ClassUtils.getClass("db." + sheetName + "Data");
		}
		
		public function init(sheetName:String, data:Array):SyncSheetSM {
			this.sheetName = sheetName;
			this.data = data;
			return this;
		}
	}
}