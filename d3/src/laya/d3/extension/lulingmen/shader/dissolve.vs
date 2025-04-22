attribute vec4 a_Position;
attribute vec3 a_Normal;
attribute vec2 a_Texcoord0;

uniform mat4 u_MvpMatrix;

uniform vec4 u_MainTilingOffset;
uniform vec4 u_DissolveTilingOffset;
uniform vec4 u_MaskTilingOffset;

varying vec2 v_Texcoord0;
varying vec2 v_Texcoord1;
varying vec2 v_Texcoord2;

void main()
{
	v_Texcoord0 = a_Texcoord0;
	#ifdef MAINTILINGOFFSET
		v_Texcoord0 = (vec2(v_Texcoord0.x, v_Texcoord0.y - 1.0) * u_MainTilingOffset.xy) + u_MainTilingOffset.zw;
		v_Texcoord0 = vec2(v_Texcoord0.x, 1.0 + v_Texcoord0.y);
	#endif
	
	v_Texcoord1 = a_Texcoord0;
	#ifdef DISSOLVETILINGOFFSET
		v_Texcoord1 = (vec2(v_Texcoord1.x, v_Texcoord1.y - 1.0) * u_DissolveTilingOffset.xy) + u_DissolveTilingOffset.zw;
		v_Texcoord1 = vec2(v_Texcoord1.x, 1.0 + v_Texcoord1.y);
	#endif
	
	v_Texcoord2 = a_Texcoord0;
	
	gl_Position = u_MvpMatrix * a_Position;
}