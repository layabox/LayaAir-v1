package laya.d3.extension.domino 
{
	import laya.d3.graphics.IVertex;
	import laya.d3.graphics.VertexDeclaration;
	import laya.d3.graphics.VertexElement;
	import laya.d3.graphics.VertexElementFormat;
	import laya.d3.graphics.VertexElementUsage;
	/**
	 * <code>DominoVertex</code> 类用于创建多米诺顶点结构。
	 */
	public class DominoVertex implements IVertex
	{
		private static const _vertexDeclaration1:VertexDeclaration = new VertexDeclaration(16, 
		[new VertexElement(0, VertexElementFormat.Vector4, VertexElementUsage.COLOR0)]);
		
		private static const _vertexDeclaration2:VertexDeclaration = new VertexDeclaration(24,
		[new VertexElement(0, VertexElementFormat.Vector3, VertexElementUsage.POSITION0),
		new VertexElement(12, VertexElementFormat.Vector3, VertexElementUsage.NORMAL0)]);
		
		public static function get vertexDeclaration1():VertexDeclaration
		{
			return _vertexDeclaration1;
		}
		
		public static function get vertexDeclaration2():VertexDeclaration
		{
			return _vertexDeclaration2;
		}
		
		public function get vertexDeclaration():VertexDeclaration
		{
			return _vertexDeclaration1;
		}
		
		public function DominoVertex()
		{
			
		}
	}
}