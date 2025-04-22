package laya.data {
	import laya.utils.Byte;
	
	/**
	 * 消息接口
	 */
	public interface IMessage {
		function read(byte:Byte):Boolean;
		function write(byte:Byte):Boolean;
		function clear():void;
	}
}