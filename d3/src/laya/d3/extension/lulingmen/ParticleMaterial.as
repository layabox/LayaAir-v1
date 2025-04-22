package laya.d3.extension.lulingmen {
	import laya.d3.core.BaseCamera;
	import laya.d3.core.Sprite3D;
	import laya.d3.core.material.BaseMaterial;
	import laya.d3.core.particleShuriKen.ShuriKenParticle3D;
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
	public class ParticleMaterial extends BaseMaterial{
		
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
		public function get tintColor():Vector4 {
			return _getColor(BASECOLOR);
		}
		
		/**
		 * 设置基础颜色。
		 * @param value 基础颜色。
		 */
		public function set tintColor(value:Vector4):void {
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
				'a_CornerTextureCoordinate': VertexElementUsage.CORNERTEXTURECOORDINATE0, 
				'a_MeshPosition': VertexElementUsage.POSITION0,
				'a_MeshColor': VertexElementUsage.COLOR0, 
				'a_MeshTextureCoordinate': VertexElementUsage.TEXTURECOORDINATE0,
				'a_ShapePositionStartLifeTime': VertexElementUsage.SHAPEPOSITIONSTARTLIFETIME, 
				'a_DirectionTime': VertexElementUsage.DIRECTIONTIME, 
				'a_StartColor': VertexElementUsage.STARTCOLOR0, 
				'a_EndColor': VertexElementUsage.ENDCOLOR0, 
				'a_StartSize': VertexElementUsage.STARTSIZE, 
				'a_StartRotation0': VertexElementUsage.STARTROTATION, 
				'a_StartSpeed': VertexElementUsage.STARTSPEED, 
				'a_Random0': VertexElementUsage.RANDOM0, 
				'a_Random1': VertexElementUsage.RANDOM1, 
				'a_SimulationWorldPostion': VertexElementUsage.SIMULATIONWORLDPOSTION,
				'a_SimulationWorldRotation': VertexElementUsage.SIMULATIONWORLDROTATION
			};
			var uniformMap:Object = {
				'u_MainTexture': [MeshParticleMaterial.MAINTEXTURE, Shader3D.PERIOD_MATERIAL], 
				'u_MaskTexture': [MeshParticleMaterial.MASKTEXTURE, Shader3D.PERIOD_MATERIAL], 
				'u_BaseColor': [MeshParticleMaterial.BASECOLOR, Shader3D.PERIOD_MATERIAL], 
				'u_AlphaColor': [MeshParticleMaterial.ALPHACOLOR, Shader3D.PERIOD_MATERIAL], 
				'u_Instensity': [MeshParticleMaterial.INTENSITY, Shader3D.PERIOD_MATERIAL],
				'u_Alpha': [MeshParticleMaterial.ALPHA, Shader3D.PERIOD_MATERIAL],
				'u_TilingOffset1': [MeshParticleMaterial.TILINGOFFSET1, Shader3D.PERIOD_MATERIAL],
				'u_TilingOffset2': [MeshParticleMaterial.TILINGOFFSET2, Shader3D.PERIOD_MATERIAL],
				'u_WorldPosition': [ShuriKenParticle3D.WORLDPOSITION, Shader3D.PERIOD_SPRITE], 
				'u_WorldRotation': [ShuriKenParticle3D.WORLDROTATION, Shader3D.PERIOD_SPRITE], 
				'u_PositionScale': [ShuriKenParticle3D.POSITIONSCALE, Shader3D.PERIOD_SPRITE], 
				'u_SizeScale': [ShuriKenParticle3D.SIZESCALE, Shader3D.PERIOD_SPRITE], 
				'u_ScalingMode': [ShuriKenParticle3D.SCALINGMODE, Shader3D.PERIOD_SPRITE], 
				'u_Gravity': [ShuriKenParticle3D.GRAVITY, Shader3D.PERIOD_SPRITE], 
				'u_ThreeDStartRotation': [ShuriKenParticle3D.THREEDSTARTROTATION, Shader3D.PERIOD_SPRITE], 
				'u_StretchedBillboardLengthScale': [ShuriKenParticle3D.STRETCHEDBILLBOARDLENGTHSCALE, Shader3D.PERIOD_SPRITE], 
				'u_StretchedBillboardSpeedScale': [ShuriKenParticle3D.STRETCHEDBILLBOARDSPEEDSCALE, Shader3D.PERIOD_SPRITE], 
				'u_SimulationSpace': [ShuriKenParticle3D.SIMULATIONSPACE, Shader3D.PERIOD_SPRITE], 
				'u_CurrentTime': [ShuriKenParticle3D.CURRENTTIME, Shader3D.PERIOD_SPRITE], 
				'u_ColorOverLifeGradientAlphas': [ShuriKenParticle3D.COLOROVERLIFEGRADIENTALPHAS, Shader3D.PERIOD_SPRITE], 
				'u_ColorOverLifeGradientColors': [ShuriKenParticle3D.COLOROVERLIFEGRADIENTCOLORS, Shader3D.PERIOD_SPRITE], 
				'u_MaxColorOverLifeGradientAlphas': [ShuriKenParticle3D.MAXCOLOROVERLIFEGRADIENTALPHAS, Shader3D.PERIOD_SPRITE], 
				'u_MaxColorOverLifeGradientColors': [ShuriKenParticle3D.MAXCOLOROVERLIFEGRADIENTCOLORS, Shader3D.PERIOD_SPRITE], 
				'u_VOLVelocityConst': [ShuriKenParticle3D.VOLVELOCITYCONST, Shader3D.PERIOD_SPRITE],
				'u_VOLVelocityGradientX': [ShuriKenParticle3D.VOLVELOCITYGRADIENTX, Shader3D.PERIOD_SPRITE], 
				'u_VOLVelocityGradientY': [ShuriKenParticle3D.VOLVELOCITYGRADIENTY, Shader3D.PERIOD_SPRITE], 
				'u_VOLVelocityGradientZ': [ShuriKenParticle3D.VOLVELOCITYGRADIENTZ, Shader3D.PERIOD_SPRITE], 
				'u_VOLVelocityConstMax': [ShuriKenParticle3D.VOLVELOCITYCONSTMAX, Shader3D.PERIOD_SPRITE], 
				'u_VOLVelocityGradientMaxX': [ShuriKenParticle3D.VOLVELOCITYGRADIENTXMAX, Shader3D.PERIOD_SPRITE], 
				'u_VOLVelocityGradientMaxY': [ShuriKenParticle3D.VOLVELOCITYGRADIENTYMAX, Shader3D.PERIOD_SPRITE], 
				'u_VOLVelocityGradientMaxZ': [ShuriKenParticle3D.VOLVELOCITYGRADIENTZMAX, Shader3D.PERIOD_SPRITE], 
				'u_VOLSpaceType': [ShuriKenParticle3D.VOLSPACETYPE, Shader3D.PERIOD_SPRITE], 
				'u_SOLSizeGradient': [ShuriKenParticle3D.SOLSIZEGRADIENT, Shader3D.PERIOD_SPRITE], 
				'u_SOLSizeGradientX': [ShuriKenParticle3D.SOLSIZEGRADIENTX, Shader3D.PERIOD_SPRITE], 
				'u_SOLSizeGradientY': [ShuriKenParticle3D.SOLSIZEGRADIENTY, Shader3D.PERIOD_SPRITE], 
				'u_SOLSizeGradientZ': [ShuriKenParticle3D.SOLSizeGradientZ, Shader3D.PERIOD_SPRITE], 
				'u_SOLSizeGradientMax': [ShuriKenParticle3D.SOLSizeGradientMax, Shader3D.PERIOD_SPRITE], 
				'u_SOLSizeGradientMaxX': [ShuriKenParticle3D.SOLSIZEGRADIENTXMAX, Shader3D.PERIOD_SPRITE], 
				'u_SOLSizeGradientMaxY': [ShuriKenParticle3D.SOLSIZEGRADIENTYMAX, Shader3D.PERIOD_SPRITE], 
				'u_SOLSizeGradientMaxZ': [ShuriKenParticle3D.SOLSizeGradientZMAX, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityConst': [ShuriKenParticle3D.ROLANGULARVELOCITYCONST, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityConstSeprarate': [ShuriKenParticle3D.ROLANGULARVELOCITYCONSTSEPRARATE, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityGradient': [ShuriKenParticle3D.ROLANGULARVELOCITYGRADIENT, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityGradientX': [ShuriKenParticle3D.ROLANGULARVELOCITYGRADIENTX, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityGradientY': [ShuriKenParticle3D.ROLANGULARVELOCITYGRADIENTY, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityGradientZ': [ShuriKenParticle3D.ROLANGULARVELOCITYGRADIENTZ, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityGradientW': [ShuriKenParticle3D.ROLANGULARVELOCITYGRADIENTW, Shader3D.PERIOD_SPRITE],
				'u_ROLAngularVelocityConstMax': [ShuriKenParticle3D.ROLANGULARVELOCITYCONSTMAX, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityConstMaxSeprarate': [ShuriKenParticle3D.ROLANGULARVELOCITYCONSTMAXSEPRARATE, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityGradientMax': [ShuriKenParticle3D.ROLANGULARVELOCITYGRADIENTMAX, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityGradientMaxX': [ShuriKenParticle3D.ROLANGULARVELOCITYGRADIENTXMAX, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityGradientMaxY': [ShuriKenParticle3D.ROLANGULARVELOCITYGRADIENTYMAX, Shader3D.PERIOD_SPRITE], 
				'u_ROLAngularVelocityGradientMaxZ': [ShuriKenParticle3D.ROLANGULARVELOCITYGRADIENTZMAX, Shader3D.PERIOD_SPRITE],
				'u_ROLAngularVelocityGradientMaxW': [ShuriKenParticle3D.ROLANGULARVELOCITYGRADIENTWMAX, Shader3D.PERIOD_SPRITE], 
				'u_TSACycles': [ShuriKenParticle3D.TEXTURESHEETANIMATIONCYCLES, Shader3D.PERIOD_SPRITE], 
				'u_TSASubUVLength': [ShuriKenParticle3D.TEXTURESHEETANIMATIONSUBUVLENGTH, Shader3D.PERIOD_SPRITE], 
				'u_TSAGradientUVs': [ShuriKenParticle3D.TEXTURESHEETANIMATIONGRADIENTUVS, Shader3D.PERIOD_SPRITE], 
				'u_TSAMaxGradientUVs': [ShuriKenParticle3D.TEXTURESHEETANIMATIONGRADIENTMAXUVS, Shader3D.PERIOD_SPRITE], 
				'u_CameraPosition': [BaseCamera.CAMERAPOS, Shader3D.PERIOD_CAMERA], 
				'u_CameraDirection': [BaseCamera.CAMERADIRECTION, Shader3D.PERIOD_CAMERA], 
				'u_CameraUp': [BaseCamera.CAMERAUP, Shader3D.PERIOD_CAMERA], 
				'u_View': [BaseCamera.VIEWMATRIX, Shader3D.PERIOD_CAMERA], 
				'u_Projection': [BaseCamera.PROJECTMATRIX, Shader3D.PERIOD_CAMERA],
				'u_FogStart': [Scene.FOGSTART, Shader3D.PERIOD_SCENE], 
				'u_FogRange': [Scene.FOGRANGE, Shader3D.PERIOD_SCENE], 
				'u_FogColor': [Scene.FOGCOLOR, Shader3D.PERIOD_SCENE]
			};
			
			var PARTICLESHURIKEN:int = Shader3D.nameKey.add("Particle");
			var vs:String = __INCLUDESTR__("shader/Particle.vs");
			var ps:String = __INCLUDESTR__("shader/Particle.ps");
			var shaderCompile:ShaderCompile3D = ShaderCompile3D.add(PARTICLESHURIKEN, vs, ps, attributeMap, uniformMap);
			
			MeshParticleMaterial.SHADERDEFINE_MAINTEXTURE = shaderCompile.registerMaterialDefine("MAINTEXTURE");
            MeshParticleMaterial.SHADERDEFINE_MASKTEXTURE = shaderCompile.registerMaterialDefine("MASKTEXTURE");
            MeshParticleMaterial.SHADERDEFINE_TILINGOFFSET1 = shaderCompile.registerMaterialDefine("TILINGOFFSET1");
            MeshParticleMaterial.SHADERDEFINE_TILINGOFFSET2 = shaderCompile.registerMaterialDefine("TILINGOFFSET2");
			ShuriKenParticle3D.SHADERDEFINE_RENDERMODE_BILLBOARD = shaderCompile.registerSpriteDefine("SPHERHBILLBOARD");
			ShuriKenParticle3D.SHADERDEFINE_RENDERMODE_STRETCHEDBILLBOARD = shaderCompile.registerSpriteDefine("STRETCHEDBILLBOARD");
			ShuriKenParticle3D.SHADERDEFINE_RENDERMODE_HORIZONTALBILLBOARD = shaderCompile.registerSpriteDefine("HORIZONTALBILLBOARD");
			ShuriKenParticle3D.SHADERDEFINE_RENDERMODE_VERTICALBILLBOARD = shaderCompile.registerSpriteDefine("VERTICALBILLBOARD");
			ShuriKenParticle3D.SHADERDEFINE_COLOROVERLIFETIME = shaderCompile.registerSpriteDefine("COLOROVERLIFETIME");
			ShuriKenParticle3D.SHADERDEFINE_RANDOMCOLOROVERLIFETIME = shaderCompile.registerSpriteDefine("RANDOMCOLOROVERLIFETIME");
			ShuriKenParticle3D.SHADERDEFINE_VELOCITYOVERLIFETIMECONSTANT = shaderCompile.registerSpriteDefine("VELOCITYOVERLIFETIMECONSTANT");
			ShuriKenParticle3D.SHADERDEFINE_VELOCITYOVERLIFETIMECURVE = shaderCompile.registerSpriteDefine("VELOCITYOVERLIFETIMECURVE");
			ShuriKenParticle3D.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCONSTANT = shaderCompile.registerSpriteDefine("VELOCITYOVERLIFETIMERANDOMCONSTANT");
			ShuriKenParticle3D.SHADERDEFINE_VELOCITYOVERLIFETIMERANDOMCURVE = shaderCompile.registerSpriteDefine("VELOCITYOVERLIFETIMERANDOMCURVE");
			ShuriKenParticle3D.SHADERDEFINE_TEXTURESHEETANIMATIONCURVE = shaderCompile.registerSpriteDefine("TEXTURESHEETANIMATIONCURVE");
			ShuriKenParticle3D.SHADERDEFINE_TEXTURESHEETANIMATIONRANDOMCURVE = shaderCompile.registerSpriteDefine("TEXTURESHEETANIMATIONRANDOMCURVE");
			ShuriKenParticle3D.SHADERDEFINE_ROTATIONOVERLIFETIME = shaderCompile.registerSpriteDefine("ROTATIONOVERLIFETIME");
			ShuriKenParticle3D.SHADERDEFINE_ROTATIONOVERLIFETIMESEPERATE = shaderCompile.registerSpriteDefine("ROTATIONOVERLIFETIMESEPERATE");
			ShuriKenParticle3D.SHADERDEFINE_ROTATIONOVERLIFETIMECONSTANT = shaderCompile.registerSpriteDefine("ROTATIONOVERLIFETIMECONSTANT");
			ShuriKenParticle3D.SHADERDEFINE_ROTATIONOVERLIFETIMECURVE = shaderCompile.registerSpriteDefine("ROTATIONOVERLIFETIMECURVE");
			ShuriKenParticle3D.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCONSTANTS = shaderCompile.registerSpriteDefine("ROTATIONOVERLIFETIMERANDOMCONSTANTS");
			ShuriKenParticle3D.SHADERDEFINE_ROTATIONOVERLIFETIMERANDOMCURVES = shaderCompile.registerSpriteDefine("ROTATIONOVERLIFETIMERANDOMCURVES");
			ShuriKenParticle3D.SHADERDEFINE_SIZEOVERLIFETIMECURVE = shaderCompile.registerSpriteDefine("SIZEOVERLIFETIMECURVE");
			ShuriKenParticle3D.SHADERDEFINE_SIZEOVERLIFETIMECURVESEPERATE = shaderCompile.registerSpriteDefine("SIZEOVERLIFETIMECURVESEPERATE");
			ShuriKenParticle3D.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVES = shaderCompile.registerSpriteDefine("SIZEOVERLIFETIMERANDOMCURVES");
			ShuriKenParticle3D.SHADERDEFINE_SIZEOVERLIFETIMERANDOMCURVESSEPERATE = shaderCompile.registerSpriteDefine("SIZEOVERLIFETIMERANDOMCURVESSEPERATE");
			ShuriKenParticle3D.SHADERDEFINE_RENDERMODE_MESH = shaderCompile.registerSpriteDefine("RENDERMODE_MESH");
			ShuriKenParticle3D.SHADERDEFINE_SHAPE = shaderCompile.registerSpriteDefine("SHAPE");
		}            
		
		public function ParticleMaterial() {
			
			setShaderName("Particle");
			_setColor(BASECOLOR, new Vector4(1, 1, 1, 1));
			_setColor(ALPHACOLOR, new Vector4(1, 1, 1, 1));
			_setNumber(INTENSITY, 1.0);
			_setNumber(ALPHA, 1.0);
		}
	
	}

}