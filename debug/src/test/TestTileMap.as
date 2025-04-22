package test {
	import laya.debug.DebugPanel;
	import laya.display.Sprite;
	import laya.display.Stage;
	import laya.events.Event;
	import laya.map.TiledMap;
	import laya.maths.Point;
	import laya.maths.Rectangle;
	import laya.net.Loader;
	import laya.utils.Browser;
	import laya.utils.Handler;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	
	/**
	 * ...
	 * @author ww
	 */
	public class TestTileMap {
		
		public function TestTileMap() {
			WebGL.enable();
			Laya.init(Browser.clientWidth, Browser.clientHeight);
			Stat.show();
			Laya.stage.alignV = Stage.ALIGN_MIDDLE;
			Laya.stage.alignH = Stage.ALIGN_CENTER;
			//
			Laya.stage.scaleMode = 'showall';
			//Laya.stage.scaleMode = 'full';
			Laya.stage.bgColor = "#cccccc";
			//DebugPanel.init();
			//var sp:Sprite;
			//sp = new Sprite();
			//sp.graphics.drawRect(0, 0, 100, 100, "#ff0000");
			//sp.size(100, 100);
			//Laya.stage.addChild(sp);
			//Laya.stage.viewport = new Rectangle(0, 0, 1300, 1300);
			//Laya.timer.once(1000, this, test);
			
			//DebugPanel.init();
			test();
			//preload();
		}
		
		private function preload():void
		{
			Laya.loader.load([{url:"tilemap/map03/mapnew02.atlas", type: Loader.ATLAS},
			{url:"tilemap/map03/map02.png",type:Loader.IMAGE}], Handler.create(this, test));

		}
		public var tiledMap:TiledMap;
		
		public function test(id:Number = 0) {
			//this.id = id;
			this.tiledMap = new TiledMap();
			// this.tiledMap.createMap("Assets/map"+id+".json",
			//this.tiledMap.createMap("tilemap/mapXML2.json",
			//new Rectangle(0, 0, Laya.stage.width, Laya.stage.height),
			//new Handler(this,this.onMapLoad),null,null,
			//false);
			tiledMap.autoCache = false;
			tiledMap.autoCache = true;
			tiledMap.autoCacheType = "normal";
			
			tiledMap.enableMergeLayer = true;
			//tiledMap.enableMergeLayer = false;
			//tiledMap.showGridTextureCount = true;
			tiledMap.removeCoveredTile = true;
			tiledMap.antiCrack = false;
			//tiledMap.autoCacheType = "bitmap";
			this.tiledMap.createMap("tilemap/desert/desert.json", new Rectangle(0, 0, Laya.stage.width, Laya.stage.height), new Handler(this, this.onMapLoad), null, new Point(512,512), false);
			//this.tiledMap.createMap("tilemap/map03/mapdata.json", new Rectangle(0, 0, Laya.stage.width, Laya.stage.height), new Handler(this, this.onMapLoad), null, new Point(512,512), false);
			//this.tiledMap.createMap("tilemap/map2/mapdata.json", new Rectangle(0, 0, Laya.stage.width, Laya.stage.height), new Handler(this, this.onMapLoad), null, new Point(512,512), false);
			//this.tiledMap.createMap("tilemap/newone/mapdata.json", new Rectangle(0, 0, Laya.stage.width, Laya.stage.height), new Handler(this, this.onMapLoad), null, null, false);
			//this.tiledMap.createMap("tilemap/test.json", new Rectangle(0, 0, Laya.stage.width, Laya.stage.height), new Handler(this, this.onMapLoad), null, null, false);
			//this.tiledMap.createMap("tilemap/map/mapdata02.json", new Rectangle(0, 0, Laya.stage.width, Laya.stage.height), new Handler(this, this.onMapLoad), null, null, false);
			//this.tiledMap.createMap("map/map_stage_0.json", new Rectangle(0, 0, Laya.stage.width, Laya.stage.height), new Handler(this, this.onMapLoad), null, null, false);
		}
		
		public function onMapLoad():void {
			trace(this.tiledMap.width, this.tiledMap.height, this.tiledMap.x, this.tiledMap.y);
			this.tiledMap.mapSprite().size(this.tiledMap.width, this.tiledMap.height);
			//this.tiledMap.setViewPortPivotByScale(0.5, 0.5);
			var mSize:Number;
			mSize = this.tiledMap.width * this.tiledMap.height * 4 / (1024 * 1024);
			trace("mSize:",mSize);
			//debugger;
			this.tiledMap.changeViewPort(0, 0, 0, 0);
			this.tiledMap.changeViewPort(5147, 5237, 1296, 770);
			
			var sp:Sprite;
			sp = new Sprite();
			sp.graphics.drawCircle(0, 0, 20, "#ff0000");
			var tL:Sprite;
			//tL = this.tiledMap.getLayerByIndex(0);
			//debugger;
			//tL = this.tiledMap.mapSprite().getChildAt(1);
			//tL = tL.getChildAt(1);
			
			//tL.addChild(sp);
			//sp.pos(100, 100);
			start();
		
		}
		
		public function scaleMap(e) {
			// 根据滚动距离缩放的地图
			this.tiledMap.scale += e.delta / 300;
		}
		
		private var mx:Number = 0;
		private var my:Number = 0;
		private var previousX:Number;
		private var previousY:Number;
		
		public function onMouseDown():void {
			this.previousX = Laya.stage.mouseX;
			this.previousY = Laya.stage.mouseY;
			
			Laya.stage.on(Event.MOUSE_MOVE, this, this.onMouseMove);
			
			
			//Laya.timer.loop(1, this, loop);
		}
		
		private function loop():void {
			for (var i:int = 0,n:int=10000; i < n; i++) {				
				this.tiledMap.moveViewPort((Math.random()<0.5?1:-1)*Math.random() * 100 ,(Math.random()<0.5?1:-1)*Math.random() * 100);
			}
		}
		
		public function onMouseMove():void {
			var dx = Laya.stage.mouseX - this.previousX;
			var dy = Laya.stage.mouseY - this.previousY;
			this.tiledMap.moveViewPort(Math.floor(this.mx - dx), Math.floor(this.my - dy));
		}
		
		public function onMouseUp():void {
			var dx = Laya.stage.mouseX - this.previousX;
			var dy = Laya.stage.mouseY - this.previousY;
			this.mx -= dx;
			this.my -= dy;
			
			Laya.stage.off(Event.MOUSE_MOVE, this, this.onMouseMove);
		}
		
		public function start():void {
			Laya.stage.on(Event.MOUSE_WHEEL, this, this.scaleMap);
			Laya.stage.on(Event.MOUSE_DOWN, this, this.onMouseDown);
			Laya.stage.on(Event.MOUSE_UP, this, this.onMouseUp);
			
		}
	}

}