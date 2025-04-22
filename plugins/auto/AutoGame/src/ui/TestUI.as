/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class TestUI extends View {

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":180,"x":244,"skin":"comp/bg.png","name":"item0","sizeGrid":"30,8,8,8"}},{"type":"Image","props":{"y":264,"x":316,"skin":"comp/bg.png","name":"item1","sizeGrid":"30,8,8,8"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}