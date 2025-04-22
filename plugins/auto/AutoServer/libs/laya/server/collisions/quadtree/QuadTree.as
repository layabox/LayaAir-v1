/*[IF-FLASH]*/
package laya.server.collisions.quadtree
{
	public class QuadTree
	{
		/**
		 * 四叉树的边缘区域 
		 */
		private var bounds:Rect;
		
		/**
		 * 四叉树的层级，从0至max_levels
		 */
		private var level:int;

		/**
		 * 创建矩形边界为bounds，拥有最大层级max_levels的四叉树。bounds实际上只需要设置width和height，x与y为0
		 * 
		 * @param bounds
		 * @param max_levels
		 * 
		 */
		public function QuadTree(bounds:Rect, max_levels:int)
		{
		}
		
		/**
		 * 把指定的rect添加进四叉树
		 * @param rect
		 * 
		 */
		public function addObject(rect:Rect):void
		{
			
		}
		
		/**
		 * 把指定rects数组中的所有的rect添加进四叉树内
		 * 
		 * @param rects
		 * 
		 */
		public function addObjects(rects:Array):void
		{
			
		}
		
		/**
		 * 检测指定rect的碰撞状况。发生碰撞时collisionCallback会被触发。collisionCallback接受两个参数，第一个参数恒定为当前的rect，第二个参数是与之发生碰撞的rect对象。函数签名是 function collisionCallback(a:Rect, b:Rect);
		 * 
		 * @param rect
		 * @param collisionCallback
		 * 
		 */
		public function checkCollision(rect:Rect, collisionCallback:Function):void
		{
			
		}
		
		/**
		 * 清空四叉树
		 */
		public function clear():void
		{
			
		}
		
		/**
		 * 获取树下的rect（不包含子树）
		 */
		public function getObjects():void
		{
			
		}
		
		/**
		 * 获取与rect发生碰撞的所有Rect集合
		 * 
		 * @param rect
		 * @return 
		 * 
		 */
		public function retrieve(rect:Rect):Array
		{
			return null;
		}
		
		/**
		 * 从树中移除指定rect
		 * @param rect
		 */
		public function removeObject(rect:Rect):void
		{
			
		}
		
		/**
		 * 更新指定rect所属的树
		 */
		public function updateObject(rect:Rect):void
		{
			
		}
		
		/**
		 * 为指定rect添加碰撞回调函数，只需要指定一次，在没帧调用checkCollisions()之后，如果指定的rect发生了碰撞，collisionCallback会被自动调用。collisionCallback接受两个参数，第一个参数恒定为当前的rect，第二个参数是与之发生碰撞的rect对象。
		 * 
		 * @param rect
		 * @param collisionCallback	function collisionCallback(a:Rect, b:Rect);
		 * 
		 */
		public function addCollisionCallback(rect:Rect, collisionCallback:Function):void
		{
			
		}

		/**
		 * 移除addCollisionCallback()添加的碰撞回掉函数
		 * 
		 * @param rect
		 */
		public function removeCollisionCallback(rect:Rect):void
		{
			
		}
		
		/**
		 * 检查树内发生的所有碰撞，自动触发有addCollisionCallback()注册的回调函数。
		 */
		public function checkCollisions():void
		{
			
		}
		
		public static function enable():void
		{
			
		}
	}
}