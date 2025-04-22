/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class Scene1UI extends Dialog {
		public var btn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"Dialog","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"scene/scene1.jpg"}},{"type":"Image","props":{"y":10,"x":1140,"skin":"scene/arrow_left.png","name":"back"}},{"type":"Button","props":{"y":297,"x":498,"var":"btn","stateNum":1,"skin":"scene/btn_start.png","clickView":"Scene2.ui"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}