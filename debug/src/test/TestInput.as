package test 
{
	import laya.display.Input;
	import laya.utils.Browser;
	import laya.webgl.WebGL;
	/**
	 * ...
	 * @author ww
	 */
	public class TestInput 
	{
		
		public function TestInput() 
		{
			WebGL.enable();
			Laya.init(960, 1680);
			Laya.stage.bgColor = "#00ff00";
			Laya.stage.scaleMode = "showall";
			Laya.stage.alignH = "center";
			Laya.stage.alignV = "middle";
			var input:Input;
			input = new Input();
			input.text = "hihi v=3333";
			input.fontSize = 50;
			input.color = "#ff0000";
			input.pos(100, Laya.stage.height-200);
			input.size(300, 100);
			
			Laya.stage.addChild(input);
		}
		
	}

}