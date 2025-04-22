/**Created by the LayaAirIDE,do not modify.*/
package ui.shop {
	import laya.ui.*;
	import laya.display.*; 
	import laya.data.*;
	import db.*;

	public class ShopUI extends Dialog {
		public var tab:Tab;
		public var list:List;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":700,"height":500},"child":[{"type":"Image","props":{"y":0,"x":0,"width":700,"skin":"comp/bg.png","height":650,"sizeGrid":"30,8,8,8"}},{"type":"Button","props":{"y":3,"x":662,"skin":"comp/btn_close.png","name":"close"}},{"type":"Tab","props":{"y":47,"x":55,"var":"tab","skin":"comp/tab.png","labels":"武器,道具,装扮"}},{"type":"List","props":{"y":84,"x":48,"var":"list","repeatY":2,"repeatX":3},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"Image","props":{"width":199,"skin":"shop/cj_nbg.png","sizeGrid":"105,28,43,36"}},{"type":"Image","props":{"y":31,"x":23,"skin":"shop/kq.png"}},{"type":"Image","props":{"y":14,"x":31,"width":140,"skin":"shop/name_bg.png","sizeGrid":"3,11,3,9"}},{"type":"Image","props":{"y":45,"x":138,"skin":"shop/item_days.png"}},{"type":"Button","props":{"y":201,"x":6,"width":188,"stateNum":1,"skin":"shop/btn_buy.png","labelSize":30,"labelFont":"SimHei","labelColors":"#2d86e2","label":"购买","sizeGrid":"0,36,0,35"}},{"type":"Label","props":{"y":16,"x":39,"width":123,"text":"${name}","height":24,"fontSize":20,"font":"SimHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Label","props":{"y":174,"x":38,"width":123,"text":"${num}","height":24,"fontSize":20,"font":"SimHei","color":"#ffffff","bold":true,"align":"center"}}]}]},{"type":"Label","props":{"y":46,"x":436,"width":200,"text":"Gold：${User.gold}","height":20,"fontSize":20,"color":"#d91612","align":"right"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

		public function get User():Sheet {
			return UserData.sheet();
		}
		public function get Bag():Sheet {
			return BagData.sheet();
		}
	}
}