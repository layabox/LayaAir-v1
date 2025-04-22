package laya.d3.animation {
	import laya.d3.component.Animator;
	import laya.d3.core.Avatar;
	import laya.d3.core.IClone;
	import laya.d3.core.MeshSprite3D;
	import laya.d3.core.RenderableSprite3D;
	import laya.d3.core.SkinnedMeshRender;
	import laya.d3.core.SkinnedMeshSprite3D;
	import laya.d3.core.Sprite3D;
	import laya.d3.core.Transform3D;
	import laya.d3.core.material.BaseMaterial;
	import laya.d3.core.particleShuriKen.ShuriKenParticle3D;
	import laya.d3.math.Matrix4x4;
	import laya.d3.math.Quaternion;
	import laya.d3.math.Vector3;
	import laya.d3.math.Vector4;
	import laya.d3.utils.Utils3D;
	
	/**
	 * <code>BoneNode</code> 类用于实现骨骼节点。
	 */
	public class AnimationNode implements IClone {
		/**@private */
		private static var _propertyIDCounter:int = 0;
		/**@private */
		public static var _propertyIndexDic:Object = {};
		/**@private */
		public static var _propertySetFuncs:Array = [];
		/**@private */
		public static var _propertyGetFuncs:Array = [];
		
		/**
		 *@private
		 */
		public static function __init__():void {
			registerAnimationNodeProperty("localPosition", _getLocalPosition, _setLocalPosition);
			registerAnimationNodeProperty("localRotation", _getLocalRotation, _setLocalRotation);
			registerAnimationNodeProperty("localScale", _getLocalScale, _setLocalScale);
			registerAnimationNodeProperty("localRotationEuler", _getLocalRotationEuler, _setLocalRotationEuler);
			registerAnimationNodeProperty("particleRender.sharedMaterial.tintColor", _getParticleRenderSharedMaterialTintColor, _setParticleRenderSharedMaterialTintColor);
			registerAnimationNodeProperty("meshRender.sharedMaterial.tilingOffset", _getMeshRenderSharedMaterialTilingOffset, _setMeshRenderSharedMaterialTilingOffset);
			registerAnimationNodeProperty("meshRender.sharedMaterial.albedoColor", _getMeshRenderSharedMaterialAlbedo, _setMeshRenderSharedMaterialAlbedo);
			registerAnimationNodeProperty("skinnedMeshRender.sharedMaterial.tilingOffset", _getSkinnedMeshRenderSharedMaterialTilingOffset, _setSkinnedMeshRenderSharedMaterialTilingOffset);
			registerAnimationNodeProperty("skinnedMeshRender.sharedMaterial.albedoColor", _getSkinnedMeshRenderSharedMaterialAlbedo, _setSkinnedMeshRenderSharedMaterialAlbedo);
			
			registerAnimationNodeProperty("meshRender.sharedMaterial.albedo", _getMeshRenderSharedMaterialAlbedo, _setMeshRenderSharedMaterialAlbedo);//兼容
			registerAnimationNodeProperty("skinnedMeshRender.sharedMaterial.albedo", _getSkinnedMeshRenderSharedMaterialAlbedo, _setSkinnedMeshRenderSharedMaterialAlbedo);//兼容
			
			//llm
			registerAnimationNodeProperty("meshRender.sharedMaterial.intensity", _getMeshRenderSharedMaterialIntensity, _setMeshRenderSharedMaterialIntensity);
			registerAnimationNodeProperty("meshRender.sharedMaterial.alpha", _getMeshRenderSharedMaterialAlpha, _setMeshRenderSharedMaterialAlpha);
			registerAnimationNodeProperty("meshRender.sharedMaterial.alphaColor", _getMeshRenderSharedMaterialAlphaColor, _setMeshRenderSharedMaterialAlphaColor);
			registerAnimationNodeProperty("meshRender.sharedMaterial.baseColor", _getMeshRenderSharedMaterialBaseColor, _setMeshRenderSharedMaterialBaseColor);
			registerAnimationNodeProperty("meshRender.sharedMaterial.dissolve", _getMeshRenderSharedMaterialDissolve, _setMeshRenderSharedMaterialDissolve);
			registerAnimationNodeProperty("meshRender.sharedMaterial.dissolveSpeed", _getMeshRenderSharedMaterialDissolveSpeed, _setMeshRenderSharedMaterialDissolveSpeed);
			registerAnimationNodeProperty("meshRender.sharedMaterial.mMultiplier", _getMeshRenderSharedMaterialMMultiplier, _setMeshRenderSharedMaterialMMultiplier);
			
			registerAnimationNodeProperty("meshRender.sharedMaterial.baseScrollSpeedX", _getMeshRenderSharedMaterialBaseScrollSpeedX, _setMeshRenderSharedMaterialBaseScrollSpeedX);
			registerAnimationNodeProperty("meshRender.sharedMaterial.baseScrollSpeedY", _getMeshRenderSharedMaterialBaseScrollSpeedY, _setMeshRenderSharedMaterialBaseScrollSpeedY);
			registerAnimationNodeProperty("meshRender.sharedMaterial.secondScrollSpeedX", _getMeshRenderSharedMaterialSecondScrollSpeedX, _setMeshRenderSharedMaterialSecondScrollSpeedX);
			registerAnimationNodeProperty("meshRender.sharedMaterial.secondScrollSpeedY", _getMeshRenderSharedMaterialSecondScrollSpeedY, _setMeshRenderSharedMaterialSecondScrollSpeedY);
			
			registerAnimationNodeProperty("meshRender.sharedMaterial.detailTilingOffset", _getMeshRenderSharedMaterialDetailTilingOffset, _setMeshRenderSharedMaterialDetailTilingOffset);
			registerAnimationNodeProperty("meshRender.sharedMaterial.dissolveTilingOffset", _getMeshRenderSharedMaterialDissolveTilingOffset, _setMeshRenderSharedMaterialDissolveTilingOffset);
			registerAnimationNodeProperty("meshRender.sharedMaterial.maskTilingOffset", _getMeshRenderSharedMaterialMaskTilingOffset, _setMeshRenderSharedMaterialMaskTilingOffset);
		}
		
		/**
		 *注册Animator动画。
		 */
		public static function registerAnimationNodeProperty(propertyName:String, getFunc:Function, setFunc:Function):void {
			if (_propertyIndexDic[propertyName]) {
				throw new Error("AnimationNode: this propertyName has registered.");
			} else {
				_propertyIndexDic[propertyName] = _propertyIDCounter;
				_propertyGetFuncs[_propertyIDCounter] = getFunc;
				_propertySetFuncs[_propertyIDCounter] = setFunc;
				_propertyIDCounter++;
			}
		}
		
		/**@private */
		private var _childs:Vector.<AnimationNode>;
		
		/**@private */
		public var _parent:AnimationNode;
		/**@private [只读]*/
		public var transform:AnimationTransform3D;
		
		/**节点名称。 */
		public var name:String;
		
		/**
		 * @private
		 */
		private static function _getLocalPosition(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			if (animationNode)
				return animationNode.transform.getLocalPosition();
			else
				return sprite3D._transform.localPosition.elements;
		}
		
		/**
		 * @private
		 */
		private static function _setLocalPosition(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			if (animationNode) {
				animationNode.transform.setLocalPosition(value);
			} else {
				var spriteTransform:Transform3D = sprite3D._transform;
				var localPosition:Vector3 = spriteTransform.localPosition;
				localPosition.elements = value;
				spriteTransform.localPosition = localPosition;
			}
		}
		
		/**
		 * @private
		 */
		private static function _getLocalRotation(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			if (animationNode)
				return animationNode.transform.getLocalRotation();
			else
				return sprite3D._transform.localRotation.elements;
		}
		
		/**
		 * @private
		 */
		private static function _setLocalRotation(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			if (animationNode) {
				animationNode.transform.setLocalRotation(value);
			} else {
				var spriteTransform:Transform3D = sprite3D._transform;
				var localRotation:Quaternion = spriteTransform.localRotation;
				localRotation.elements = value;
				spriteTransform.localRotation = localRotation;
			}
		}
		
		/**
		 * @private
		 */
		private static function _getLocalScale(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			if (animationNode)
				return animationNode.transform.getLocalScale();
			else
				return sprite3D._transform.localScale.elements;
		}
		
		/**
		 * @private
		 */
		private static function _setLocalScale(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			if (animationNode) {
				animationNode.transform.setLocalScale(value);
			} else {
				var spriteTransform:Transform3D = sprite3D._transform;
				var localScale:Vector3 = spriteTransform.localScale;
				localScale.elements = value;
				spriteTransform.localScale = localScale;
			}
		}
		
		/**
		 * @private
		 */
		private static function _getLocalRotationEuler(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			if (animationNode)
				return animationNode.transform.getLocalRotationEuler();
			else
				return sprite3D._transform.localRotationEuler.elements;
		}
		
		/**
		 * @private
		 */
		private static function _setLocalRotationEuler(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			if (animationNode) {
				animationNode.transform.setLocalRotationEuler(value);
			} else {
				var spriteTransform:Transform3D = sprite3D._transform;
				var localRotationEuler:Vector3 = spriteTransform.localRotationEuler;
				localRotationEuler.elements = value;
				spriteTransform.localRotationEuler = localRotationEuler;
			}
		}
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialTilingOffset(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;//以下类似处理均为防止AnimationNode无关联实体节点
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.tilingOffset.elements;
				} else
					return null;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.tilingOffset.elements;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialTilingOffset(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*, tilingOffset:Vector4;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					tilingOffset = material.tilingOffset;
					tilingOffset.elements = value;
					material.tilingOffset = tilingOffset;
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				tilingOffset = material.tilingOffset;
				tilingOffset.elements = value;
				material.tilingOffset = tilingOffset;
			}
		}
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialAlbedo(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.albedoColor.elements;
				} else
					return null;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.albedoColor.elements;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialAlbedo(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*, albedo:Vector4;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					albedo = material.albedoColor;
					albedo.elements = value;
					material.albedoColor = albedo;
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				albedo = material.albedoColor;
				albedo.elements = value;
				material.albedoColor = albedo;
			}
		}
		
		/**
		 * @private
		 */
		private static function _getSkinnedMeshRenderSharedMaterialTilingOffset(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as SkinnedMeshSprite3D).skinnedMeshRender.sharedMaterial;
					return material.tilingOffset.elements;
				} else
					return null;
			} else {
				material = (sprite3D as SkinnedMeshSprite3D).skinnedMeshRender.sharedMaterial;
				return material.tilingOffset.elements;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setSkinnedMeshRenderSharedMaterialTilingOffset(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*, tilingOffset:Vector4;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as SkinnedMeshSprite3D).skinnedMeshRender.material;
					tilingOffset = material.tilingOffset;
					tilingOffset.elements = value;
					material.tilingOffset = tilingOffset;
				}
			} else {
				material = (sprite3D as SkinnedMeshSprite3D).skinnedMeshRender.material;
				tilingOffset = material.tilingOffset;
				tilingOffset.elements = value;
				material.tilingOffset = tilingOffset;
			}
		}
		
		/**
		 * @private
		 */
		private static function _getSkinnedMeshRenderSharedMaterialAlbedo(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as SkinnedMeshSprite3D).skinnedMeshRender.sharedMaterial;
					return material.albedoColor.elements;
				} else {
					return null;
				}
			} else {
				material = (sprite3D as SkinnedMeshSprite3D).skinnedMeshRender.sharedMaterial;
				return material.albedoColor.elements;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setSkinnedMeshRenderSharedMaterialAlbedo(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*, albedo:Vector4;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as SkinnedMeshSprite3D).skinnedMeshRender.material;
					albedo = material.albedoColor;
					albedo.elements = value;
					material.albedoColor = albedo;
				}
			} else {
				material = (sprite3D as SkinnedMeshSprite3D).skinnedMeshRender.material;
				albedo = material.albedoColor;
				albedo.elements = value;
				material.albedoColor = albedo;
			}
		}
		
		/**
		 * @private
		 */
		private static function _getParticleRenderSharedMaterialTintColor(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as ShuriKenParticle3D).particleRender.sharedMaterial;
					return material.tintColor.elements;
				} else
					return null;
			} else {
				material = (sprite3D as ShuriKenParticle3D).particleRender.sharedMaterial;
				return material.tintColor.elements;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setParticleRenderSharedMaterialTintColor(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*, tintColor:Vector4;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as ShuriKenParticle3D).particleRender.material;
					tintColor = material.tintColor;
					tintColor.elements = value;
					material.tintColor = tintColor;
				}
			} else {
				material = (sprite3D as ShuriKenParticle3D).particleRender.material;
				tintColor = material.tintColor;
				tintColor.elements = value;
				material.tintColor = tintColor;
			}
		}
		
		//---------------------------------------------------llm---------------------------------------------------------------------------
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialAlphaColor(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.alphaColor.elements;
				} else
					return null;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.alphaColor.elements;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialAlphaColor(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*, alphaColor:Vector4;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					alphaColor = material.alphaColor;
					alphaColor.elements = value;
					material.alphaColor = alphaColor;
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				alphaColor = material.alphaColor;
				alphaColor.elements = value;
				material.alphaColor = alphaColor;
			}
		}
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialBaseColor(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.baseColor.elements;
				} else
					return null;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.baseColor.elements;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialBaseColor(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*, baseColor:Vector4;
			if (animationNode) { 
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					baseColor = material.baseColor;
					baseColor.elements = value;
					material.baseColor = baseColor;
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				baseColor = material.baseColor;
				baseColor.elements = value;
				material.baseColor = baseColor;
			}
		}
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialDissolve(animationNode:AnimationNode, sprite3D:Sprite3D):Number {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.dissolve;
				} else
					return 0.0;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.dissolve;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialDissolve(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					material.dissolve = value[0];
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				material.dissolve = value[0];
			}
		}
		
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialDissolveSpeed(animationNode:AnimationNode, sprite3D:Sprite3D):Number {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.dissolveSpeed;
				} else
					return 0.0;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.dissolveSpeed;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialDissolveSpeed(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					material.dissolveSpeed = value[0];
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				material.dissolveSpeed = value[0];
			}
		}
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialMMultiplier(animationNode:AnimationNode, sprite3D:Sprite3D):Number {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.mMultiplier;
				} else
					return 0.0;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.mMultiplier;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialMMultiplier(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					material.mMultiplier = value[0];
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				material.mMultiplier = value[0];
			}
		}
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialBaseScrollSpeedX(animationNode:AnimationNode, sprite3D:Sprite3D):Number {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.baseScrollSpeedX;
				} else
					return 0.0;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.baseScrollSpeedX;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialBaseScrollSpeedX(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					material.baseScrollSpeedX = value[0];
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				material.baseScrollSpeedX = value[0];
			}
		}
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialBaseScrollSpeedY(animationNode:AnimationNode, sprite3D:Sprite3D):Number {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.baseScrollSpeedY;
				} else
					return 0.0;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.baseScrollSpeedY;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialBaseScrollSpeedY(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					material.baseScrollSpeedY = value[0];
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				material.baseScrollSpeedY = value[0];
			}
		}
		
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialSecondScrollSpeedX(animationNode:AnimationNode, sprite3D:Sprite3D):Number {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.secondScrollSpeedX;
				} else
					return 0.0;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.secondScrollSpeedX;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialSecondScrollSpeedX(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					material.secondScrollSpeedX = value[0];
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				material.secondScrollSpeedX = value[0];
			}
		}
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialSecondScrollSpeedY(animationNode:AnimationNode, sprite3D:Sprite3D):Number {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.secondScrollSpeedY;
				} else
					return 0.0;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.secondScrollSpeedY;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialSecondScrollSpeedY(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					material.secondScrollSpeedY = value[0];
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				material.secondScrollSpeedY = value[0];
			}
		}
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialAlpha(animationNode:AnimationNode, sprite3D:Sprite3D):Number {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.alpha;
				} else
					return 0.0;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.alpha;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialAlpha(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					material.alpha = value[0];
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				material.alpha = value[0];
			}
		}
		
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialIntensity(animationNode:AnimationNode, sprite3D:Sprite3D):Number {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.intensity;
				} else
					return 0.0;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.intensity;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialIntensity(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					material.intensity = value[0];
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				material.intensity = value[0];
			}
		}
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialDetailTilingOffset(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.detailTilingOffset.elements;
				} else
					return null;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.detailTilingOffset.elements;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialDetailTilingOffset(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*, detailTilingOffset:Vector4;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					detailTilingOffset = material.detailTilingOffset;
					detailTilingOffset.elements = value;
					material.detailTilingOffset = detailTilingOffset;
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				detailTilingOffset = material.detailTilingOffset;
				detailTilingOffset.elements = value;
				material.detailTilingOffset = detailTilingOffset;
			}
		}
		
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialDissolveTilingOffset(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.dissolveTilingOffset.elements;
				} else
					return null;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.dissolveTilingOffset.elements;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialDissolveTilingOffset(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*, dissolveTilingOffset:Vector4;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					dissolveTilingOffset = material.dissolveTilingOffset;
					dissolveTilingOffset.elements = value;
					material.dissolveTilingOffset = dissolveTilingOffset;
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				dissolveTilingOffset = material.dissolveTilingOffset;
				dissolveTilingOffset.elements = value;
				material.dissolveTilingOffset = dissolveTilingOffset;
			}
		}
		
		
		/**
		 * @private
		 */
		private static function _getMeshRenderSharedMaterialMaskTilingOffset(animationNode:AnimationNode, sprite3D:Sprite3D):Float32Array {
			var material:*;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.sharedMaterial;
					return material.maskTilingOffset.elements;
				} else
					return null;
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.sharedMaterial;
				return material.maskTilingOffset.elements;
			}
		}
		
		/**
		 * @private
		 */
		private static function _setMeshRenderSharedMaterialMaskTilingOffset(animationNode:AnimationNode, sprite3D:Sprite3D, value:Float32Array):void {
			var material:*, maskTilingOffset:Vector4;
			if (animationNode) {
				var entity:Transform3D = animationNode.transform._entity;
				if (entity) {
					material = (entity.owner as MeshSprite3D).meshRender.material;
					maskTilingOffset = material.maskTilingOffset;
					maskTilingOffset.elements = value;
					material.maskTilingOffset = maskTilingOffset;
				}
			} else {
				material = (sprite3D as MeshSprite3D).meshRender.material;
				maskTilingOffset = material.maskTilingOffset;
				maskTilingOffset.elements = value;
				material.maskTilingOffset = maskTilingOffset;
			}
		}
		
		//---------------------------------------------------llm---------------------------------------------------------------------------
		
		/**
		 * 创建一个新的 <code>BoneNode</code> 实例。
		 */
		public function AnimationNode() {
			/*[DISABLE-ADD-VARIABLE-DEFAULT-VALUE]*/
			_childs = new Vector.<AnimationNode>();
			transform = new AnimationTransform3D(this);
		}
		
		/**
		 * 添加子节点。
		 * @param	child  子节点。
		 */
		public function addChild(child:AnimationNode):void {
			child._parent = this;
			child.transform.setParent(transform);
			_childs.push(child);
		}
		
		/**
		 * 移除子节点。
		 * @param	child 子节点。
		 */
		public function removeChild(child:AnimationNode):void {
			var index:int = _childs.indexOf(child);
			(index !== -1) && (_childs.splice(index, 1));
		}
		
		/**
		 * 根据名字获取子节点。
		 * @param	name 名字。
		 */
		public function getChildByName(name:String):AnimationNode {
			for (var i:int = 0, n:int = _childs.length; i < n; i++) {
				var child:AnimationNode = _childs[i];
				if (child.name === name)
					return child;
			}
			return null;
		}
		
		/**
		 * 根据索引获取子节点。
		 * @param	index 索引。
		 */
		public function getChildByIndex(index:int):AnimationNode {
			return _childs[index];
		}
		
		/**
		 * 获取子节点的个数。
		 */
		public function getChildCount():int {
			return _childs.length;
		}
		
		/**
		 * 克隆。
		 * @param	destObject 克隆源。
		 */
		public function cloneTo(destObject:*):void {
			var destNode:AnimationNode = destObject as AnimationNode;
			destNode.name = name;
			for (var i:int = 0, n:int = _childs.length; i < n; i++) {
				var child:AnimationNode = _childs[i];
				var destChild:AnimationNode = child.clone();
				destNode.addChild(destChild);
				var transform:AnimationTransform3D = child.transform;
				var destTransform:AnimationTransform3D = destChild.transform;
				destTransform.setLocalPosition(transform.getLocalPosition());//浅拷贝
				destTransform.setLocalRotation(transform.getLocalRotation());//浅拷贝
				destTransform.setLocalScale(transform.getLocalScale());//浅拷贝
				destTransform._localRotationEuler = transform._localRotationEuler;//浅拷贝
				destTransform._setWorldMatrixIgnoreUpdate(transform.getWorldMatrix());//浅拷贝
			}
		}
		
		/**
		 * 克隆。
		 * @return	 克隆副本。
		 */
		public function clone():* {
			var dest:AnimationNode = __JS__("new this.constructor()");
			cloneTo(dest);
			return dest;
		}
	
	}

}