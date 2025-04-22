package laya.d3.extension.lulingmen 
{
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
	public class DissolveMaterial extends BaseMaterial
	{
		public static const MAINTEXTURE:int = 1;
		public static const DISSOLVETEXTURE:int = 2;
		public static const MASKTEXTURE:int = 3;
		public static const MAINTILINGOFFSET:int = 4;
		public static const DISSOLVETILINGOFFSET:int = 5;
		public static const MASKTILINGOFFSET:int = 6;
		public static const DISSOLVE:int = 7;
		public static const DISSOLVESPEED:int = 8;
		public static const BASECOLOR:int = 9;
		
		public static var SHADERDEFINE_MAINTEXTURE:int;
		public static var SHADERDEFINE_DISSOLVETEXTURE:int;
		public static var SHADERDEFINE_MASKTEXTURE:int;
		public static var SHADERDEFINE_MAINTILINGOFFSET:int;
		public static var SHADERDEFINE_DISSOLVETILINGOFFSET:int;
		public static var SHADERDEFINE_MASKTILINGOFFSET:int;
		
		
		/**@private */
		public static var shaderDefines:ShaderDefines = new ShaderDefines(BaseMaterial.shaderDefines);
		
		/**
		 * @private
		 */
		public static function __init__():void {
			SHADERDEFINE_MAINTEXTURE = shaderDefines.registerDefine("MAINTEXTURE");
			SHADERDEFINE_DISSOLVETEXTURE = shaderDefines.registerDefine("DISSOLVETEXTURE");
			SHADERDEFINE_MASKTEXTURE = shaderDefines.registerDefine("MASKTEXTURE");
			
			SHADERDEFINE_MAINTILINGOFFSET = shaderDefines.registerDefine("MAINTILINGOFFSET");
			SHADERDEFINE_DISSOLVETILINGOFFSET = shaderDefines.registerDefine("DISSOLVETILINGOFFSET");
			SHADERDEFINE_MASKTILINGOFFSET = shaderDefines.registerDefine("MASKTILINGOFFSET");
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
		 * 获取主贴图。
		 * @return 主贴图。
		 */
		public function get mainTexture():BaseTexture {
			return _getTexture(MAINTEXTURE);
		}
		
		/**
		 * 设置主贴图。
		 * @param value 主贴图。
		 */
		public function set mainTexture(value:BaseTexture):void {
			if (value)
				_addShaderDefine(DissolveMaterial.SHADERDEFINE_MAINTEXTURE);
			else
				_removeShaderDefine(DissolveMaterial.SHADERDEFINE_MAINTEXTURE);
			_setTexture(MAINTEXTURE, value);
		}
		
		/**
		 * 获取溶解贴图。
		 * @return 溶解贴图。
		 */
		public function get dissolveTexture():BaseTexture {
			return _getTexture(DISSOLVETEXTURE);
		}
		
		/**
		 * 设置溶解贴图。
		 * @param value 溶解贴图。
		 */
		public function set dissolveTexture(value:BaseTexture):void {
			if (value)
				_addShaderDefine(DissolveMaterial.SHADERDEFINE_DISSOLVETEXTURE);
			else
				_removeShaderDefine(DissolveMaterial.SHADERDEFINE_DISSOLVETEXTURE);
			_setTexture(DISSOLVETEXTURE, value);
		}
		
		
		/**
		 * 获取遮罩贴图。
		 * @return 遮罩贴图。
		 */
		public function get maskTexture():BaseTexture {
			return _getTexture(MASKTEXTURE);
		}
		
		/**
		 * 设置遮罩贴图。
		 * @param value 遮罩贴图。
		 */
		public function set maskTexture(value:BaseTexture):void {
			if (value)
				_addShaderDefine(DissolveMaterial.SHADERDEFINE_MASKTEXTURE);
			else
				_removeShaderDefine(DissolveMaterial.SHADERDEFINE_MASKTEXTURE);
			_setTexture(MASKTEXTURE, value);
		}
		
		
		/**
		 * 获取主纹理平铺和偏移。
		 * @return 主纹理平铺和偏移。
		 */
		public function get tilingOffset():Vector4 {
			return _getColor(MAINTILINGOFFSET);
		}
		
		/**
		 * 设置主纹理平铺和偏移。
		 * @param value 主纹理平铺和偏移。
		 */
		public function set tilingOffset(value:Vector4):void {
			if (value) {
				var valueE:Float32Array = value.elements;
				if (valueE[0] != 1 || valueE[1] != 1 || valueE[2] != 0 || valueE[3] != 0)
					_addShaderDefine(DissolveMaterial.SHADERDEFINE_MAINTILINGOFFSET);
				else
					_removeShaderDefine(DissolveMaterial.SHADERDEFINE_MAINTILINGOFFSET);
			} else {
				_removeShaderDefine(DissolveMaterial.SHADERDEFINE_MAINTILINGOFFSET);
			}
			_setColor(MAINTILINGOFFSET, value);
		}
		
		/**
		 * 获取溶解纹理平铺和偏移。
		 * @return 溶解纹理平铺和偏移。
		 */
		public function get dissolveTilingOffset():Vector4 {
			return _getColor(DISSOLVETILINGOFFSET);
		}
		
		/**
		 * 设置溶解纹理平铺和偏移。
		 * @param value 溶解纹理平铺和偏移。
		 */
		public function set dissolveTilingOffset(value:Vector4):void {
			if (value) {
				var valueE:Float32Array = value.elements;
				if (valueE[0] != 1 || valueE[1] != 1 || valueE[2] != 0 || valueE[3] != 0)
					_addShaderDefine(DissolveMaterial.SHADERDEFINE_DISSOLVETILINGOFFSET);
				else
					_removeShaderDefine(DissolveMaterial.SHADERDEFINE_DISSOLVETILINGOFFSET);
			} else {
				_removeShaderDefine(DissolveMaterial.SHADERDEFINE_DISSOLVETILINGOFFSET);
			}
			_setColor(DISSOLVETILINGOFFSET, value);
		}
		
		/**
		 * 获取遮罩纹理平铺和偏移。
		 * @return 遮罩纹理平铺和偏移。
		 */
		public function get maskTilingOffset():Vector4 {
			return _getColor(MASKTILINGOFFSET);
		}
		
		/**
		 * 设置遮罩纹理平铺和偏移。
		 * @param value 遮罩纹理平铺和偏移。
		 */
		public function set maskTilingOffset(value:Vector4):void {
			if (value) {
				var valueE:Float32Array = value.elements;
				if (valueE[0] != 1 || valueE[1] != 1 || valueE[2] != 0 || valueE[3] != 0)
					_addShaderDefine(DissolveMaterial.SHADERDEFINE_MASKTILINGOFFSET);
				else
					_removeShaderDefine(DissolveMaterial.SHADERDEFINE_MASKTILINGOFFSET);
			} else {
				_removeShaderDefine(DissolveMaterial.SHADERDEFINE_MASKTILINGOFFSET);
			}
			_setColor(MASKTILINGOFFSET, value);
		}
		
		/**
		 * 获取溶解值。
		 * @return 溶解值。
		 */
		public function get dissolve():Number {
			return _getNumber(DISSOLVE);
		}
		
		/**
		 * 设置溶解值。
		 * @param value 溶解值。
		 */
		public function set dissolve(value:Number):void {
			_setNumber(DISSOLVE, value);
		}
		
		
		/**
		 * 获取溶解速率。
		 * @return 溶解速率。
		 */
		public function get dissolveSpeed():Number {
			return _getNumber(DISSOLVESPEED);
		}
		
		/**
		 * 设置溶解速率。
		 * @param value 溶解速率。
		 */
		public function set dissolveSpeed(value:Number):void {
			_setNumber(DISSOLVESPEED, value);
		}
		
		public static function initShader():void {
            
            var attributeMap:Object = {
				'a_Position': VertexElementUsage.POSITION0, 
				'a_Normal': VertexElementUsage.NORMAL0, 
				'a_Texcoord0': VertexElementUsage.TEXTURECOORDINATE0
			};
            var uniformMap:Object = {
				'u_MvpMatrix': [Sprite3D.MVPMATRIX, Shader3D.PERIOD_SPRITE],
				'u_MainTexture': [DissolveMaterial.MAINTEXTURE, Shader3D.PERIOD_MATERIAL], 
				'u_DissolveTexture': [DissolveMaterial.DISSOLVETEXTURE, Shader3D.PERIOD_MATERIAL], 
				'u_MaskTexture': [DissolveMaterial.MASKTEXTURE, Shader3D.PERIOD_MATERIAL], 
				'u_BaseColor': [DissolveMaterial.BASECOLOR, Shader3D.PERIOD_MATERIAL], 
				'u_MainTilingOffset': [DissolveMaterial.MAINTILINGOFFSET, Shader3D.PERIOD_MATERIAL],
				'u_DissolveTilingOffset': [DissolveMaterial.DISSOLVETILINGOFFSET, Shader3D.PERIOD_MATERIAL],
				'u_MaskTilingOffset': [DissolveMaterial.MASKTILINGOFFSET, Shader3D.PERIOD_MATERIAL],
				'u_Dissolve': [DissolveMaterial.DISSOLVE, Shader3D.PERIOD_MATERIAL],
				'u_DissolveSpeed': [DissolveMaterial.DISSOLVESPEED, Shader3D.PERIOD_MATERIAL]
			};
			
            var shader:int = Shader3D.nameKey.add("Dissolve");
            var vs:String = __INCLUDESTR__("shader/dissolve.vs");
            var ps:String = __INCLUDESTR__("shader/dissolve.ps");
			
            var shaderCompile3D:ShaderCompile3D = ShaderCompile3D.add(shader, vs, ps, attributeMap, uniformMap);
			
			DissolveMaterial.SHADERDEFINE_MAINTEXTURE = shaderCompile3D.registerMaterialDefine("MAINTEXTURE");
            DissolveMaterial.SHADERDEFINE_DISSOLVETEXTURE = shaderCompile3D.registerMaterialDefine("DISSOLVETEXTURE");
            DissolveMaterial.SHADERDEFINE_MASKTEXTURE = shaderCompile3D.registerMaterialDefine("MASKTEXTURE");
            DissolveMaterial.SHADERDEFINE_MAINTILINGOFFSET = shaderCompile3D.registerMaterialDefine("MAINTILINGOFFSET");
            DissolveMaterial.SHADERDEFINE_DISSOLVETILINGOFFSET = shaderCompile3D.registerMaterialDefine("DISSOLVETILINGOFFSET");
            DissolveMaterial.SHADERDEFINE_MASKTILINGOFFSET = shaderCompile3D.registerMaterialDefine("MASKTILINGOFFSET");
            
		} 
		
		public function DissolveMaterial() 
		{
			setShaderName("Dissolve");
			_setColor(BASECOLOR, new Vector4(1, 1, 1, 1));
			_setNumber(DISSOLVE, 0.0);
			_setNumber(DISSOLVESPEED, 5.0);
		}
		
	}

}