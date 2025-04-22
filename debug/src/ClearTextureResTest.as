package {
	import laya.display.Animation;
	import laya.display.Sprite;
	import laya.display.Text;
	import laya.events.Event;
	import laya.events.Keyboard;
	
	public class ClearTextureResTest {
		private var sp:Sprite;
		
		public function ClearTextureResTest() {
			//WebGL.enable();
			Laya.init(800, 600);
			
			//Laya.stage.scaleMode=Stage.SCALE_FIXED_WIDTH
			
			//显示一个图片
			sp = Sprite.fromImage("res/bg.jpg");
			Laya.stage.addChild(sp);
			
			//显示一个动画
			var ani:Animation = new Animation();
			ani.loadAtlas("res/fighter.atlas");
			ani.play();
			ani.pos(400, 200);
			sp.addChild(ani);
			
			var text:Text = new Text();
			text.text = "😄 😃 测试😀 😊 ☺ test😉\n😍 😘中文 😚换行\n😗 😙 😜 😝 😛 😳 😁 😔\n😌 😒 😞 😣 😢 😂 😭 😪 😥\n😰 😅 😓 😩 😫 😨\n😱 😠 😡 😤 😖 😆 😋\n😷 😎 😴 😵 😲 😟 😦 😧 😈 👿 😮 😬 😐\n😕 😯 😶 😇 😏 😑 👲 👳 👮 👷 💂 👶 👦 👧\n👨 👩 👴 👵 👱 👼 👸";
			text.fontSize = 30;
			text.color = "#ff0000";
			Laya.stage.addChild(text);
			
			Laya.stage.on("keydown", this, onKeyDown);
		}
		
		private function onKeyDown(e:Event):void {
			if (e.keyCode === Keyboard.H) {
				sp.visible = false;
				//隐藏界面，清理资源
				Laya.loader.clearTextureRes("res/bg.jpg");
				Laya.loader.clearTextureRes("res/fighter.atlas");
			} else if (e.keyCode === Keyboard.S) {
				//显示界面，资源会自动恢复
				sp.visible = true;
			}
		}
	}
}