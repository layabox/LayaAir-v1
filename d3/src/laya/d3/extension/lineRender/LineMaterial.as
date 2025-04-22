package laya.d3.extension.lineRender 
{
	import laya.d3.core.BaseCamera;
	import laya.d3.core.Sprite3D;
	import laya.d3.core.material.BaseMaterial;
	import laya.d3.core.scene.Scene;
	import laya.d3.graphics.VertexElementUsage;
	import laya.d3.math.Vector4;
	import laya.d3.resource.BaseTexture;
	import laya.d3.shader.Shader3D;
	import laya.d3.shader.ShaderCompile3D;
	import laya.d3.shader.ShaderDefines;
	/**
	 * ...
	 * @author 
	 */
	public class LineMaterial extends BaseMaterial 
	{
		/** 默认材质，禁止修改*/
		public static const defaultMaterial:LineMaterial = new LineMaterial();
		
		public static var SHADERDEFINE_DIFFUSETEXTURE:int;
		public static var SHADERDEFINE_TILINGOFFSET:int;
		
		public static const DIFFUSETEXTURE:int = 1;
		public static const TINTCOLOR:int = 2;
		public static const TILINGOFFSET:int = 3;
		
		/**@private */
		public static var shaderDefines:ShaderDefines = new ShaderDefines(BaseMaterial.shaderDefines);
		/**
		 * @private
		 */
		public static function __init__():void {
			SHADERDEFINE_DIFFUSETEXTURE = shaderDefines.registerDefine("DIFFUSETEXTURE");
			SHADERDEFINE_TILINGOFFSET = shaderDefines.registerDefine("TILINGOFFSET");
		}
		
		/**
		 * 加载线框材质。
		 * @param url 线框材质地址。
		 */
		public static function load(url:String):LineMaterial {
			return Laya.loader.create(url, null, null, LineMaterial);
		}
		
		/**
		 * 获取颜色。
		 * @return 颜色。
		 */
		public function get tintColor():Vector4 {
			return _getColor(TINTCOLOR);
		}
		
		/**
		 * 设置颜色。
		 * @param value 颜色。
		 */
		public function set tintColor(value:Vector4):void {
			_setColor(TINTCOLOR, value);
		}
		
		/**
		 * 获取贴图。
		 * @return 贴图。
		 */
		public function get diffuseTexture():BaseTexture {
			return _getTexture(DIFFUSETEXTURE);
		}
		
		/**
		 * 设置贴图。
		 * @param value 贴图。
		 */
		public function set diffuseTexture(value:BaseTexture):void {
			if (value)
				_addShaderDefine(LineMaterial.SHADERDEFINE_DIFFUSETEXTURE);
			else
				_removeShaderDefine(LineMaterial.SHADERDEFINE_DIFFUSETEXTURE);
			_setTexture(DIFFUSETEXTURE, value);
		}
		
		/**
		 * 获取纹理平铺和偏移。
		 * @return 纹理平铺和偏移。
		 */
		public function get tilingOffset():Vector4 {
			return _getColor(TILINGOFFSET);
		}
		
		/**
		 * 设置纹理平铺和偏移。
		 * @param value 纹理平铺和偏移。
		 */
		public function set tilingOffset(value:Vector4):void {
			if (value) {
				var valueE:Float32Array = value.elements;
				if (valueE[0] != 1 || valueE[1] != 1 || valueE[2] != 0 || valueE[3] != 0)
					_addShaderDefine(LineMaterial.SHADERDEFINE_TILINGOFFSET);
				else
					_removeShaderDefine(LineMaterial.SHADERDEFINE_TILINGOFFSET);
			} else {
				_removeShaderDefine(LineMaterial.SHADERDEFINE_TILINGOFFSET);
			}
			_setColor(TILINGOFFSET, value);
		}
		
		public static function initShader():void {
			
			var attributeMap:Object = {
				'a_Position': VertexElementUsage.POSITION0,
				'a_OffsetVector': VertexElementUsage.OFFSETVECTOR,
				'a_Texcoord0X'  : VertexElementUsage.TEXTURECOORDINATE0X,
				'a_Texcoord0X1'  : VertexElementUsage.TEXTURECOORDINATE0X1,
				'a_Texcoord0Y'  : VertexElementUsage.TEXTURECOORDINATE0Y
			};
			var uniformMap:Object = {
				'u_MvpMatrix': [Sprite3D.MVPMATRIX, Shader3D.PERIOD_SPRITE], 
				'u_VMatrix': [BaseCamera.VIEWMATRIX, Shader3D.PERIOD_CAMERA],
				'u_PMatrix': [BaseCamera.PROJECTMATRIX, Shader3D.PERIOD_CAMERA],
				'u_TilingOffset': [LineMaterial.TILINGOFFSET, Shader3D.PERIOD_MATERIAL],
				'u_MainTexture': [LineMaterial.DIFFUSETEXTURE, Shader3D.PERIOD_MATERIAL], 
				'u_MainColor': [LineMaterial.TINTCOLOR, Shader3D.PERIOD_MATERIAL],
				'u_WidthCurve' : [LineSprite3D.WIDTHCURVE, Shader3D.PERIOD_SPRITE],
				'u_WidthCurveKeyLength' : [LineSprite3D.WIDTHCURVEKEYLENGTH, Shader3D.PERIOD_SPRITE],
				'u_GradientColorkey' : [LineSprite3D.GRADIENTCOLORKEY, Shader3D.PERIOD_SPRITE],
				'u_GradientAlphakey' : [LineSprite3D.GRADIENTALPHAKEY, Shader3D.PERIOD_SPRITE]
			};
			
			var lineShader:int = Shader3D.nameKey.add("LineShader");
			var vs:String = __INCLUDESTR__("shader/line.vs");
			var ps:String = __INCLUDESTR__("shader/line.ps");
			
			var lineShaderCompile3D:ShaderCompile3D = ShaderCompile3D.add(lineShader, vs, ps, attributeMap, uniformMap);
			LineMaterial.SHADERDEFINE_DIFFUSETEXTURE = lineShaderCompile3D.registerMaterialDefine("DIFFUSETEXTURE");
			LineMaterial.SHADERDEFINE_TILINGOFFSET = lineShaderCompile3D.registerMaterialDefine("TILINGOFFSET");
			LineSprite3D.SHADERDEFINE_GRADIENTMODE_BLEND = lineShaderCompile3D.registerSpriteDefine("GRADIENTMODE_BLEND");
			LineSprite3D.SHADERDEFINE_TEXTUREMODE_STRETCH = lineShaderCompile3D.registerSpriteDefine("TEXTUREMODE_STRETCH");
			LineSprite3D.SHADERDEFINE_WORLDSPACE = lineShaderCompile3D.registerSpriteDefine("WORLDSPACE");
		}
		
		public function LineMaterial() 
		{
			super();
			setShaderName("LineShader");
			_setColor(TINTCOLOR, new Vector4(1.0, 1.0, 1.0, 1.0));
			cull = CULL_NONE;
		}
		
	}

}