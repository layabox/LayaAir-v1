package {
	import laya.display.Sprite;
	import laya.net.Loader;
	import laya.utils.Browser;
	import laya.utils.Handler;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	
	public class PerformanceTest_Cartoon {
		
		public static const TestName:String = "Cartoon";
		
		private var colAmount:int = 1100;
		private var extraSpace:int = 50;
		private var moveSpeed:int = 2;
		private var rotateSpeed:int = 2;
		
		private var characterGroup:Array;
		private var texturePath:String = "./res/cartoonCharacters/cartoonCharactors.json";
		private var charPathArr:Array = ["cartoonCharactors/1.png", "cartoonCharactors/2.png", "cartoonCharactors/3.png", "cartoonCharactors/4.png", "cartoonCharactors/5.png"];
		private var _testIndex:int;
		
		public function PerformanceTest_Cartoon(testIndex:int) {
			_testIndex = testIndex;
			// 不支持WebGL时自动切换至Canvas
			//Laya.init(Browser.width, Browser.height, WebGL);
			Laya.stage.bgColor = "#232628";
			
			//Stat.show();
			
			Laya.loader.load(texturePath, Handler.create(this, createCharacters), null, Loader.ATLAS);
		}
		
		private function createCharacters(e:* = null):void {
			characterGroup = [];
			
			for (var i:int = 0; i < colAmount; ++i) {
				var tx:int = (Laya.stage.width + extraSpace * 2) / colAmount * i - extraSpace;
				var tr:int = 360 / colAmount * i;
				var startY:int = (Laya.stage.height - 500) / 2;
				
				createCharacter(charPathArr[0], 46, 50, tr).pos(tx, 50 + startY);
				createCharacter(charPathArr[1], 34, 50, tr).pos(tx, 150 + startY);
				createCharacter(charPathArr[2], 42, 50, tr).pos(tx, 250 + startY);
				createCharacter(charPathArr[3], 48, 50, tr).pos(tx, 350 + startY);
				createCharacter(charPathArr[4], 36, 50, tr).pos(tx, 450 + startY);
			}
			
			Laya.timer.frameLoop(1, this, animate);
			Laya.stage.event("teststart", _testIndex);
		}
		
		private function createCharacter(skin:String, pivotX:int, pivotY:int, rotation:int):Sprite {
			var charactor:Sprite = new Sprite();
			charactor.loadImage(skin);
			charactor.rotation = rotation;
			charactor.pivot(pivotX, pivotY);
			Laya.stage.addChild(charactor);
			characterGroup.push(charactor);
			
			return charactor;
		}
		
		private function animate():void {
			for (var i:int = characterGroup.length - 1; i >= 0; --i) {
				animateCharactor(characterGroup[i]);
			}
		}
		
		private function animateCharactor(charactor:Sprite):void {
			charactor.x += moveSpeed;
			charactor.rotation += rotateSpeed;
			
			if (charactor.x > Laya.stage.width + extraSpace) {
				charactor.x = -extraSpace;
			}
		}
		
		public function clear():void {
			//消除测试用例对引擎的影响
			Laya.timer.clear(this, animate);
			Laya.loader.clearRes(texturePath);
			clearResArr(charPathArr);
		}
		
		private function clearResArr(resArr:Array):void {
			if (!resArr || !resArr.length) {
				return;
			}
			
			for (var i:int = 0, len:uint = resArr.length; i < len; i++) {
				Laya.loader.clearRes(resArr[i]);
			}
		}
	}

}