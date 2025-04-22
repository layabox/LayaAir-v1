package laya.d3.extension.lineRender 
{
	import laya.d3.graphics.VertexDeclaration;
	import laya.d3.graphics.VertexElement;
	import laya.d3.graphics.VertexElementFormat;
	import laya.d3.graphics.VertexElementUsage;
	/**
	 * ...
	 * @author 
	 */
	public class LineVertex 
	{
		private static const _vertexDeclaration1:VertexDeclaration = new VertexDeclaration(16, 
		[new VertexElement(0, VertexElementFormat.Vector3, VertexElementUsage.POSITION0),
		new VertexElement(12, VertexElementFormat.Single, VertexElementUsage.TEXTURECOORDINATE0Y)]);
		
		private static const _vertexDeclaration2:VertexDeclaration = new VertexDeclaration(12, 
		[new VertexElement(0, VertexElementFormat.Vector3, VertexElementUsage.OFFSETVECTOR)]);
		
		private static const _vertexDeclaration3:VertexDeclaration = new VertexDeclaration(8, 
		[new VertexElement(0, VertexElementFormat.Single, VertexElementUsage.TEXTURECOORDINATE0X),
		 new VertexElement(4, VertexElementFormat.Single, VertexElementUsage.TEXTURECOORDINATE0X1)]);
		
		public static function get vertexDeclaration1():VertexDeclaration
		{
			return _vertexDeclaration1;
		}
		
		public static function get vertexDeclaration2():VertexDeclaration
		{
			return _vertexDeclaration2;
		}
		
		public static function get vertexDeclaration3():VertexDeclaration
		{
			return _vertexDeclaration3;
		}
		
		public function get vertexDeclaration():VertexDeclaration
		{
			return _vertexDeclaration1;
		}
		
		public function LineVertex()
		{
			
		}
	}

}