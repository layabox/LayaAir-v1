/*[IF-FLASH]*/
package laya.server.collisions.quadtree
{
	public class Rect
	{
		public var filterGroup:int;
		public var filterCategory:int;
		public var filterMask:int;
		
		public var x:int;
		public var y:int;
		public var width:int;
		public var height:int;
		
		public var owner:*;
		
		public function Rect(x:int, y:int, w:int, h:int)
		{
		}
		
		public function intersect(rect:Rect):Boolean
		{
			return false;
		}
		
		public function contains(rect:Rect):Boolean
		{
			return false;
		}

		public function setPosition(x:Number, y:Number):void
		{
			
		}

		public function setSize(width:Number, height:Number):void
		{
			
		}
		
		public function getHeight():int
		{
			return 0;
		}
		
		public function getWidth():int
		{
			return 0;
		}
	}
}