package {
	import laya.display.Sprite;
	import laya.display.Stage;
	import laya.utils.Browser;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	
	public class PerformanceTest_Cartoon2 {
		
		public static const TestName:String = "Cartoon2";
		
		private var amount:int = 3500;
		
		private var bloodBarTexPath:String = "./res/cartoon2/blood_1_r.png";
		
		private var character1:Array = ["./res/cartoon2/yd-6_01.png", "./res/cartoon2/yd-6_02.png", "./res/cartoon2/yd-6_03.png", "./res/cartoon2/yd-6_04.png", "./res/cartoon2/yd-6_05.png", "./res/cartoon2/yd-6_06.png", "./res/cartoon2/yd-6_07.png", "./res/cartoon2/yd-6_08.png",];
		private var character2:Array = ["./res/cartoon2/yd-3_01.png", "./res/cartoon2/yd-3_02.png", "./res/cartoon2/yd-3_03.png", "./res/cartoon2/yd-3_04.png", "./res/cartoon2/yd-3_05.png", "./res/cartoon2/yd-3_06.png", "./res/cartoon2/yd-3_07.png", "./res/cartoon2/yd-3_08.png",];
		private var character3:Array = ["./res/cartoon2/yd-2_01.png", "./res/cartoon2/yd-2_02.png", "./res/cartoon2/yd-2_03.png", "./res/cartoon2/yd-2_04.png", "./res/cartoon2/yd-2_05.png", "./res/cartoon2/yd-2_06.png", "./res/cartoon2/yd-2_07.png", "./res/cartoon2/yd-2_08.png",];
		private var character4:Array = ["./res/cartoon2/wyd-1_01.png", "./res/cartoon2/wyd-1_02.png", "./res/cartoon2/wyd-1_03.png", "./res/cartoon2/wyd-1_04.png", "./res/cartoon2/wyd-1_05.png", "./res/cartoon2/wyd-1_06.png", "./res/cartoon2/wyd-1_07.png", "./res/cartoon2/wyd-1_08.png",];
		
		private var characterSkins:Array = [character1, character2, character3, character4];
		
		private var characters:Array = [];
		private var bgImgPath:String = "./res/cartoon2/background.jpg";
		private var _testIndex:int;
		
		public function PerformanceTest_Cartoon2(testIndex:int) {
			_testIndex = testIndex;
			//Laya.init(1280, 720, WebGL);
			//Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
			//Stat.enable();
			Laya.stage.loadImage(bgImgPath, 0, 0, Browser.clientWidth, Browser.clientHeight);
			
			createCharacters();
			
			Laya.timer.frameLoop(1, this, gameLoop);
			Laya.stage.event("teststart", _testIndex);
		}
		
		private function createCharacters():void {
			var char:Character;
			var charSkin:Array;
			var charContainer:Sprite;
			for (var i:int = 0; i < amount; i++) {
				if (i % 2500 == 0)
					charContainer = createNewContainer();
					
				charSkin = characterSkins[Math.floor(Math.random() * characterSkins.length)];
				char = new Character(charSkin, bloodBarTexPath);
				
				char.x = Math.random() * (Laya.stage.width + Character.WIDTH * 2);
				char.y = Math.random() * (Laya.stage.height - Character.HEIGHT);
				char.zOrder = char.y;
				
				char.setSpeed(Math.floor(Math.random() * 2 + 3));
				char.setName(i.toString());
				
				charContainer.addChild(char);
				characters.push(char);
			}
		}
		
		private function createNewContainer():Sprite {
			var container:Sprite = new Sprite();
			container.size(Browser.clientWidth, Browser.clientHeight);
			// 此处cacheAsBitmap主要是为了创建新画布
			// 解除IBQuadrangle数量限制
			// 在显示角色数量超过2500时需要打开下面一行
			container.cacheAsBitmap = true;
			Laya.stage.addChild(container);
			return container;
		}
		
		private function gameLoop():void {
			for (var i:int = characters.length - 1; i >= 0; i--) {
				characters[i].update();
			}
		}
		
		public function clear():void {
			//消除测试用例对引擎的影响
			Laya.timer.clear(this, gameLoop);
			Laya.loader.clearUnLoaded();
			Laya.loader.clearRes(bgImgPath);
			Laya.loader.clearRes(bloodBarTexPath);
			clearResArr(characterSkins);
			Laya.stage.graphics.clear();
		}
		
		private function clearResArr(resArr:Array):void {
			if (!resArr || !resArr.length) {
				return;
			}
			
			var cArr:Array;
			for (var i:int = 0, len:uint = resArr.length; i < len; i++) {
				cArr = resArr[i];
				for (var j:int = 0, len2:uint = cArr.length; j < len2; j++) {
					Laya.loader.clearRes(cArr[j]);
				}
			}
		}
	}

}
import laya.display.Animation;
import laya.display.Sprite;
import laya.display.Text;

class Character extends Sprite {
	public static const WIDTH:int = 110;
	public static const HEIGHT:int = 110;
	
	private var speed:int = 5;
	
	private var bloodBar:Sprite;
	private var animation:Animation;
	private var nameLabel:Text;
	
	public function Character(images:Array, bloodBarTexPath:String) {
		createAnimation(images);
		createBloodBar(bloodBarTexPath);
		createNameLabel();
	}
	
	private function createAnimation(images:Array):void {
		animation = new Animation();
		animation.loadImages(images);
		animation.interval = 70;
		animation.play(0);
		this.addChild(animation);
	}
	
	private function createBloodBar(bloodBarTexPath:String):void {
		bloodBar = new Sprite();
		bloodBar.loadImage(bloodBarTexPath);
		bloodBar.x = 20;
		this.addChild(bloodBar);
	}
	
	private function createNameLabel():void {
		nameLabel = new Text();
		nameLabel.color = "#FFFFFF";
		nameLabel.text = "Default";
		nameLabel.fontSize = 13;
		nameLabel.width = WIDTH;
		nameLabel.align = "center";
		this.addChild(nameLabel);
	}
	
	public function setSpeed(value:int):void {
		speed = value;
	}
	
	public function setName(value:String):void {
		nameLabel.text = value;
	}
	
	public function update():void {
		this.x += speed;
		if (this.x >= Laya.stage.width + WIDTH)
			this.x = -WIDTH;
	}

}