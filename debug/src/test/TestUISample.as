package test{
	import laya.debug.DebugPanel;
    import laya.display.Stage;
    import laya.events.Event;
    import laya.net.Loader;
    import laya.ui.Button;
    import laya.utils.Handler;
    import laya.utils.Stat;
 
    
    public class TestUISample {
        
        
        private var btn1:Button;
        private var btn2:Button;
        
        private var taskView:TaskUI;
        
        
        public function TestUISample() {
            //初始化引擎
            Laya.init(1334, 750);
            
            Laya.stage.alignH=Stage.ALIGN_MIDDLE;
            Laya.stage.alignV=Stage.ALIGN_CENTER;
            
            btn1 = new Button(null,"显示");
            btn2 = new Button(null,"销毁");
            btn1.labelColors = "#ffffff,#ffffff,#ffffff";
            btn2.labelColors = "#ffffff,#ffffff,#ffffff";
            btn1.width = btn2.width = 50;
            btn1.height = btn2.height = 20;
            
            btn1.x = 400;
            btn2.x = 350;
            
            Laya.stage.addChild(btn1);
            Laya.stage.addChild(btn2);
            
            btn1.on(Event.CLICK,this,onClick);
            btn2.on(Event.CLICK,this,onClick);
            
            Laya.loader.load([{url: "res/atlas/common.atlas", type: Loader.ATLAS}]);
            
            //Stat.show();
			DebugPanel;
        }
        
        private function onClick(e:Event):void
        {
            switch(e.currentTarget)
            {
                case btn1:
                    show();
                    break;
                case btn2:
                    hide();
                    break;
            }
        }
        
        private function show():void
        {
            //加载引擎需要的资源
            Laya.loader.load([{url: "res/atlas/task.atlas", type: Loader.ATLAS}], Handler.create(this, onLoaded));
        }
        
        private function hide():void
        {
            if(taskView)
            {
                taskView.destroy();
                taskView = null;
                //Laya.loader.clearTextureRes("res/atlas/task.atlas");     
				Laya.loader.clearRes("res/atlas/task.atlas");     
            }
        }
        
        private function onLoaded():void {
            //实例UI界面
            taskView = new TaskUI();
            taskView.y = 50 + taskView.pivotY;
            taskView.panel.vScrollBarSkin = null;
            Laya.stage.addChild(taskView);
        }
    }
}