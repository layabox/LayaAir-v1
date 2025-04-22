package db 
{
    import laya.data.Sheet;
	import laya.data.MessageBase;
	public class AchievementCountData extends MessageBase
	{
		public static function sheet():Sheet {
			return Sheet.get("AchievementCount");
		}
		
		public static function getData(id:int):AchievementCountData {
			return Sheet.getData("AchievementCount", id);
		}
				
		public static function getByID(id:String):AchievementCountData {
			return Sheet.getByID("AchievementCount", id);
		}

		private var _gold:Number;
		public function get gold():Number {
			return _gold;
		}
		
		public function set gold(value:Number):void {
			_gold = value;
			notify("gold");
		}

		private var _price:Number;
		public function get price():Number {
			return _price;
		}
		
		public function set price(value:Number):void {
			_price = value;
			notify("price");
		}
		public function notify(prop:String):void {
			Sheet.notify("AchievementCount."+prop);
			Sheet.notify("AchievementCount");
		}
		
		public static const DES:Array = [
			["gold", MessageBase.UINT32],
			["price", MessageBase.UINT32]
		];
	}
	
}
