package laya.server.core
{
	/**
	 * 被对象池管理的类都应该实现该接口。
	 * 
	 * @author survivor
	 * 
	 */
	public interface IRecoverable
	{
		/**
		 * 被回收后执行
		 */
		function afterRecover():void;
		
		/**
		 * 在被重用前执行
		 */
		function beforeReuse():void;
	}
}