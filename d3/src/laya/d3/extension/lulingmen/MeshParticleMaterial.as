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
	public class MeshParticleMaterial extends BaseMaterial{
		
		public static const MAINTEXTURE:int = 1;
		public static const MASKTEXTURE:int = 2;
		public static const BASECOLOR:int = 3;
		public static const ALPHACOLOR:int = 4;
		public static const INTENSITY:int = 5;
		public static const ALPHA:int = 6;
		public static const TILINGOFFSET1:int = 7;
		public static const TILINGOFFSET2:int = 8;
		
		public static var SHADERDEFINE_MAINTEXTURE:int;
		public static var SHADERDEFINE_MASKTEXTURE:int;
		public static var SHADERDEFINE_TILINGOFFSET1:int;
		public static var SHADERDEFINE_TILINGOFFSET2:int;
		
		/**@private */
		public static var shaderDefines:ShaderDefines = new ShaderDefines(BaseMaterial.shaderDefines);
		
		/**
		 * @private
		 */
		public static function __init__():void {
			SHADERDEFINE_MAINTEXTURE = shaderDefines.registerDefine("MAINTEXTURE");
			SHADERDEFINE_MASKTEXTURE = shaderDefines.registerDefine("MASKTEXTURE");
			SHADERDEFINE_TILINGOFFSET1 = shaderDefines.registerDefine("TILINGOFFSET1");
			SHADERDEFINE_TILINGOFFSET2 = shaderDefines.registerDefine("TILINGOFFSET2");
		}
		
		/**
		 * 获取第一层贴图。
		 * @return 第一层贴图。
		 */
		public function get mainTexture():BaseTexture {
			return _getTexture(MAINTEXTURE);
		}
		
		/**
		 * 设置第一层贴图。
		 * @param value 第一层贴图。
		 */
		public function set mainTexture(value:BaseTexture):void {
			if (value)
				_addShaderDefine(MeshParticleMaterial.SHADERDEFINE_MAINTEXTURE);
			else
				_removeShaderDefine(MeshParticleMaterial.SHADERDEFINE_MAINTEXTURE);
			_setTexture(MAINTEXTURE, value);
		}
		
		/**
		 * 获取第二层贴图。
		 * @return 第二层贴图。
		 */
		public function get maskTexture():BaseTexture {
			return _getTexture(MASKTEXTURE);
		}
		
		/**
		 * 设置第二层贴图。
		 * @param value 第二层贴图。
		 */
		public function set maskTexture(value:BaseTexture):void {
			if (value)
				_addShaderDefine(MeshParticleMaterial.SHADERDEFINE_MASKTEXTURE);
			else
				_removeShaderDefine(MeshParticleMaterial.SHADERDEFINE_MASKTEXTURE);
			_setTexture(MASKTEXTURE, value);
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
		 * 获取透明颜色。
		 * @return 透明颜色。
		 */
		public function get alphaColor():Vector4 {
			return _getColor(ALPHACOLOR);
		}
		
		/**
		 * 设置透明颜色。
		 * @param value 透明颜色。
		 */
		public function set alphaColor(value:Vector4):void {
			_setColor(ALPHACOLOR, value);
		}
		
		public function get intensity():Number {
			return _getNumber(INTENSITY);
		}
		
		public function set intensity(value:Number):void {
			_setNumber(INTENSITY, value);
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
					_addShaderDefine(MeshParticleMaterial.SHADERDEFINE_TILINGOFFSET1);
				else
					_removeShaderDefine(MeshParticleMaterial.SHADERDEFINE_TILINGOFFSET1);
			} else {
				_removeShaderDefine(MeshParticleMaterial.SHADERDEFINE_TILINGOFFSET1);
			}
			_setColor(TILINGOFFSET1, value);
		}
		
		/**
		 * 获取纹理平铺和偏移。
		 * @return 纹理平铺和偏移。
		 */
		public function get maskTilingOffset():Vector4 {
			return _getColor(TILINGOFFSET2);
		}
		
		/**
		 * 设置纹理平铺和偏移。
		 * @param value 纹理平铺和偏移。
		 */
		public function set maskTilingOffset(value:Vector4):void {
			if (value) {
				var valueE:Float32Array = value.elements;
				if (valueE[0] != 1 || valueE[1] != 1 || valueE[2] != 0 || valueE[3] != 0)
					_addShaderDefine(MeshParticleMaterial.SHADERDEFINE_TILINGOFFSET2);
				else
					_removeShaderDefine(MeshParticleMaterial.SHADERDEFINE_TILINGOFFSET2);
			} else {
				_removeShaderDefine(MeshParticleMaterial.SHADERDEFINE_TILINGOFFSET2);
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
				'u_MainTexture': [MeshParticleMaterial.MAINTEXTURE, Shader3D.PERIOD_MATERIAL], 
				'u_MaskTexture': [MeshParticleMaterial.MASKTEXTURE, Shader3D.PERIOD_MATERIAL], 
				'u_BaseColor': [MeshParticleMaterial.BASECOLOR, Shader3D.PERIOD_MATERIAL], 
				'u_AlphaColor': [MeshParticleMaterial.ALPHACOLOR, Shader3D.PERIOD_MATERIAL], 
				'u_Instensity': [MeshParticleMaterial.INTENSITY, Shader3D.PERIOD_MATERIAL],
				'u_Alpha': [MeshParticleMaterial.ALPHA, Shader3D.PERIOD_MATERIAL],
				'u_TilingOffset1': [MeshParticleMaterial.TILINGOFFSET1, Shader3D.PERIOD_MATERIAL],
				'u_TilingOffset2': [MeshParticleMaterial.TILINGOFFSET2, Shader3D.PERIOD_MATERIAL]
			};
			
            var shader:int = Shader3D.nameKey.add("MeshParticle");
            var vs:String = __INCLUDESTR__("shader/meshParticle.vs");
            var ps:String = __INCLUDESTR__("shader/meshParticle.ps");
			
            var shaderCompile3D:ShaderCompile3D = ShaderCompile3D.add(shader, vs, ps, attributeMap, uniformMap);
			
			MeshParticleMaterial.SHADERDEFINE_MAINTEXTURE = shaderCompile3D.registerMaterialDefine("MAINTEXTURE");
            MeshParticleMaterial.SHADERDEFINE_MASKTEXTURE = shaderCompile3D.registerMaterialDefine("MASKTEXTURE");
            MeshParticleMaterial.SHADERDEFINE_TILINGOFFSET1 = shaderCompile3D.registerMaterialDefine("TILINGOFFSET1");
            MeshParticleMaterial.SHADERDEFINE_TILINGOFFSET2 = shaderCompile3D.registerMaterialDefine("TILINGOFFSET2");
		}            
		
		public function MeshParticleMaterial() {
			
			setShaderName("MeshParticle");
			_setColor(BASECOLOR, new Vector4(1, 1, 1, 1));
			_setColor(ALPHACOLOR, new Vector4(1, 1, 1, 1));
			_setNumber(INTENSITY, 1.0);
			_setNumber(ALPHA, 1.0);
		}
	
	}

}