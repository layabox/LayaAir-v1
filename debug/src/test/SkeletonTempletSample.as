package test
{
	import laya.ani.bone.Bone;
	import laya.ani.bone.Skeleton;
	import laya.ani.bone.Templet;
	import laya.display.Text;
	import laya.events.Event;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	/**
	 * ...
	 * @author ww
	 */
	public class SkeletonTempletSample 
	{
		public var templet:Templet;
		private var text:Text;
		public function SkeletonTempletSample() 
		{
			//WebGL.enable();
			Skeleton.useSimpleMeshInCanvas = true;
			Laya.init(1000, 900);
			Laya.stage.bgColor = "#ffffff";
			Stat.show();
			text = new Text();
			text.fontSize = 20;
			text.color = "#ff0000";
			Laya.stage.addChild(text);
			
			//Stat.show();
			//创建动画模板
			templet = new Templet();
			templet.on(Event.COMPLETE, this, parseComplete);
		    templet.on(Event.ERROR, this, onError);
			
			var boneName:String;
			boneName = "jingling";
			//boneName = "goblins";
			boneName = "monster_yecha";
			//boneName = "monster_zhengronghoudemeihouwang";
			//boneName = "ytj";
			//boneName = "renyu";
			boneName = "shijian";
			boneName = "shijianTouch";
			boneName = "left";
			boneName = "monster_muzhuangren";
			boneName = "monster_yecha";
			//boneName = "u1";
			//boneName = "Jiang_shi";
			//boneName = "renyu";
			//boneName = "xianxiagg";
			//boneName = "goblins-mesh";
			//boneName = "Ake";
			//boneName = "RJDJ";
			//boneName = "effect_qymm";
			//boneName = "ledounongzhuang";
			//boneName = "Ubbie";
			//boneName = "heguan_ske";
			//boneName = "draworder";
			//boneName = "npc_heguan";
			//boneName = "Dragon";
			//boneName = "fangtianhuaji";
			//boneName = "sandanpao";
			//boneName = "hero_helen_1";
			//boneName = "ui_1017";
			//boneName = "ui_1016";
			//boneName = "xz";
			//boneName = "xiongmao";
			//boneName = "FireWork";
			boneName = "effect_qeh";
			boneName = "effect_combo_cd";
			boneName = "effect_mskk";
			boneName = "phoenix";
			boneName = "denglu_img_1";
			//加载动画文件
			//debugger;
			templet.loadAni("res/" + boneName + "/" + boneName + ".sk");
			Laya.stage.on("click", this, onclick);
		}
		public var sk:Skeleton;
		private function createASkeleton(randomPos:Boolean=true):void
		{
			//创建第一个动画
			var skeleton0:Skeleton;
			//从动画模板创建动画播放对象
			//templet.rate = 24;
			//skeleton0 = templet.buildArmature();
			//skeleton0 = templet.buildArmature(1);
			skeleton0 = templet.buildArmature(2);
			skeleton0.showSkinByIndex(2);
			//skeleton0.showSkinByIndex(1);
			debugger;
			//skeleton0.playbackRate(0.1);
			skeleton0.play(0, true);
			//skeleton0.play(1, true);
			
			skeleton0.on(Event.LABEL, this, onLabel);
			skeleton0.player.on(Event.COMPLETE, this, onComplete);
			skeleton0.player.on(Event.STOPPED, this, onStoped);
			skeleton0.pos(400, 400);
			sk = skeleton0;
			//sk.scale(0.1, 0.1);
			randomPos = false;
			//skeleton0.
			if (randomPos)
			{
				//skeleton0.pos(Math.random() * Laya.stage.width, Math.random() * Laya.stage.height);
				skeleton0.pos(Math.random() * 900, Math.random() * 900);
			}
			//切换动画皮肤
			//skeleton0.showSkinByIndex(1);
			trace("skinLen:",templet.skinDataArray.length);
			//播放
			//skeleton0.play(0, false);
			debugger;
			//skeleton0.showSlotSkinByName("head", "shoubi");
			trace("beforeplay");
			//skeleton0.play(1, true);
			//Bone.ShowBones = null;
			//Bone.ShowBones["qie_jiao7"] = true;
			//trace("beforeplay:",sk.getAniNameByIndex(tAniIndex));
			//skeleton0.play(0, true);
			//skeleton0.play("attack", true);
			//skeleton0.play(0, false);
			//skeleton0.play("guanyin", false);
			//skeleton0.play("caihongT", false);
			//skeleton0.play("guanyin", true);
			//skeleton0.play("jing3", true);
			//skeleton0.play("act_cast", true);
			
			trace("afterplay");
			//skeleton0.showSlotSkinByName("head", "shoubi");
			trace("total:",skeleton0.total);
			Laya.stage.addChild(skeleton0);
			//skeleton0.play("act_attack", true);
			//skeleton0.index = 15;
			//skeleton0.player.currentTime=15 * 1000 / skeleton0.player.cacheFrameRate;
			//skeleton0.index=0;
			trace("parseComplete");
			trace("bounds:",skeleton0.getBounds().toString());
		}
		private function onStoped():void
		{
			trace("onStoped");
		}
		private function onComplete():void
		{
			trace("onComplete");
		}
		private function onError():void
		{
			trace("parse error");
		}
		private function parseComplete():void
		{
			//createASkeleton(false);
			//return;
			var i:int, len:int;
			len = 10;
			len = 1;
			//len = 300;
			for (i = 0; i < len; i++)
			{
				Laya.timer.once(100 * i, this, createASkeleton, null, false);
				//createASkeleton(true);
			}
			
			

		}
		private function onLabel(data:*):void
		{
			trace("event:",data);
		}
		private var tAniIndex:int = 0;
		private function onChangeAni():void
		{
			tAniIndex++;
			if (tAniIndex >= sk.getAnimNum())
			{
				tAniIndex = 0;
				
			}
			trace("beforeplay:",sk.getAniNameByIndex(tAniIndex));
			sk.play(tAniIndex, true);
			//sk.play("act_enter", true);
			trace("total:",sk.total);
			trace("afterplay");
		}
		private var mIndex:int = 1;
		private function onclick():void {
			trace("click");
			//onChangeAni();
			//return;
			//sk.resume();
			//return;
			if (Laya.stage.mouseX > Laya.stage.width * 0.5)
			{
				mIndex++;
			}else
			{
				mIndex--;
			}
			if (mIndex < 0) mIndex = sk.total-1;
			if (mIndex >= sk.total) mIndex = 0;
			//sk.playbackRate(0.1);
			text.text = "" + mIndex;
			sk.index = mIndex;
			trace("click", mIndex);
			trace("sk:", sk);
			trace("bounds:",sk.getBounds().toString());

		}
	}

}