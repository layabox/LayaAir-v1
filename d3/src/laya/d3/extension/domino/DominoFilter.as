package laya.d3.extension.domino {
	import laya.d3.core.GeometryFilter;
	import laya.d3.core.render.IRenderable;
	import laya.d3.core.render.RenderState;
	import laya.d3.graphics.VertexBuffer3D;
	import laya.d3.math.Quaternion;
	import laya.d3.math.Vector3;
	import laya.events.Event;
	
	/**
	 * ...
	 * @author
	 */
	public class DominoFilter extends GeometryFilter {
		
		public var _owner:DominoSprite3D;
		
		public static var _positions:Vector.<Vector3> = new Vector.<Vector3>();
		public static var _normals:Vector.<Vector3> = new Vector.<Vector3>();
		
		public var dominoCount:int = 0;
		public const DominoRenderElementMaxDominoCount:int = 2000;
		private var _dominoRenderElements:Vector.<DominoRenderElement>;
		
		public var dominoPosition:Vector.<Vector3> = new Vector.<Vector3>();
		
		public function DominoFilter(owner:DominoSprite3D) {
			
			_owner = owner;
			initPositionsAndNormal();
			_dominoRenderElements = new Vector.<DominoRenderElement>();
			addDominoRenderElement();
		}
		
		public function addDomino(position:Vector3 = Vector3.ZERO, rotation:Quaternion = Quaternion.DEFAULT, scale:Vector3 = Vector3.ZERO) {
			
			var curDominoRenderElement:DominoRenderElement = _dominoRenderElements[_dominoRenderElements.length - 1];
			if (curDominoRenderElement._curDominoCount >= DominoRenderElementMaxDominoCount) {
				var index:int = addDominoRenderElement();
				event(Event.DOMINO_FILTER_CHANGE, [index, _dominoRenderElements[index]]);
			}
			curDominoRenderElement = _dominoRenderElements[_dominoRenderElements.length - 1];
			curDominoRenderElement.addDomino(position, rotation, scale);
		}
		
		public function updateDomino(index:int, position:Vector3 = Vector3.ZERO, rotation:Quaternion = Quaternion.DEFAULT, scale:Vector3 = Vector3.ZERO) {
			
			var needUpdateDominoRenderElementId:int = Math.floor(index / DominoRenderElementMaxDominoCount);
			var needUpdateDominoRenderElementIndex:int = index % DominoRenderElementMaxDominoCount;
			var needUpdateDominoRenderElement:DominoRenderElement = _dominoRenderElements[needUpdateDominoRenderElementId];
			needUpdateDominoRenderElement.updateDomino(needUpdateDominoRenderElementIndex, position, rotation, scale);
		}
		
		public function updateDominos(startIndex:int, count:int, keyFrames:Vector.<DominoKeyFrame>) {
			
			var endIndex:int = startIndex + count - 1;
			var startNeedUpdateDominoRenderElementId:int = Math.floor(startIndex / DominoRenderElementMaxDominoCount);
			var endNeedUpdateDominoRenderElementId:int = Math.floor(endIndex / DominoRenderElementMaxDominoCount);
			var startNeedUpdateDominoRenderElementIndex:int = startIndex % DominoRenderElementMaxDominoCount;
			var endNeedUpdateDominoRenderElementIndex:int = endIndex % DominoRenderElementMaxDominoCount;
			
			var needUpdateDominoRenderElementCount:int = endNeedUpdateDominoRenderElementId - startNeedUpdateDominoRenderElementId + 1;
			var needUpdateDominoRenderElement:DominoRenderElement;
			if (needUpdateDominoRenderElementCount <= 1) {
				needUpdateDominoRenderElement = _dominoRenderElements[startNeedUpdateDominoRenderElementId];
				needUpdateDominoRenderElement.updateDominos(startNeedUpdateDominoRenderElementIndex, count, keyFrames);
				return;
			}
			
			var keyFrameDatas:Vector.<DominoKeyFrame>;
			var curStartIndex:int, curCount:int, curSliceIndex:int;
			for (var i:int = 0; i < needUpdateDominoRenderElementCount; i++) {
				needUpdateDominoRenderElement = _dominoRenderElements[startNeedUpdateDominoRenderElementId + i];
				if (i == 0) {
					curStartIndex = startNeedUpdateDominoRenderElementIndex;
					curCount = DominoRenderElementMaxDominoCount - curStartIndex;
					keyFrameDatas = keyFrames.slice(0, curCount);
					curSliceIndex += curCount;
				} else if (i == needUpdateDominoRenderElementCount - 1) {
					curStartIndex = 0;
					curCount = endNeedUpdateDominoRenderElementIndex + 1;
					keyFrameDatas = keyFrames.slice(curSliceIndex, keyFrames.length);
				} else {
					curStartIndex = 0;
					curCount = DominoRenderElementMaxDominoCount;
					keyFrameDatas = keyFrames.slice(curSliceIndex, curSliceIndex + DominoRenderElementMaxDominoCount);
					curSliceIndex += DominoRenderElementMaxDominoCount;
				}
				needUpdateDominoRenderElement.updateDominos(curStartIndex, curCount, keyFrameDatas);
			}
		}
		
		public function addDominoRenderElement():int {
			
			var _dominoRenderElement:DominoRenderElement = new DominoRenderElement(this);
			_dominoRenderElements.push(_dominoRenderElement);
			return _dominoRenderElements.length - 1;
		}
		
		public function getDominoRenderElementsCount():int {
			return _dominoRenderElements.length;
		}
		
		public function getRenderElement(index:int):IRenderable {
			return _dominoRenderElements[index];
		}
		
		public function _update(state:RenderState):void {
		
		}
		
		public function initPositionsAndNormal():void {
			
			if (_positions.length != 0 && _normals.length != 0) {
				return;
			}
			
			_positions.push(new Vector3(-0.5, 0.5, -0.5));
			_positions.push(new Vector3(0.5, 0.5, -0.5));
			_positions.push(new Vector3(0.5, 0.5, 0.5));
			_positions.push(new Vector3(-0.5, 0.5, 0.5));
			
			_positions.push(new Vector3(-0.5, -0.5, -0.5));
			_positions.push(new Vector3(0.5, -0.5, -0.5));
			_positions.push(new Vector3(0.5, -0.5, 0.5));
			_positions.push(new Vector3(-0.5, -0.5, 0.5));
			
			_positions.push(new Vector3(-0.5, 0.5, -0.5));
			_positions.push(new Vector3(-0.5, 0.5, 0.5));
			_positions.push(new Vector3(-0.5, -0.5, 0.5));
			_positions.push(new Vector3(-0.5, -0.5, -0.5));
			
			_positions.push(new Vector3(0.5, 0.5, -0.5));
			_positions.push(new Vector3(0.5, 0.5, 0.5));
			_positions.push(new Vector3(0.5, -0.5, 0.5));
			_positions.push(new Vector3(0.5, -0.5, -0.5));
			
			_positions.push(new Vector3(-0.5, 0.5, 0.5));
			_positions.push(new Vector3(0.5, 0.5, 0.5));
			_positions.push(new Vector3(0.5, -0.5, 0.5));
			_positions.push(new Vector3(-0.5, -0.5, 0.5));
			
			_positions.push(new Vector3(-0.5, 0.5, -0.5));
			_positions.push(new Vector3(0.5, 0.5, -0.5));
			_positions.push(new Vector3(0.5, -0.5, -0.5));
			_positions.push(new Vector3(-0.5, -0.5, -0.5));
			
			/******************************************************************/
			
			_normals.push(new Vector3(0, 1, 0));
			_normals.push(new Vector3(0, 1, 0));
			_normals.push(new Vector3(0, 1, 0));
			_normals.push(new Vector3(0, 1, 0));
			
			_normals.push(new Vector3(0, -1, 0));
			_normals.push(new Vector3(0, -1, 0));
			_normals.push(new Vector3(0, -1, 0));
			_normals.push(new Vector3(0, -1, 0));
			
			_normals.push(new Vector3(-1, 0, 0));
			_normals.push(new Vector3(-1, 0, 0));
			_normals.push(new Vector3(-1, 0, 0));
			_normals.push(new Vector3(-1, 0, 0));
			
			_normals.push(new Vector3(1, 0, 0));
			_normals.push(new Vector3(1, 0, 0));
			_normals.push(new Vector3(1, 0, 0));
			_normals.push(new Vector3(1, 0, 0));
			
			_normals.push(new Vector3(0, 0, 1));
			_normals.push(new Vector3(0, 0, 1));
			_normals.push(new Vector3(0, 0, 1));
			_normals.push(new Vector3(0, 0, 1));
			
			_normals.push(new Vector3(0, 0, -1));
			_normals.push(new Vector3(0, 0, -1));
			_normals.push(new Vector3(0, 0, -1));
			_normals.push(new Vector3(0, 0, -1));
		}
	}
}