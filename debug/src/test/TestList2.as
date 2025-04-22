package test {
	import laya.events.Event;
	import laya.ui.Box;
	import laya.ui.List;
	import laya.utils.Handler;
	import laya.utils.Stat;
	
	/**
	 * ...
	 * @author yung
	 */
	public class TestList2 {
		private var list:List;
		
		public function TestList2() {
			Laya.init(480, 800);
			Laya.stage.alignH = "center";
			Stat.show(20, 50);
			
			init();
		}
		
		private function init():void {
			list = new List();
			list.size(359, 449);
			list.repeatX = 1;
			//list.size(359, 450);
			list.vScrollBarSkin = "";
			list.itemRender = ItemRenderer;
			 list.scrollBar.elasticDistance = 100;
			list.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
			list.renderHandler = new Handler(this, renderFun);
			list.cacheContent = true;
			Laya.stage.addChild(list);
			list.graphics.drawRect(0, 0, list.width, list.height, null, "#ff0000", 5);
			
			var btn:ItemRenderer = new ItemRenderer();
			btn.dataSource = "点我刷新List";
			btn.pos(10, 500);
			btn.on(Event.CLICK, this, onClick);
			Laya.stage.addChild(btn);
		}
		
		private function renderFun(cell:Box, index:int):void
		{
			trace("render:",index);
		}
		
		private function onClick(e:Event):void {
			list.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			list.refresh();
		}
	}

}
import laya.display.Text;
import laya.ui.Box;
import laya.ui.UIUtils;

class ItemRenderer extends Box {
	private var t:Text;
	
	public function ItemRenderer() {
		size(200, 100);
		t = new Text();
		t.fontSize = 30;
		t.color = "#ffffff";
		addChild(t);
	}
	
	override public function set dataSource(value:*):void {
		t.text = value;
		var color:String = UIUtils.toColor(Math.floor(0xffffff * Math.random()));
		graphics.drawRect(0, 0, 200, 100, color);
	}
}