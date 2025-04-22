package laya.d3.extension.lineRender {
	import laya.d3.core.Camera;
	import laya.d3.core.GeometryFilter;
	import laya.d3.core.render.IRenderable;
	import laya.d3.core.render.RenderState;
	import laya.d3.core.trail.module.Color;
	import laya.d3.core.trail.module.Gradient;
	import laya.d3.core.trail.module.GradientAlphaKey;
	import laya.d3.core.trail.module.GradientColorKey;
	import laya.d3.core.trail.module.GradientMode;
	import laya.d3.core.trail.module.TextureMode;
	import laya.d3.core.trail.module.TrailKeyFrame;
	import laya.d3.graphics.IndexBuffer3D;
	import laya.d3.graphics.VertexBuffer3D;
	import laya.d3.math.Collision;
	import laya.d3.math.MathUtils3D;
	import laya.d3.math.Quaternion;
	import laya.d3.math.Ray;
	import laya.d3.math.Vector3;
	import laya.d3.math.Vector4;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	import laya.webgl.WebGLContext;
	
	/**
	 * ...
	 * @author
	 */
	public class LineFilter extends GeometryFilter implements IRenderable {
		
		public var _owner:LineSprite3D;
		public var _camera:Camera;
		public var _useWorldSpace:Boolean;
		public var _widthMultiplier:Number = 0.02;
		private var _widthCurve:Vector.<TrailKeyFrame>;
		private var _colorGradient:Gradient;
		private var _textureMode:int;
		
		private var _positions:Vector.<Vector3> = new Vector.<Vector3>();
		private var _normals:Vector.<Vector3> = new Vector.<Vector3>();
		private var _curFixedNum:Number = 0;
		private var _vertexBuffers:Vector.<VertexBuffer3D>;
		
		private var _maxVertexCount:int = 512;
		private var _vertexCount:int = 0;
		
		private var _vertices1:Float32Array;
		private var _vertexBuffer1:VertexBuffer3D;
		private var _verticesIndex1:int = 0;
		private var _everyAddVerticeCount1:int = 0;
		private const _floatCountPerVertices1:int = 4;
		
		private var _vertices2:Float32Array;
		private var _vertexBuffer2:VertexBuffer3D;
		private var _verticesIndex2:int = 0;
		private var _everyAddVerticeCount2:int = 0;
		private const _floatCountPerVertices2:int = 3;
		
		private var _vertices3:Float32Array;
		private var _vertexBuffer3:VertexBuffer3D;
		private var _verticesIndex3:int = 0;
		private var _everyAddVerticeCount3:int = 0;
		private const _floatCountPerVertices3:int = 2;
		
		private var _firstPosition:Vector3 = new Vector3();
		private var _delVector3:Vector3 = new Vector3();
		private var _lastPosition:Vector3 = new Vector3();
		private var _pointAtoBVector3:Vector3 = new Vector3();
		private var _cameraToPointV3:Vector3 = new Vector3();
		private var _delLength:Number = 0;
		
		private var _pointe:Float32Array;
		private var _pointAtoBVector3e:Float32Array;
		
		private var _curDirection:Vector3 = new Vector3();
		private var _lastDirection:Vector3 = new Vector3();
		private var _fixedDirection:Vector3 = new Vector3();
		
		private var _everyToFirstDistance:Float32Array;
		private var _curTotalLength:Number = 0;
		
		/**
		 * 获取是否世界空间。
		 * @return  是否世界空间。
		 */
		public function get useWorldSpace():Boolean {
			return _useWorldSpace;
		}
		
		/**
		 * 设置是否世界空间。
		 * @param value 是否世界空间。
		 */
		public function set useWorldSpace(value:Boolean):void {
			_useWorldSpace = value;
			if (value){
				_owner._render._addShaderDefine(LineSprite3D.SHADERDEFINE_WORLDSPACE);
			}
			else{
				_owner._render._removeShaderDefine(LineSprite3D.SHADERDEFINE_WORLDSPACE);
			}
		}
		
		/**
		 * 获取宽度倍数。
		 * @return  宽度倍数。
		 */
		public function get widthMultiplier():Number {
			return _widthMultiplier;
		}
		
		/**
		 * 设置宽度倍数。
		 * @param value 宽度倍数。
		 */
		public function set widthMultiplier(value:Number):void {
			_widthMultiplier = value;
		}
		
		/**
		 * 获取宽度曲线。
		 * @return  宽度曲线。
		 */
		public function get widthCurve():Vector.<TrailKeyFrame> {
			return _widthCurve;
		}
		
		/**
		 * 设置宽度曲线。
		 * @param value 宽度曲线。
		 */
		public function set widthCurve(value:Vector.<TrailKeyFrame>):void {
			_widthCurve = value;
			var widthCurveFloatArray:Float32Array = new Float32Array(value.length * 4);
			var i:int, j:int, index:int = 0;
			for (i = 0, j = value.length; i < j; i++ ){
				widthCurveFloatArray[index++] = value[i].time;
				widthCurveFloatArray[index++] = value[i].inTangent;
				widthCurveFloatArray[index++] = value[i].outTangent;
				widthCurveFloatArray[index++] = value[i].value;
			}
			_owner._render._setShaderValueBuffer(LineSprite3D.WIDTHCURVE, widthCurveFloatArray);
			_owner._render._setShaderValueInt(LineSprite3D.WIDTHCURVEKEYLENGTH, value.length);
		}
		
		/**
		 * 获取颜色梯度。
		 * @return  颜色梯度。
		 */
		public function get colorGradient():Gradient {
			return _colorGradient;
		}
		
		/**
		 * 设置颜色梯度。
		 * @param value 颜色梯度。
		 */
		public function set colorGradient(value:Gradient):void {
			_colorGradient = value;
			_owner._render._setShaderValueBuffer(LineSprite3D.GRADIENTCOLORKEY, value._colorKeyData);
			_owner._render._setShaderValueBuffer(LineSprite3D.GRADIENTALPHAKEY, value._alphaKeyData);
			if (value.mode == GradientMode.Blend){
				_owner._render._addShaderDefine(LineSprite3D.SHADERDEFINE_GRADIENTMODE_BLEND);
			}
			else{
				_owner._render._removeShaderDefine(LineSprite3D.SHADERDEFINE_GRADIENTMODE_BLEND);
			}
		}
		
		/**
		 * 获取纹理模式。
		 * @return  纹理模式。
		 */
		public function get textureMode():int {
			return _textureMode;
		}
		
		/**
		 * 设置纹理模式。
		 * @param value 纹理模式。
		 */
		public function set textureMode(value:int):void {
			_textureMode = value;
			if (value == TextureMode.Stretch){
				_owner._render._addShaderDefine(LineSprite3D.SHADERDEFINE_TEXTUREMODE_STRETCH);
			}
			else{
				_owner._render._removeShaderDefine(LineSprite3D.SHADERDEFINE_TEXTUREMODE_STRETCH);
			}
		}
		
		public function LineFilter(owner:LineSprite3D) {
			
			_owner = owner;
			_initData();
			
			_vertices1 = new Float32Array(_maxVertexCount * _floatCountPerVertices1);
			_vertices2 = new Float32Array(_maxVertexCount * _floatCountPerVertices2);
			_vertices3 = new Float32Array(_maxVertexCount * _floatCountPerVertices3);
			_vertexBuffer1 = new VertexBuffer3D(LineVertex.vertexDeclaration1, _maxVertexCount, WebGLContext.STATIC_DRAW, true);
			_vertexBuffer2 = new VertexBuffer3D(LineVertex.vertexDeclaration2, _maxVertexCount, WebGLContext.STATIC_DRAW, true);
			_vertexBuffer3 = new VertexBuffer3D(LineVertex.vertexDeclaration3, _maxVertexCount, WebGLContext.STATIC_DRAW, true);
			_vertexBuffers = new Vector.<VertexBuffer3D>();
			_vertexBuffers.push(_vertexBuffer1);
			_vertexBuffers.push(_vertexBuffer2);
			_vertexBuffers.push(_vertexBuffer3);
			
			_everyToFirstDistance = new Float32Array(_maxVertexCount / 2);
		}
		
		public function addPosition(position:Vector3, normal:Vector3){
			
			var v30:Vector3 = new Vector3();
			position.cloneTo(v30);
			_positions.push(v30);
			
			var v31:Vector3 = new Vector3();
			normal.cloneTo(v31);
			_normals.push(v31);
			
			_updateVertexBuffer1(v30);
			_vertexCount += 2;
		}
		
		public function _updateVertexBuffer1(position:Vector3):void{
			
			_everyAddVerticeCount1 = 0;
			_pointe = position.elements;
			
			_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = _pointe[0];
			_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = _pointe[1];
			_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = _pointe[2];
			
			_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = 1.0;
			
			_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = _pointe[0];
			_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = _pointe[1];
			_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = _pointe[2];
			
			_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = 0.0;
			
			_vertexBuffer1.setData(_vertices1, _verticesIndex1, _verticesIndex1, _everyAddVerticeCount1);
			_verticesIndex1 += _everyAddVerticeCount1;
		}
		
		public function _updateVertexBuffer2():void{
			
			_verticesIndex2 = 0;
			for (var i:int = _curFixedNum; i < _positions.length; i++ ){
				if (i == 0){
					Vector3.subtract(_positions[1], _positions[0], _delVector3);
					Vector3.cross(_delVector3, _normals[0], _pointAtoBVector3);
					Vector3.normalize(_pointAtoBVector3, _pointAtoBVector3);
					Vector3.scale(_pointAtoBVector3, _widthMultiplier / 2, _pointAtoBVector3);
					
					_everyToFirstDistance[i] = 0;
					
					_updateVertices2(_positions[0], 0);
				}
				else{
					Vector3.subtract(_positions[i], _positions[i - 1], _delVector3);
					Vector3.cross(_delVector3, _normals[i], _pointAtoBVector3);
					Vector3.normalize(_pointAtoBVector3, _pointAtoBVector3);
					Vector3.scale(_pointAtoBVector3, _widthMultiplier / 2, _pointAtoBVector3);
					
					_delLength = Vector3.scalarLength(_delVector3);
					_curTotalLength = _everyToFirstDistance[i] = _curTotalLength + _delLength;
					
					_updateVertices2(_positions[i], i);
				}
				_curFixedNum = i + 1;
			}
			_vertexBuffer2.setData(_vertices2, 0, 0, _verticesIndex2);
		}
		
		public function _updateVertexBuffer3():void{
			
			var _uvIndex:int = 0;
			var _uvX:Number = 0.0;
			var _uvX1:Number = 0.0;
			
			var i:int, j:int;
			for (i = 0, j = _vertexCount / 2; i < j; i++) {
				_uvX = _everyToFirstDistance[i] / _curTotalLength;
				_uvX1 = _everyToFirstDistance[i];
				
				_vertices3[_uvIndex++] = _uvX;
				_vertices3[_uvIndex++] = _uvX1;
				
				_vertices3[_uvIndex++] = _uvX;
				_vertices3[_uvIndex++] = _uvX1;
			}
			_vertexBuffer3.setData(_vertices3, 0, 0, _vertexCount * 2);
		}
		
		public function _beforeRender(state:RenderState):Boolean {
			
			if (_camera == null){
				_camera = state.camera;
				return false;
			}
			
			if (_vertexCount > 0){
				_updateVertexBuffer2();
				_updateVertexBuffer3();
				return true;
			}
			return false;
		}
		
		public function _render(state:RenderState):void {
			
			WebGL.mainContext.drawArrays(WebGLContext.TRIANGLE_STRIP, 0, _vertexCount);
			Stat.drawCall++;
		}
		
		public function _updateVertices2(position:Vector3, index:int):void{
			
			_everyAddVerticeCount2 = 0;
			
			_pointAtoBVector3e = _pointAtoBVector3.elements;
			
			_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = _pointAtoBVector3e[0];
			_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = _pointAtoBVector3e[1];
			_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = _pointAtoBVector3e[2];
			
			_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = -_pointAtoBVector3e[0];
			_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = -_pointAtoBVector3e[1];
			_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = -_pointAtoBVector3e[2];
			
			_verticesIndex2 += _everyAddVerticeCount2;
		}
		
		private function _initData():void{
			
			useWorldSpace = true;
			widthMultiplier = 0.02;
			textureMode = 0;
			
			var widthKeyFrames:Vector.<TrailKeyFrame> = new Vector.<TrailKeyFrame>();
			var widthKeyFrame1:TrailKeyFrame = new TrailKeyFrame();
			widthKeyFrame1.time = 0;
			widthKeyFrame1.inTangent = 0;
			widthKeyFrame1.outTangent = 0;
			widthKeyFrame1.value = 1;
			widthKeyFrames.push(widthKeyFrame1);
			var widthKeyFrame2:TrailKeyFrame = new TrailKeyFrame();
			widthKeyFrame2.time = 1;
			widthKeyFrame2.inTangent = 0;
			widthKeyFrame2.outTangent = 0;
			widthKeyFrame2.value = 1;
			widthKeyFrames.push(widthKeyFrame2);
			widthCurve = widthKeyFrames;
			
			var gradient:Gradient = new Gradient();
			gradient.mode = GradientMode.Blend;
			var colorKeys:Vector.<GradientColorKey> = new Vector.<GradientColorKey>();
			var colorKey1:GradientColorKey = new GradientColorKey();
			colorKey1.time = 0;
			colorKey1.color = Color.WHITE;
			colorKeys.push(colorKey1);
			var colorKey2:GradientColorKey = new GradientColorKey();
			colorKey2.time = 1;
			colorKey2.color = Color.WHITE;
			colorKeys.push(colorKey2);
			var alphaKeys:Vector.<GradientAlphaKey> = new Vector.<GradientAlphaKey>();
			var alphaKey1:GradientAlphaKey = new GradientAlphaKey();
			alphaKey1.time = 0;
			alphaKey1.alpha = 1;
			alphaKeys.push(alphaKey1);
			var alphaKey2:GradientAlphaKey = new GradientAlphaKey();
			alphaKey2.time = 1;
			alphaKey2.alpha = 1;
			alphaKeys.push(alphaKey2);
			gradient.setKeys(colorKeys, alphaKeys);
			colorGradient = gradient;
		}
		
		public function _update(state:RenderState):void {
			
		}
		
		public function _getVertexBuffer(index:int = 0):VertexBuffer3D {
			if (index === 0)
				return _vertexBuffer1;
			else
				return null;
		}
		
		public function _getVertexBuffers():Vector.<VertexBuffer3D> {
			return _vertexBuffers;
		}
		
		public function _getIndexBuffer():IndexBuffer3D {
			return null;
		}
		
		public function get _vertexBufferCount():int {
			return _vertexBuffers.length;
		}
		
		public function get triangleCount():int {
			return 0;
		}
		
		/**
		 * @private
		 */
		override public function _destroy():void {
			super._destroy();
			
			_vertexBuffer1.destroy();
			_vertexBuffer2.destroy();
			_vertexBuffer3.destroy();
			_vertexBuffers = null;
			_vertices1 = null;
			_vertices2 = null;
			_vertices3 = null;
			
			_owner = null;
			_camera = null;
			_widthCurve = null;
			_colorGradient = null;
			_positions = null;
			_normals = null;
			
			_firstPosition = null;
			_delVector3 = null;
			_lastPosition = null;
			_pointAtoBVector3 = null;
			_cameraToPointV3 = null;
			_delVector3 = null;
			
			_pointe = null;
			_pointAtoBVector3e = null;
			_curDirection = null;
			_lastDirection = null;
			_fixedDirection = null;
			_everyToFirstDistance = null;
		}
	}
}