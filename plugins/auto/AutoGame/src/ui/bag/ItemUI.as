/**Created by the LayaAirIDE,do not modify.*/
package ui.bag {
	import laya.ui.*;
	import laya.display.*; 

	public class ItemUI extends View {

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":0,"x":0,"width":100,"skin":"comp/blank.png","height":100}},{"type":"Clip","props":{"y":16,"x":24,"width":53,"skin":"comp/clip_num.png","height":60,"clipX":10,"index":"${id%10}"}},{"type":"Label","props":{"y":75,"x":2,"width":97,"text":"【${name}】","height":25,"fontSize":20,"color":"#2c148d","align":"center"}},{"type":"Label","props":{"y":2,"x":41,"width":57,"text":"${num}","height":25,"fontSize":20,"color":"#ca1447","align":"right"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}