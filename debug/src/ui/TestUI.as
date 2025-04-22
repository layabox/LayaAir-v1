/**Created by the LayaAirIDE,do not modify.*/
package ui {
	import laya.ui.*;
	import laya.display.*; 

	public class TestUI extends View {
		public var list_test:List;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":720,"height":1280},"child":[{"type":"List","props":{"y":0,"x":0,"width":315,"var":"list_test","repeatX":1,"height":742},"child":[{"type":"Label","props":{"text":"测试滚动条","renderType":"render","fontSize":30,"color":"#ff0400","bold":true}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}