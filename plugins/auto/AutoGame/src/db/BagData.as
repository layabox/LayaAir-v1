package db 
{
    import laya.data.Sheet;
	import laya.data.MessageBase;
	public class BagData extends MessageBase
	{
		public static function sheet():Sheet {
			return Sheet.get("Bag");
		}
		
		public static function getData(id:int):BagData {
			return Sheet.getData("Bag", id);
		}
				
		public static function getByID(id:String):BagData {
			return Sheet.getByID("Bag", id);
		}

		private var _id:Number;
		public function get id():Number {
			return _id;
		}
		
		public function set id(value:Number):void {
			_id = value;
			notify("id");
		}

		public function get name():String {
			return ItemData.sheet().getByID(id).name;
		}

		private var _num:Number;
		public function get num():Number {
			return _num;
		}
		
		public function set num(value:Number):void {
			_num = value;
			notify("num");
		}

		private var _type:Number;
		public function get type():Number {
			return _type;
		}
		
		public function set type(value:Number):void {
			_type = value;
			notify("type");
		}
		public function notify(prop:String):void {
			Sheet.notify("Bag."+prop);
			Sheet.notify("Bag");
		}
		
		public static const DES:Array = [
			["id", MessageBase.UINT32],
			["num", MessageBase.UINT16],
			["type", MessageBase.UINT8]
		];
	}
	
}
