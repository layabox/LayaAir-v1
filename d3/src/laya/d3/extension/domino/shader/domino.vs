attribute vec4 a_Position;
attribute vec3 a_Normal;
attribute vec2 a_Texcoord0;
attribute vec4 a_Color;

uniform mat4 u_MvpMatrix;
uniform mat4 u_WorldMat;
uniform vec3 u_CameraPos;

varying vec2 v_Texcoord0;
varying vec4 v_Color;
varying vec3 v_PositionWorld;
varying vec3 v_Normal;
varying vec3 v_ViewDir;

void main()
{
	v_Texcoord0 = a_Texcoord0;
	v_Color = a_Color;
	
	gl_Position = u_MvpMatrix * a_Position;
	
	v_Normal = mat3(u_WorldMat) * a_Normal;
	v_PositionWorld = (u_WorldMat * a_Position).xyz;
	v_ViewDir = u_CameraPos - v_PositionWorld;
}