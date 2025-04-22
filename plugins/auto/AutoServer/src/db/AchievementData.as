package db 
{
    import laya.data.Sheet;
	import laya.data.MessageBase;
	public class AchievementData extends MessageBase
	{
		public static function sheet():Sheet {
			return Sheet.get("Achievement");
		}
		
		public static function getData(id:int):AchievementData {
			return Sheet.getData("Achievement", id);
		}
				
		public static function getByID(id:String):AchievementData {
			return Sheet.getByID("Achievement", id);
		}

		private var _id:Number;
		public function get id():Number {
			return _id;
		}
		
		public function set id(value:Number):void {
			_id = value;
			notify("id");
		}

		private var _type:String;
		public function get type():String {
			return _type;
		}
		
		public function set type(value:String):void {
			_type = value;
			notify("type");
		}

		private var _num:Number;
		public function get num():Number {
			return _num;
		}
		
		public function set num(value:Number):void {
			_num = value;
			notify("num");
		}

		private var _desc:String;
		public function get desc():String {
			return _desc;
		}
		
		public function set desc(value:String):void {
			_desc = value;
			notify("desc");
		}

		private var _success:Boolean;
		public function get success():Boolean {
			return _success;
		}
		
		public function set success(value:Boolean):void {
			_success = value;
			notify("success");
		}
		public function notify(prop:String):void {
			Sheet.notify("Achievement."+prop);
			Sheet.notify("Achievement");
		}
		
		public static const DES:Array = [
			["id", MessageBase.UINT16],
			["type", MessageBase.STRING],
			["num", MessageBase.UINT16],
			["desc", MessageBase.STRING],
			["success", MessageBase.BOOLEAN]
		];
	}
	
}
