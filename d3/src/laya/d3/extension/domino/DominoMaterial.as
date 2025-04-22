package laya.d3.extension.domino 
{
	import laya.d3.core.BaseCamera;
	import laya.d3.core.Sprite3D;
	import laya.d3.core.material.BaseMaterial;
	import laya.d3.core.scene.Scene;
	import laya.d3.graphics.VertexElementUsage;
	import laya.d3.shader.Shader3D;
	import laya.d3.shader.ShaderCompile3D;
	import laya.d3.shader.ShaderDefines;
	/**
	 * ...
	 * @author 
	 */
	public class DominoMaterial extends BaseMaterial
	{
		/** 默认材质，禁止修改*/
		public static const defaultMaterial:DominoMaterial = new DominoMaterial();
		
		/**@private */
		public static var shaderDefines:ShaderDefines = new ShaderDefines(BaseMaterial.shaderDefines);
		/**
		 * @private
		 */
		public static function __init__():void {
		}
		
		public static function initShader():void {
			
			var attributeMap:Object = {
				'a_Position': VertexElementUsage.POSITION0, 
				'a_Normal': VertexElementUsage.NORMAL0, 
				'a_Color' : VertexElementUsage.COLOR0
				//'a_Texcoord0': VertexElementUsage.TEXTURECOORDINATE0
			};
			var uniformMap:Object = {
				'u_MvpMatrix': [Sprite3D.MVPMATRIX, Shader3D.PERIOD_SPRITE], 
				'u_WorldMat': [Sprite3D.WORLDMATRIX, Shader3D.PERIOD_SPRITE],
				'u_CameraPos': [BaseCamera.CAMERAPOS, Shader3D.PERIOD_CAMERA], 
				'u_DirectionLight.Direction': [Scene.LIGHTDIRECTION, Shader3D.PERIOD_SCENE], 
				'u_DirectionLight.Color': [Scene.LIGHTDIRCOLOR, Shader3D.PERIOD_SCENE],
			};
			
			var dominoShader:int = Shader3D.nameKey.add("DominoShader");
			var vs:String = __INCLUDESTR__("shader/domino.vs");
			var ps:String = __INCLUDESTR__("shader/domino.ps");
			
			var dominoShaderCompile3D:ShaderCompile3D = ShaderCompile3D.add(dominoShader, vs, ps, attributeMap, uniformMap);
		}
		
		public function DominoMaterial() 
		{
			setShaderName("DominoShader");
			//cull = CULL_NONE;
		}
		
	}

}