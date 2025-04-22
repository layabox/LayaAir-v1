/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class HallUI extends View {

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"hall/bg.jpg"}},{"type":"Button","props":{"y":573,"x":637,"stateNum":1,"skin":"hall/btn_store.png","name":"bag"}},{"type":"Button","props":{"y":573,"x":1097,"stateNum":1,"skin":"hall/btn_friend.png","disabled":true}},{"type":"Button","props":{"y":573,"x":791,"stateNum":1,"skin":"hall/btn_acheve.png","name":"achievement"}},{"type":"Button","props":{"y":573,"x":944,"stateNum":1,"skin":"hall/btn_task.png","disabled":true}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}