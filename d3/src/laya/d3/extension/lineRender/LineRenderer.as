package laya.d3.extension.lineRender {
	
	import laya.d3.core.Sprite3D;
	import laya.d3.core.Transform3D;
	import laya.d3.core.render.BaseRender;
	import laya.d3.math.Matrix4x4;
	
	/**
	 * ...
	 * @author
	 */
	public class LineRenderer extends BaseRender {
		
		public function LineRenderer(owner:LineSprite3D) {
			super(owner);
		}
		
		override protected function _calculateBoundingBox():void {
			var minE:Float32Array = _boundingBox.min.elements;
			minE[0] = -Number.MAX_VALUE;
			minE[1] = -Number.MAX_VALUE;
			minE[2] = -Number.MAX_VALUE;
			var maxE:Float32Array = _boundingBox.min.elements;
			maxE[0] = Number.MAX_VALUE;
			maxE[1] = Number.MAX_VALUE;
			maxE[2] = Number.MAX_VALUE;
		}
		
		override protected function _calculateBoundingSphere():void {
			var centerE:Float32Array = _boundingSphere.center.elements;
			centerE[0] = 0;
			centerE[1] = 0;
			centerE[2] = 0;
			_boundingSphere.radius = Number.MAX_VALUE;
		}
		
		override public function _renderUpdate(projectionView:Matrix4x4):Boolean {
			var transform:Transform3D = _owner.transform;
			if (transform) {
				_setShaderValueMatrix4x4(Sprite3D.WORLDMATRIX, transform.worldMatrix);
				var projViewWorld:Matrix4x4 = _owner.getProjectionViewWorldMatrix(projectionView);
				_setShaderValueMatrix4x4(Sprite3D.MVPMATRIX, projViewWorld);
			} else {
				_setShaderValueMatrix4x4(Sprite3D.WORLDMATRIX, Matrix4x4.DEFAULT);
				_setShaderValueMatrix4x4(Sprite3D.MVPMATRIX, projectionView);
			}
			return true;
		}
	
	}

}