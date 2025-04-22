package view {
	import db.BagData;
	import laya.data.Sheet;
	import ui.bag.BagUI;
	
	/**
	 * 数据驱动背包示例
	 */
	public class BagView extends BagUI {
		private static var _instance:BagView;
		
		/**单例*/
		public static function get I():BagView {
			if (!_instance) _instance = new BagView();
			return _instance;
		}
		
		public function BagView() {
			//监听事件处理
			updateBtn.on("click", this, onUpdateClick);
			addBtn.on("click", this, onAddClick);
			delBtn.on("click", this, onDelClick);
			Sheet.load(["data/User.bd", "data/Item.bd", "data/Bag.bd"]);
			
			tab.on("change", this, onTabChange);
		}
		
		//tab切换时，更改数据源
		private function onTabChange():void {
			list.array = Bag;
		}
		
		override public function get Bag():Sheet {
			var source:Sheet = BagData.sheet();
			if (!tab || tab.selectedIndex === 0) return source;
			//根据条件获取数据源
			return source.filter(function(value:BagData):Boolean {
				return value.type == tab.selectedIndex
			}) as Sheet;
		}
		
		/**原始数据源*/
		public function get bagSheet():Sheet {
			return BagData.sheet()
		}
		
		//更改第一条数据
		private function onUpdateClick():void {
			if (bagSheet[0]) bagSheet[0].num = Math.round(Math.random() * 100);
		}
		
		//更改最后数据
		private function onDelClick():void {
			//bagSheet.del(Bag.length - 1);
			MessageCenter.I.send(UseItemCM.I.init(Bag.length - 1));
		}
		
		//添加一条新数据
		private function onAddClick():void {
			//var bag:BagData = new BagData();
			//bag.id = Math.round(Math.random() * 9) + 1;
			//bag.num = Math.round(Math.random() * 100);
			//bag.type = tab.selectedIndex;			
			//bagSheet.add(bag);
			
			MessageCenter.I.send(BuyItemCM.I.init(3));
		}
		
		//自定义按钮
		public static function test(obj:*, msg:String):void {
			alert(msg);
		}
	}
}