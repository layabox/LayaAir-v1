package laya.d3.extension.domino {
	import laya.d3.core.RenderableSprite3D;
	import laya.d3.core.material.BaseMaterial;
	import laya.d3.core.render.RenderElement;
	import laya.d3.math.Quaternion;
	import laya.d3.math.Vector3;
	import laya.events.Event;
	
	/**
	 * ...
	 * @author
	 */
	public class DominoSprite3D extends RenderableSprite3D {
		
		private var _defaultScale:Vector3 = new Vector3(0.4, 1.0, 0.12);
		
		/**
		 * 获取多米诺过滤器。
		 * @return  多米诺过滤器。
		 */
		public function get dominoFilter():DominoFilter {
			return _geometryFilter as DominoFilter;
		}
		
		/**
		 * 获取多米诺渲染器。
		 * @return  多米诺渲染器。
		 */
		public function get dominoRender():DominoRenderer {
			return _render as DominoRenderer;
		}
		
		public function DominoSprite3D() {
			
			_geometryFilter = new DominoFilter(this);
			_render = new DominoRenderer(this);
			
			_changeRenderObjects(_render as DominoRenderer, 0, DominoMaterial.defaultMaterial);
			
			_render.on(Event.MATERIAL_CHANGED, this, _changeRenderObjects);
			_geometryFilter.on(Event.DOMINO_FILTER_CHANGE, this, _changeRenderObjectsByRenderElement);
		}
		
		public function addDomino(position:Vector3 = Vector3.ZERO, rotation:Quaternion = Quaternion.DEFAULT, scale:Vector3 = _defaultScale){
			(_geometryFilter as DominoFilter).addDomino(position, rotation, scale);
		}
		
		public function updateDomino(index:int, position:Vector3 = Vector3.ZERO, rotation:Quaternion = Quaternion.DEFAULT, scale:Vector3 = _defaultScale){
			(_geometryFilter as DominoFilter).updateDomino(index, position, rotation, scale);
		}
		
		public function updateDominos(startIndex:int, count:int, keyFrames:Vector.<DominoKeyFrame>) {
			if (count > keyFrames.length){
				throw Error("Update domino count can't more than keyFrames Count!");
			}
			(_geometryFilter as DominoFilter).updateDominos(startIndex, count, keyFrames);
		}
		
		public function _changeRenderObjects(sender:DominoRenderer, index:int, material:BaseMaterial):void {
			
			var renderElementsCount:int = (_geometryFilter as DominoFilter).getDominoRenderElementsCount();
			_render._renderElements.length = renderElementsCount;
			for (var i:int = 0; i < renderElementsCount; i++){
				_changeRenderObject(i, material);
			}
		}
		
		public function _changeRenderObject(index:int, material:DominoMaterial):void {
			
			var renderObjects:Vector.<RenderElement> = _render._renderElements;
			(material) || (material = DominoMaterial.defaultMaterial);
			var renderElement:RenderElement = renderObjects[index];
			(renderElement) || (renderElement = renderObjects[index] = new RenderElement());
			renderElement._sprite3D = this as DominoSprite3D;
			renderElement.renderObj = (_geometryFilter as DominoFilter).getRenderElement(index) as DominoRenderElement;
			renderElement._render = _render as DominoRenderer;
			renderElement._material = material as DominoMaterial;
		}
		
		public function _changeRenderObjectsByRenderElement(index:int, dominoRenderElement:DominoRenderElement):void {
			
			var renderObjects:Vector.<RenderElement> = _render._renderElements;
			var renderElement:RenderElement = renderObjects[index];
			(renderElement) || (renderElement = renderObjects[index] = new RenderElement());
			renderElement._sprite3D = this as DominoSprite3D;
			renderElement.renderObj = dominoRenderElement;
			renderElement._render = _render as DominoRenderer;
			renderElement._material = _render.sharedMaterial ? _render.sharedMaterial : DominoMaterial.defaultMaterial;
		}
		
		/** @private */
		override protected function _clearSelfRenderObjects():void {
			scene.removeFrustumCullingObject(_render);
		}
		
		/** @private */
		override protected function _addSelfRenderObjects():void {
			scene.addFrustumCullingObject(_render);
		}
		
		override public function _update(state:RenderState):void {
			super._update(state);
			(_geometryFilter as DominoFilter)._update(state);
		}
	}
}