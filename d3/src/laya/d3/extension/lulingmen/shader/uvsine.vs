attribute vec4 a_Position;
attribute vec3 a_Normal;
attribute vec2 a_Texcoord0;
attribute vec4 a_Color;

uniform mat4 u_MvpMatrix;
uniform float u_Time;
uniform float u_BaseScrollSpeedX;
uniform float u_BaseScrollSpeedY;
uniform float u_SecondScrollSpeedX;
uniform float u_SecondScrollSpeedY;

uniform vec4 u_TilingOffset1;
uniform vec4 u_TilingOffset2;

varying vec2 v_Texcoord0;
varying vec2 v_Texcoord1;
varying vec4 v_Color;

void main()
{
	v_Texcoord0 = a_Texcoord0;
	#ifdef TILINGOFFSET1
		v_Texcoord0 = (vec2(v_Texcoord0.x, v_Texcoord0.y - 1.0) * u_TilingOffset1.xy) + u_TilingOffset1.zw;
		v_Texcoord0 = vec2(v_Texcoord0.x, 1.0 + v_Texcoord0.y);
	#endif
	
	v_Texcoord1 = a_Texcoord0;
	#ifdef TILINGOFFSET2
		v_Texcoord1 = (vec2(v_Texcoord1.x, v_Texcoord1.y - 1.0) * u_TilingOffset2.xy) + u_TilingOffset2.zw;
		v_Texcoord1 = vec2(v_Texcoord1.x, 1.0 + v_Texcoord1.y);
	#endif
	
	v_Texcoord0 = v_Texcoord0 + vec2(fract(u_BaseScrollSpeedX * u_Time / 20.0), fract(-u_BaseScrollSpeedY * u_Time));
	v_Texcoord1 = v_Texcoord1 + vec2(fract(u_SecondScrollSpeedX * u_Time / 20.0), fract(-u_SecondScrollSpeedY * u_Time));
	
	v_Color = vec4(1.0);
	#ifdef COLOR
		v_Color = a_Color;
	#endif
	
	gl_Position = u_MvpMatrix * a_Position;
}