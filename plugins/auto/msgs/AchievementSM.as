package {
	import laya.data.MessageBase;
	/**
	 * ...
	 * @author yung
	 */
	public class AchievementSM extends MessageBase {
		public static var I:AchievementSM = new AchievementSM();
		public var id:int;
		public static const DES:Array = [
			["id", MessageBase.UINT8]
		];	
		
		public function init(id:int):AchievementSM {
			this.id = id;
			return this;
		}
	}
}