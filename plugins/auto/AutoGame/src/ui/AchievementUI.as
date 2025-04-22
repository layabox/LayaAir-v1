/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 
	import laya.data.*;
	import db.*;

	public class AchievementUI extends Dialog {
		public var list:List;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","height":400,"sizeGrid":"30,8,8,8"}},{"type":"List","props":{"y":49,"x":46,"width":317,"var":"list","vScrollBarSkin":"comp/vscroll.png","spaceY":5,"repeatY":10,"height":319,"dataSource":"${Achievement}"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":347,"renderType":"render","height":27},"child":[{"type":"Clip","props":{"skin":"comp/clip_num.png","clipX":10,"index":"${(id%9)+1}"}},{"type":"Label","props":{"y":4,"x":28,"width":156,"text":"${desc}","height":20,"color":"#000000"}},{"type":"Label","props":{"y":4,"x":180,"width":27,"text":"0","name":"count","height":20}},{"type":"Label","props":{"y":4,"x":240,"width":45,"text":"${success?'完成':'未完成'}","height":20}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

		public function get Achievement():Sheet {
			return AchievementData.sheet();
		}
	}
}