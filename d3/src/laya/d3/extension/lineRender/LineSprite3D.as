package laya.d3.extension.lineRender 
{
	import laya.d3.core.Camera;
	import laya.d3.core.ComponentNode;
	import laya.d3.core.RenderableSprite3D;
	import laya.d3.core.material.BaseMaterial;
	import laya.d3.core.render.RenderElement;
	import laya.d3.core.render.RenderState;
	import laya.d3.core.trail.module.Color;
	import laya.d3.core.trail.module.Gradient;
	import laya.d3.core.trail.module.GradientAlphaKey;
	import laya.d3.core.trail.module.GradientColorKey;
	import laya.d3.core.trail.module.TrailKeyFrame;
	import laya.d3.math.Vector3;
	import laya.d3.shader.ShaderDefines;
	import laya.events.Event;
	import laya.net.Loader;
	/**
	 * ...
	 * @author 
	 */
	public class LineSprite3D extends RenderableSprite3D
	{
		public static const WIDTHCURVE:int = 3;
		public static const WIDTHCURVEKEYLENGTH:int = 4;
		public static const GRADIENTCOLORKEY:int = 5;
		public static const GRADIENTALPHAKEY:int = 6;
		
		public static var SHADERDEFINE_WORLDSPACE:int;
		public static var SHADERDEFINE_GRADIENTMODE_BLEND:int;
		public static var SHADERDEFINE_TEXTUREMODE_STRETCH:int;
		
		
		/**@private */
		public static var shaderDefines:ShaderDefines = new ShaderDefines(RenderableSprite3D.shaderDefines);
		
		private var _position:Vector3 = new Vector3();
		
		/**
		 * @private
		 */
		public static function __init__():void {
			SHADERDEFINE_GRADIENTMODE_BLEND = shaderDefines.registerDefine("GRADIENTMODE_BLEND");
			SHADERDEFINE_TEXTUREMODE_STRETCH = shaderDefines.registerDefine("TEXTUREMODE");
			SHADERDEFINE_WORLDSPACE = shaderDefines.registerDefine("WORLDSPACE");
		}
		
		/**
		 * 获取line过滤器。
		 * @return  line过滤器。
		 */
		public function get lineFilter():LineFilter {
			return _geometryFilter as LineFilter;
		}
		
		/**
		 * 获取line渲染器。
		 * @return  line渲染器。
		 */
		public function get lineRender():LineRenderer {
			return _render as LineRenderer;
		}
			
		public function LineSprite3D() 
		{
			_render = new LineRenderer(this);
			_geometryFilter = new LineFilter(this);
			
			_changeRenderObjects(_render as LineRenderer, 0, LineMaterial.defaultMaterial);
			_render.on(Event.MATERIAL_CHANGED, this, _changeRenderObjects);
		}
		
		public function addPosition(position:Vector3, normal:Vector3):void{
			(_geometryFilter as LineFilter).addPosition(position, normal);
		}
		
		public function _changeRenderObjects(sender:LineRenderer, index:int, material:BaseMaterial):void {
			
			var renderObjects:Vector.<RenderElement> = _render._renderElements;
			(material) || (material = LineMaterial.defaultMaterial);
			var renderElement:RenderElement = renderObjects[index];
			(renderElement) || (renderElement = renderObjects[index] = new RenderElement());
			renderElement._sprite3D = this as LineSprite3D;
			renderElement.renderObj = _geometryFilter as LineFilter;
			renderElement._render = _render as LineRenderer;
			renderElement._material = material as LineMaterial;
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
			(_geometryFilter as LineFilter)._update(state);
		}
		
		/**
		 * @inheritDoc
		 */
		override protected function _parseCustomProps(rootNode:ComponentNode, innerResouMap:Object, customProps:Object, json:Object):void {
			var render:LineRenderer = _render as LineRenderer;
			var filter:LineFilter = _geometryFilter as LineFilter;
			var i:int, j:int;
			//material
			var materials:Array = customProps.materials;
			
			if (materials) {
				var sharedMaterials:Vector.<BaseMaterial> = render.sharedMaterials;
				var materialCount:int = materials.length;
				sharedMaterials.length = materialCount;
				for (i = 0; i < materialCount; i++)
					sharedMaterials[i] = Loader.getRes(innerResouMap[materials[i].path]);
				render.sharedMaterials = sharedMaterials;
			}
			var props:Object = json.props;
			filter.widthMultiplier = props.widthMultiplier;
			filter.textureMode = props.textureMode;
			//widthCurve
			var _widthCurve:Vector.<TrailKeyFrame> = new Vector.<TrailKeyFrame>();
			var widthCurve:Array = customProps.widthCurve;
			for (i = 0, j = widthCurve.length; i < j; i++ ){
				var trailkeyframe:TrailKeyFrame = new TrailKeyFrame();
				trailkeyframe.time = widthCurve[i].time;
				trailkeyframe.inTangent = widthCurve[i].inTangent;
				trailkeyframe.outTangent = widthCurve[i].outTangent;
				trailkeyframe.value = widthCurve[i].value;
				_widthCurve.push(trailkeyframe);
			}
			filter.widthCurve = _widthCurve;
			//colorGradient
			var colorGradientNode:Object = customProps.colorGradient;
			var _colorGradient:Gradient = new Gradient();
			_colorGradient.mode = colorGradientNode.mode;
			var colorKeys:Vector.<GradientColorKey> = new Vector.<GradientColorKey>();
			var colorKey:GradientColorKey;
			var _colorKeys:Array = colorGradientNode.colorKeys;
			var _colorKey:Object;
			for (i = 0, j = _colorKeys.length; i < j; i++ ){
				_colorKey = _colorKeys[i];
				colorKey = new GradientColorKey(new Color(_colorKey.value[0], _colorKey.value[1], _colorKey.value[2], 1.0), _colorKey.time);
				colorKeys.push(colorKey);
			}
			var alphaKeys:Vector.<GradientAlphaKey> = new Vector.<GradientAlphaKey>();
			var alphaKey:GradientAlphaKey;
			var _alphaKeys:Array = colorGradientNode.alphaKeys;
			var _alphaKey:Object;
			for (i = 0, j = _alphaKeys.length; i < j; i++ ){
				_alphaKey = _alphaKeys[i];
				alphaKey = new GradientAlphaKey(_alphaKey.value, _alphaKey.time);
				alphaKeys.push(alphaKey);
			}
			_colorGradient.setKeys(colorKeys, alphaKeys);
			filter.colorGradient = _colorGradient;
			//positions
			var positions:Array = customProps.positions;
			var positionSize:Number = positions.size;
			var positionsValue:Number = positions.values;
			var position:Array;
			for (i = 0; i < positionSize; i++){
				position = positionsValue[i];
				_position.x = position[0];
				_position.y = position[1];
				_position.z = position[2];
				addPosition(_position);
			}
		}
		
		/**
		 * @inheritDoc
		 */
		override public function destroy(destroyChild:Boolean = true):void {
			if (destroyed)
				return;
			super.destroy(destroyChild);
			(_geometryFilter as LineFilter)._destroy();
			_position = null;
		}
	}
}