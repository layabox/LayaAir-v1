/**Created by the LayaAirIDE,do not modify.*/
package ui.bag {
	import laya.ui.*;
	import laya.display.*; 
	import ui.bag.ItemUI;
	import laya.data.*;
	import db.*;

	public class BagUI extends Dialog {
		public var list:List;
		public var addBtn:Button;
		public var delBtn:Button;
		public var updateBtn:Button;
		public var tab:Tab;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":600,"height":500},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","height":500}},{"type":"Button","props":{"y":4,"x":563,"skin":"comp/btn_close.png","name":"close"}},{"type":"List","props":{"y":90,"x":74,"width":468,"var":"list","vScrollBarSkin":"comp/vscroll.png","spaceY":10,"spaceX":16,"repeatY":3,"repeatX":4,"height":320,"dataSource":"${Bag}"},"child":[{"type":"Item","props":{"renderType":"render","runtime":"ui.bag.ItemUI"}}]},{"type":"Label","props":{"y":57,"x":350,"width":200,"text":"Gold：${User.gold}","height":20,"fontSize":20,"color":"#d91612","align":"right"}},{"type":"Box","props":{"y":436,"x":74},"child":[{"type":"Button","props":{"x":97,"width":80,"var":"addBtn","skin":"comp/button.png","label":"添加","height":30}},{"type":"Button","props":{"x":195,"width":80,"var":"delBtn","skin":"comp/button.png","label":"删除","height":30}},{"type":"Button","props":{"x":0,"width":80,"var":"updateBtn","skin":"comp/button.png","label":"修改第一条","height":30}},{"type":"Button","props":{"x":292,"width":80,"skin":"comp/button.png","onClick":"view.BagView.test(this,'自定义')","label":"自定义函数","height":30}}]},{"type":"Tab","props":{"y":56,"x":76,"var":"tab","skin":"comp/tab.png","selectedIndex":0,"labels":"全部,装备,道具"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.bag.ItemUI",ItemUI);
			super.createChildren();
			createView(uiView);

		}

		public function get Bag():Sheet {
			return BagData.sheet();
		}
		public function get User():Sheet {
			return UserData.sheet();
		}
	}
}