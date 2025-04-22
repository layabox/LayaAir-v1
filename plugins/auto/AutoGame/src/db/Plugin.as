package db 
{
	import laya.utils.ClassUtils;
	import laya.game.Avatar1;
	import laya.game.Avatar2;
	import laya.game.Avatar3;
	import laya.game.Role;
	import laya.game.Path;
	
	public class Plugin {
		ClassUtils.regClass("Avatar1", Avatar1);
		ClassUtils.regClass("Avatar2", Avatar2);
		ClassUtils.regClass("Avatar3", Avatar3);
		ClassUtils.regClass("Role", Role);
		ClassUtils.regClass("Path", Path);
	}
}