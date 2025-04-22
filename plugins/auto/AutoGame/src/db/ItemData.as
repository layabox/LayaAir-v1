package db 
{
    import laya.data.Sheet;
	public class ItemData  
	{
		public static function sheet():Sheet {
			return Sheet.get("Item");
		}
		
		public static function getData(id:int):ItemData {
			return Sheet.getData("Item", id);
		}
				
		public static function getByID(id:String):ItemData {
			return Sheet.getByID("Item", id);
		}
        public var id:Number;
        public var name:String;
        public var color:Number;
	}
	
}
