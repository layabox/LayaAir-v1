package laya.d3.extension.lulingmen {
	import laya.d3.core.BaseCamera;
	import laya.d3.core.Sprite3D;
	import laya.d3.core.material.BaseMaterial;
	import laya.d3.core.scene.Scene;
	import laya.d3.graphics.VertexElementUsage;
	import laya.d3.math.Vector2;
	import laya.d3.math.Vector4;
	import laya.d3.resource.BaseTexture;
	import laya.d3.shader.Shader3D;
	import laya.d3.shader.ShaderCompile3D;
	import laya.d3.shader.ShaderDefines;
	
	/**
	 * ...
	 * @author
	 */
	public class UVSineMaterial extends BaseMaterial{
		
		public static const BASETEXTURE:int = 1;
		public static const SECONDTEXTURE:int = 2;
		public static const BASECOLOR:int = 3;
		public static const BASESCROLLSPEEDX:int = 4;
		public static const BASESCROLLSPEEDY:int = 5;
		public static const SECONDSCROLLSPEEDX:int = 6;
		public static const SECONDSCROLLSPEEDY:int = 7;
		public static const MMULTIPLIER:int = 8;
		public static const ALPHA:int = 9;
		public static const TILINGOFFSET1:int = 10;
		public static const TILINGOFFSET2:int = 11;
		
		public static var SHADERDEFINE_BASETEXTURE:int;
		public static var SHADERDEFINE_SECONDTEXTURE:int;
		public static var SHADERDEFINE_TILINGOFFSET1:int;
		public static var SHADERDEFINE_TILINGOFFSET2:int;
		
		/**@private */
		public static var shaderDefines:ShaderDefines = new ShaderDefines(BaseMaterial.shaderDefines);
		
		/**
		 * @private
		 */
		public static function __init__():void {
			SHADERDEFINE_BASETEXTURE = shaderDefines.registerDefine("BASETEXTURE");
			SHADERDEFINE_SECONDTEXTURE = shaderDefines.registerDefine("SECONDTEXTURE");
			SHADERDEFINE_TILINGOFFSET1 = shaderDefines.registerDefine("TILINGOFFSET1");
			SHADERDEFINE_TILINGOFFSET2 = shaderDefines.registerDefine("TILINGOFFSET2");
		}
		
		/**
		 * 获取第一层贴图。
		 * @return 第一层贴图。
		 */
		public function get baseTexture():BaseTexture {
			return _getTexture(BASETEXTURE);
		}
		
		/**
		 * 设置第一层贴图。
		 * @param value 第一层贴图。
		 */
		public function set baseTexture(value:BaseTexture):void {
			if (value)
				_addShaderDefine(UVSineMaterial.SHADERDEFINE_BASETEXTURE);
			else
				_removeShaderDefine(UVSineMaterial.SHADERDEFINE_BASETEXTURE);
			_setTexture(BASETEXTURE, value);
		}
		
		/**
		 * 获取第二层贴图。
		 * @return 第二层贴图。
		 */
		public function get secondTexture():BaseTexture {
			return _getTexture(SECONDTEXTURE);
		}
		
		/**
		 * 设置第二层贴图。
		 * @param value 第二层贴图。
		 */
		public function set secondTexture(value:BaseTexture):void {
			if (value)
				_addShaderDefine(UVSineMaterial.SHADERDEFINE_SECONDTEXTURE);
			else
				_removeShaderDefine(UVSineMaterial.SHADERDEFINE_SECONDTEXTURE);
			_setTexture(SECONDTEXTURE, value);
		}
		
		/**
		 * 获取基础颜色。
		 * @return 基础颜色。
		 */
		public function get albedoColor():Vector4 {
			return _getColor(BASECOLOR);
		}
		
		/**
		 * 设置基础颜色。
		 * @param value 基础颜色。
		 */
		public function set albedoColor(value:Vector4):void {
			_setColor(BASECOLOR, value);
		}
		
		/**
		 * 获取第一层滚动速度X。
		 * @return 第一层滚动速度X。
		 */
		public function get baseScrollSpeedX():Number {
			return _getNumber(BASESCROLLSPEEDX);
		}
		
		/**
		 * 设置第一层滚动速度X。
		 * @param value 第一层滚动速度X。
		 */
		public function set baseScrollSpeedX(value:Number):void {
			_setNumber(BASESCROLLSPEEDX, value);
		}
		
		/**
		 * 获取第一层滚动速度Y。
		 * @return 第一层滚动速度Y。
		 */
		public function get baseScrollSpeedY():Number {
			return _getNumber(BASESCROLLSPEEDY);
		}
		
		/**
		 * 设置第一层滚动速度Y。
		 * @param value 第一层滚动速度Y。
		 */
		public function set baseScrollSpeedY(value:Number):void {
			_setNumber(BASESCROLLSPEEDY, value);
		}
		
		/**
		 * 获取第二层滚动速度X。
		 * @return 第二层滚动速度X。
		 */
		public function get secondScrollSpeedX():Number {
			return _getNumber(SECONDSCROLLSPEEDX);
		}
		
		/**
		 * 设置第二层滚动速度X。
		 * @param value 第二层滚动速度X。
		 */
		public function set secondScrollSpeedX(value:Number):void {
			_setNumber(SECONDSCROLLSPEEDX, value);
		}
		
		/**
		 * 获取第二层滚动速度Y。
		 * @return 第二层滚动速度Y。
		 */
		public function get secondScrollSpeedY():Number {
			return _getNumber(SECONDSCROLLSPEEDY);
		}
		
		/**
		 * 设置第二层滚动速度Y。
		 * @param value 第二层滚动速度Y。
		 */
		public function set secondScrollSpeedY(value:Number):void {
			_setNumber(SECONDSCROLLSPEEDY, value);
		}
		
		public function get mMultiplier():Number {
			return _getNumber(MMULTIPLIER);
		}
		
		
		public function set mMultiplier(value:Number):void {
			_setNumber(MMULTIPLIER, value);
		}
		
		public function get alpha():Number {
			return _getNumber(ALPHA);
		}
		
		public function set alpha(value:Number):void {
			value = Math.max(0.0, Math.min(1.0, value));
			_setNumber(ALPHA, value);
		}
		
		/**
		 * 获取纹理平铺和偏移。
		 * @return 纹理平铺和偏移。
		 */
		public function get tilingOffset():Vector4 {
			return _getColor(TILINGOFFSET1);
		}
		
		/**
		 * 设置纹理平铺和偏移。
		 * @param value 纹理平铺和偏移。
		 */
		public function set tilingOffset(value:Vector4):void {
			if (value) {
				var valueE:Float32Array = value.elements;
				if (valueE[0] != 1 || valueE[1] != 1 || valueE[2] != 0 || valueE[3] != 0)
					_addShaderDefine(UVSineMaterial.SHADERDEFINE_TILINGOFFSET1);
				else
					_removeShaderDefine(UVSineMaterial.SHADERDEFINE_TILINGOFFSET1);
			} else {
				_removeShaderDefine(UVSineMaterial.SHADERDEFINE_TILINGOFFSET1);
			}
			_setColor(TILINGOFFSET1, value);
		}
		
		/**
		 * 获取纹理平铺和偏移。
		 * @return 纹理平铺和偏移。
		 */
		public function get detailTilingOffset():Vector4 {
			return _getColor(TILINGOFFSET2);
		}
		
		/**
		 * 设置纹理平铺和偏移。
		 * @param value 纹理平铺和偏移。
		 */
		public function set detailTilingOffset(value:Vector4):void {
			if (value) {
				var valueE:Float32Array = value.elements;
				if (valueE[0] != 1 || valueE[1] != 1 || valueE[2] != 0 || valueE[3] != 0)
					_addShaderDefine(UVSineMaterial.SHADERDEFINE_TILINGOFFSET2);
				else
					_removeShaderDefine(UVSineMaterial.SHADERDEFINE_TILINGOFFSET2);
			} else {
				_removeShaderDefine(UVSineMaterial.SHADERDEFINE_TILINGOFFSET2);
			}
			_setColor(TILINGOFFSET2, value);
		}
		
		public static function initShader():void {
            
            var attributeMap:Object = {
				'a_Position': VertexElementUsage.POSITION0, 
				'a_Normal': VertexElementUsage.NORMAL0, 
				'a_Color': VertexElementUsage.COLOR0, 
				'a_Texcoord0': VertexElementUsage.TEXTURECOORDINATE0
			};
            var uniformMap:Object = {
				'u_MvpMatrix': [Sprite3D.MVPMATRIX, Shader3D.PERIOD_SPRITE],
				'u_Time': [Scene.TIME, Shader3D.PERIOD_SCENE], 
				'u_BaseTexture': [UVSineMaterial.BASETEXTURE, Shader3D.PERIOD_MATERIAL], 
				'u_SecondTexture': [UVSineMaterial.SECONDTEXTURE, Shader3D.PERIOD_MATERIAL], 
				'u_BaseColor': [UVSineMaterial.BASECOLOR, Shader3D.PERIOD_MATERIAL], 
				'u_BaseScrollSpeedX': [UVSineMaterial.BASESCROLLSPEEDX, Shader3D.PERIOD_MATERIAL], 
				'u_BaseScrollSpeedY': [UVSineMaterial.BASESCROLLSPEEDY, Shader3D.PERIOD_MATERIAL], 
				'u_SecondScrollSpeedX': [UVSineMaterial.SECONDSCROLLSPEEDX, Shader3D.PERIOD_MATERIAL],
				'u_SecondScrollSpeedY': [UVSineMaterial.SECONDSCROLLSPEEDY, Shader3D.PERIOD_MATERIAL],
				'u_MMultiplier': [UVSineMaterial.MMULTIPLIER, Shader3D.PERIOD_MATERIAL],
				'u_Alpha': [UVSineMaterial.ALPHA, Shader3D.PERIOD_MATERIAL],
				'u_TilingOffset1': [UVSineMaterial.TILINGOFFSET1, Shader3D.PERIOD_MATERIAL],
				'u_TilingOffset2': [UVSineMaterial.TILINGOFFSET2, Shader3D.PERIOD_MATERIAL]
			};
			
            var shader:int = Shader3D.nameKey.add("UVSine");
            var vs:String = __INCLUDESTR__("shader/uvsine.vs");
            var ps:String = __INCLUDESTR__("shader/uvsine.ps");
			
            var shaderCompile3D:ShaderCompile3D = ShaderCompile3D.add(shader, vs, ps, attributeMap, uniformMap);
			
			UVSineMaterial.SHADERDEFINE_BASETEXTURE = shaderCompile3D.registerMaterialDefine("BASETEXTURE");
            UVSineMaterial.SHADERDEFINE_SECONDTEXTURE = shaderCompile3D.registerMaterialDefine("SECONDTEXTURE");
            UVSineMaterial.SHADERDEFINE_TILINGOFFSET1 = shaderCompile3D.registerMaterialDefine("TILINGOFFSET1");
            UVSineMaterial.SHADERDEFINE_TILINGOFFSET2 = shaderCompile3D.registerMaterialDefine("TILINGOFFSET2");
            
		}            
		
		public function UVSineMaterial() {
			
			setShaderName("UVSine");
			_setColor(BASECOLOR, new Vector4(1, 1, 1, 1));
			_setNumber(BASESCROLLSPEEDX, 0.0);
			_setNumber(BASESCROLLSPEEDY, 0.0);
			_setNumber(SECONDSCROLLSPEEDX, 0.0);
			_setNumber(SECONDSCROLLSPEEDY, 0.0);
			_setNumber(MMULTIPLIER, 1.0);
			_setNumber(ALPHA, 1.0);
		}
	
	}

}