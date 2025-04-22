package db 
{
    import laya.data.Sheet;
	import laya.data.MessageBase;
	public class UserData extends MessageBase
	{
		public static function sheet():Sheet {
			return Sheet.get("User");
		}
		
		public static function getData(id:int):UserData {
			return Sheet.getData("User", id);
		}
				
		public static function getByID(id:String):UserData {
			return Sheet.getByID("User", id);
		}

		private var _username:String;
		public function get username():String {
			return _username;
		}
		
		public function set username(value:String):void {
			_username = value;
			notify("username");
		}

		private var _isVip:Boolean;
		public function get isVip():Boolean {
			return _isVip;
		}
		
		public function set isVip(value:Boolean):void {
			_isVip = value;
			notify("isVip");
		}

		private var _gold:Number;
		public function get gold():Number {
			return _gold;
		}
		
		public function set gold(value:Number):void {
			_gold = value;
			notify("gold");
		}
		public function notify(prop:String):void {
			Sheet.notify("User."+prop);
			Sheet.notify("User");
		}
		
		public static const DES:Array = [
			["username", MessageBase.STRING],
			["isVip", MessageBase.BOOLEAN],
			["gold", MessageBase.UINT32]
		];
	}
	
}
