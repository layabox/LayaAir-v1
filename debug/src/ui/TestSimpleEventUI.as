/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;

	public class TestSimpleEventUI extends View {

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":445,"height":400},"child":[{"type":"Button","props":{"y":93,"x":126,"skin":"comp/button.png","mousedown":"btnDown","label":"label"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}