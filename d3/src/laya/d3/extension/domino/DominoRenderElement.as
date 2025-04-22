package laya.d3.extension.domino {
	import laya.d3.core.render.IRenderable;
	import laya.d3.core.render.RenderState;
	import laya.d3.core.trail.VertexTrail;
	import laya.d3.graphics.IndexBuffer3D;
	import laya.d3.graphics.VertexBuffer3D;
	import laya.d3.math.MathUtils3D;
	import laya.d3.math.Matrix4x4;
	import laya.d3.math.Quaternion;
	import laya.d3.math.Vector3;
	import laya.d3.math.Vector4;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	import laya.webgl.WebGLContext;
	
	/**
	 * ...
	 * @author
	 */
	public class DominoRenderElement implements IRenderable {
		
		private var _owner:DominoFilter;
		private static var renderElementCount:int = 0;
		public var id:int;
		
		public var _curDominoCount:int = 0;
		
		private const _perDominoVertexCount:int = 24;
		private const _perDominoIndiceCount:int = 36;
		
		private var _vertexBuffers:Vector.<VertexBuffer3D>;
		
		private var _vertices1:Float32Array;
		private var _vertexBuffer1:VertexBuffer3D;
		private const _floatCountPerVertices1:int = 4;
		private var _verticesIndex1:int = 0;
		private var _everyAddVerticeCount1:int = 0;
		
		private var _vertices2:Float32Array;
		private var _vertexBuffer2:VertexBuffer3D;
		private const _floatCountPerVertices2:int = 6;
		private var _verticesIndex2:int = 0;
		private var _everyAddVerticeCount2:int = 0;
		private var _everyUpdateVerticeCount2:int = 0;
		
		private var _indices:Uint16Array;
		private var _indexBuffer:IndexBuffer3D;
		private var _indicesIndex:int = 0;
		private var _everyAddindiceCount:int = 0;
		private var _index:int = 0;
		
		private var _color:Vector3 = new Vector4(Math.random(), Math.random(), Math.random(), 1);
		private var _topColor:Vector4 = _color;
		private var _buttomColor:Vector4 = _color;
		private var _leftColor:Vector4 = _color;
		private var _rightColor:Vector4 = _color;
		private var _frontColor:Vector4 = _color;
		private var _backColor:Vector4 = _color;
		
		private var _localMatrix:Matrix4x4 = new Matrix4x4();
		private var _localPostion:Vector3 = new Vector3();
		private var _localNormal:Vector3 = new Vector3();
		
		public function DominoRenderElement(owner:DominoFilter) {
			
			_owner = owner;
			id = renderElementCount++;
			
			var _maxVertexCount:int = _owner.DominoRenderElementMaxDominoCount * _perDominoVertexCount;
			_vertices1 = new Float32Array(_maxVertexCount * _floatCountPerVertices1);
			_vertices2 = new Float32Array(_maxVertexCount * _floatCountPerVertices2);
			_vertexBuffer1 = new VertexBuffer3D(DominoVertex.vertexDeclaration1, _maxVertexCount, WebGLContext.STATIC_DRAW, true);
			_vertexBuffer2 = new VertexBuffer3D(DominoVertex.vertexDeclaration2, _maxVertexCount, WebGLContext.STATIC_DRAW, true);
			_vertexBuffers = new Vector.<VertexBuffer3D>();
			_vertexBuffers.push(_vertexBuffer1);
			_vertexBuffers.push(_vertexBuffer2);
			
			var _maxIndiceCount:int = _owner.DominoRenderElementMaxDominoCount * _perDominoIndiceCount;
			_indices = new Uint16Array(_maxIndiceCount);
			_indexBuffer = new IndexBuffer3D(IndexBuffer3D.INDEXTYPE_USHORT, _maxIndiceCount, WebGLContext.STATIC_DRAW, true);
		}
		
		public function addDomino(position:Vector3 = Vector3.ZERO, rotation:Quaternion = Quaternion.DEFAULT, scale:Vector3 = Vector3.ONE) {
			
			_curDominoCount++;
			_owner.dominoCount++;
			_owner.dominoPosition.push(position);
			//VB1
			addDataForVertexBuffer1();
			//VB2
			addDataForVertexBuffer2(position, rotation, scale);
			//IB
			addDataForIndexBuffer();
		}
		
		public function updateDomino(index:int, position:Vector3 = Vector3.ZERO, rotation:Quaternion = Quaternion.DEFAULT, scale:Vector3 = Vector3.ONE):void {
			
			_everyUpdateVerticeCount2 = 0;
			var offset:int = _perDominoVertexCount * _floatCountPerVertices2 * index;
			var positions:Vector.<Vector3> = DominoFilter._positions;
			var positione:Float32Array, positionX:Number, positionY:Number, positionZ:Number;
			var normals:Vector.<Vector3> = DominoFilter._normals;
			var normale:Float32Array, normalX:Number, normalY:Number, normalZ:Number;
			var i:int, length:int = positions.length;
			
			Matrix4x4.createAffineTransformation(position, rotation, scale, _localMatrix);
			for (i = 0; i < length; i++) {
				
				//position
				Vector3.transformCoordinate(positions[i], _localMatrix, _localPostion);
				positione = _localPostion.elements;
				positionX = positione[0];
				positionY = positione[1];
				positionZ = positione[2];
				_vertices2[offset + _everyUpdateVerticeCount2++] = positionX;
				_vertices2[offset + _everyUpdateVerticeCount2++] = positionY;
				_vertices2[offset + _everyUpdateVerticeCount2++] = positionZ;
				
				//normal
				Vector3.TransformNormal(normals[i], _localMatrix, _localNormal);
				normale = _localNormal.elements;
				normalX = normale[0];
				normalY = normale[1];
				normalZ = normale[2];
				_vertices2[offset + _everyUpdateVerticeCount2++] = normalX;
				_vertices2[offset + _everyUpdateVerticeCount2++] = normalY;
				_vertices2[offset + _everyUpdateVerticeCount2++] = normalZ;
			}
			_vertexBuffer2.setData(_vertices2, offset, offset, _everyUpdateVerticeCount2);
		}
		
		public function updateDominos(startIndex:int, count:int, keyFrames:Vector.<DominoKeyFrame>) {
			
			_everyUpdateVerticeCount2 = 0;
			var offset:int = _perDominoVertexCount * _floatCountPerVertices2 * startIndex;
			var positions:Vector.<Vector3> = DominoFilter._positions;
			var positione:Float32Array, positionX:Number, positionY:Number, positionZ:Number;
			var normals:Vector.<Vector3> = DominoFilter._normals;
			var normale:Float32Array, normalX:Number, normalY:Number, normalZ:Number;
			var i:int, j:int, length:int = positions.length;
			var keyFrame:DominoKeyFrame;
			
			for (i = 0; i < count; i++) {
				
				keyFrame = keyFrames[i];
				Matrix4x4.createAffineTransformation(keyFrame.position, keyFrame.rotation, keyFrame.scale, _localMatrix);
				for (j = 0; j < length; j++) {
					
					//position
					Vector3.transformCoordinate(positions[j], _localMatrix, _localPostion);
					positione = _localPostion.elements;
					positionX = positione[0];
					positionY = positione[1];
					positionZ = positione[2];
					_vertices2[offset + _everyUpdateVerticeCount2++] = positionX;
					_vertices2[offset + _everyUpdateVerticeCount2++] = positionY;
					_vertices2[offset + _everyUpdateVerticeCount2++] = positionZ;
					
					//normal
					Vector3.TransformNormal(normals[j], _localMatrix, _localNormal);
					normale = _localNormal.elements;
					normalX = normale[0];
					normalY = normale[1];
					normalZ = normale[2];
					_vertices2[offset + _everyUpdateVerticeCount2++] = normalX;
					_vertices2[offset + _everyUpdateVerticeCount2++] = normalY;
					_vertices2[offset + _everyUpdateVerticeCount2++] = normalZ;
				}
			}
			_vertexBuffer2.setData(_vertices2, offset, offset, _everyUpdateVerticeCount2);
		}
		
		public function addDataForVertexBuffer1():void {
			
			_everyAddVerticeCount1 = 0;
			addDataForVertices1(_topColor);
			addDataForVertices1(_buttomColor);
			addDataForVertices1(_leftColor);
			addDataForVertices1(_rightColor);
			addDataForVertices1(_frontColor);
			addDataForVertices1(_backColor);
			_vertexBuffer1.setData(_vertices1, _verticesIndex1, _verticesIndex1, _everyAddVerticeCount1);
			_verticesIndex1 += _everyAddVerticeCount1;
		}
		
		public function addDataForVertexBuffer2(position:Vector3 = Vector3.ZERO, rotation:Quaternion = Quaternion.DEFAULT, scale:Vector3 = Vector3.ONE):void {
			
			_everyAddVerticeCount2 = 0;
			var positions:Vector.<Vector3> = DominoFilter._positions;
			var positione:Float32Array, positionX:Number, positionY:Number, positionZ:Number;
			var normals:Vector.<Vector3> = DominoFilter._normals;
			var normale:Float32Array, normalX:Number, normalY:Number, normalZ:Number;
			var i:int, j:int, length:int = positions.length;
			
			Matrix4x4.createAffineTransformation(position, rotation, scale, _localMatrix);
			for (i = 0; i < length; i++) {
				
				//position
				Vector3.transformCoordinate(positions[i], _localMatrix, _localPostion);
				positione = _localPostion.elements;
				positionX = positione[0];
				positionY = positione[1];
				positionZ = positione[2];
				_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = positionX;
				_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = positionY;
				_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = positionZ;
				
				//normal
				Vector3.TransformNormal(normals[i], _localMatrix, _localNormal);
				normale = _localNormal.elements;
				normalX = normale[0];
				normalY = normale[1];
				normalZ = normale[2];
				_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = normalX;
				_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = normalY;
				_vertices2[_verticesIndex2 + _everyAddVerticeCount2++] = normalZ;
			}
			_vertexBuffer2.setData(_vertices2, _verticesIndex2, _verticesIndex2, _everyAddVerticeCount2);
			_verticesIndex2 += _everyAddVerticeCount2;
		}
		
		public function addDataForIndexBuffer() :void{
			
			_everyAddindiceCount = 0;
			
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 0;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 1;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 2;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 2;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 3;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 0;
			
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 4;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 7;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 6;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 6;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 5;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 4;
			
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 8;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 9;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 10;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 10;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 11;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 8;
			
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 12;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 15;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 14;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 14;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 13;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 12;
			
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 16;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 17;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 18;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 18;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 19;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 16;
			
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 20;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 23;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 22;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 22;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 21;
			_indices[_indicesIndex + _everyAddindiceCount++] = _index + 20;
			
			_indexBuffer.setData(_indices, _indicesIndex, _indicesIndex, _everyAddindiceCount);
			_indicesIndex += _everyAddindiceCount;
			_index += _perDominoVertexCount;
		}
		
		public function addDataForVertices1(color:Vector4):void {
			
			var colore:Float32Array = color.elements;
			var colorX:Number = colore[0];
			var colorY:Number = colore[1];
			var colorZ:Number = colore[2];
			var colorW:Number = colore[3];
			
			for (var i:int = 0; i < 4; i++) {
				//color
				_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = colorX;
				_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = colorY;
				_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = colorZ;
				_vertices1[_verticesIndex1 + _everyAddVerticeCount1++] = colorW;
			}
		}
		
		public function _beforeRender(state:RenderState):Boolean {
			_indexBuffer._bind();
			return true;
		}
		
		public function _render(state:RenderState):void {
			
			WebGL.mainContext.drawElements(WebGLContext.TRIANGLES, _indicesIndex, WebGLContext.UNSIGNED_SHORT, 0);
			Stat.drawCall++;
			Stat.trianglesFaces += _indicesIndex / 3;
		}
		
		public function _getIndexBuffer():IndexBuffer3D{
			return _indexBuffer;
		}
		
		public function _getVertexBuffer(index:int = 0):VertexBuffer3D {
			if (index === 0)
				return _vertexBuffer1;
			else if (index === 1)
				return _vertexBuffer2;
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
			return _indicesIndex / 3;
		}
	}

}