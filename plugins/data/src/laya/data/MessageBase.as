package laya.data {
	import laya.utils.Byte;
	
	/**
	 * 消息基类，提供自动序列化和反序列化消息功能
	 * 消息的定义用类的定义方式替代，使用起来简单，并且有代码提示
	 */
	public class MessageBase implements IMessage {
		/**@private */
		public static const DES_SIGN:String = "DES";
		
		/**占用1个字节，值为true和false*/
		public static const BOOLEAN:int = 0;
		/**占用1个字节，值为-128~127*/
		public static const INT8:int = 1;
		/**占用1个字节，值为0~255*/
		public static const UINT8:int = 2;
		/**占用2个字节，值为-32,768~32,767*/
		public static const INT16:int = 3;
		/**占用2个字节，值为0~65,535*/
		public static const UINT16:int = 4;
		/**占用4个字节，值为-2,147,483,648~2,147,483,647*/
		public static const INT32:int = 5;
		/**占用4个字节，值为0~4,294,967,295*/
		public static const UINT32:int = 6;
		/**占用4个字节，存储小数*/
		public static const FLOAT32:int = 7;
		/**占用8个字节，存储比较大的小数*/
		public static const FLOAT64:int = 8;
		/**字符串，根据内容多少动态占用内存*/
		public static const STRING:int = 9;
		/**数组类型*/
		public static const ARRAY:int = 10;
		/**Class类型*/
		public static const CLASS:int = 11;
		/**动态Class类型，根据具体消息类的getClass函数确定Class类型*/
		public static const DYNAMIC:int = 12;
		
		/**@private */
		public function get msgId():int {
			return MessageUtils.getObjectClassID(this);
		}
		
		/**@private */
		public function get msgKey():String {
			return MessageUtils.getObjectClass(this)[MessageUtils.KEYSign];
		}
		
		/**
		 * @private
		 */
		public function read(byte:Byte):Boolean {
			var des:Array = MessageUtils.getDesByObject(this);
			var i:int, len:int;
			len = des.length;
			var tArr:Array;
			for (i = 0; i < len; i++) {
				tArr = des[i];
				this[tArr[0]] = _readObj(byte, tArr[1], tArr[2]);
			}
			//for (i = 0; i < len; i += 2)
			//{
			//this[des[i]] = _readObj(byte, des[i+1]);
			//}
			return true;
		}
		
		/**
		 * @private
		 */
		public function write(byte:Byte):Boolean {
			writeByDes(this, byte, MessageUtils.getDesByObject(this));
			return true;
		}
		
		/**
		 * @private
		 */
		public function clear():void {
		}
		
		/**
		 * @private
		 */
		private function _readObj(byte:Byte, type:int, des:*):* {
			var v:*;
			if (type is Array) return readArray(byte, type as Array);
			if (type is Function) return readClass(byte, type as Class);
			switch (type) {
			case BOOLEAN: 
				v = byte.getUint8() != 0;
				break;
			case INT8: 
				v = byte.readByte();
				break;
			case UINT8: 
				v = byte.getUint8();
				break;
			case INT16: 
				v = byte.getInt16();
				break;
			case UINT16: 
				v = byte.getUint16();
				break;
			case INT32: 
				v = byte.getInt32();
				break;
			case UINT32: 
				v = byte.getUint32();
				break;
			case FLOAT32: 
				v = byte.getFloat32();
				break;
			case FLOAT64: 
				v = byte.getFloat64();
				break;
			case STRING: 
				v = byte.readUTFString();
				break;
			case CLASS: 
				v = readClass(byte, des);
				break;
			case DYNAMIC: 
				v = readClass(byte, this["getClass"]());
				break;
			case ARRAY: 
				v = readArray(byte, des);
				break;
			}
			return v;
		}
		
		/**
		 * @private
		 */
		public function readClass(byte:Byte, Clz:Class):* {
			Clz = MessageUtils.getClassByID(MessageUtils.getClassID(Clz));
			var rst:MessageBase = new Clz() as MessageBase;
			rst.read(byte);
			return rst;
		}
		
		/**
		 * @private
		 */
		public function readArray(byte:Byte, des:Array):Array {
			var rst:Array;
			var i:int, len:int;
			len = byte.getInt32();
			if (len < 0) return null;
			rst = [];
			rst.length = len;
			for (i = 0; i < len; i++) {
				rst[i] = _readObj(byte, des[0], des[1]);
			}
			return rst;
		}
		
		/**
		 * @private
		 */
		public function writeByDes(data:MessageBase, byte:Byte, des:Array):void {
			var i:int, len:int;
			len = des.length;
			var tArr:Array;
			for (i = 0; i < len; i++) {
				tArr = des[i];
				var v:* = data[tArr[0]];
				_writeObj(v, byte, tArr[1], tArr[2]);
			}
			//for (i = 0; i < len; i += 2)
			//{
			//_writeObj(data[des[i]], byte, des[i+1]);
			//}
		}
		
		private function _writeObj(v:*, byte:Byte, type:int, des:*):void {
			if (type is Array) {
				writeArray(v, byte, type as Array);
				return;
			}
			if (type is Function) {
				writeClass(v, byte, type as Class);
				return;
			}
			switch (type) {
			case BOOLEAN: 
				byte.writeUint8(v ? 1 : 0);
				break;
			case INT8: 
				byte.writeByte(v);
				break;
			case UINT8: 
				byte.writeUint8(v);
				break;
			case INT16: 
				byte.writeInt16(v);
				break;
			case UINT16: 
				byte.writeUint16(v);
				break;
			case INT32: 
				byte.writeInt32(v);
				break;
			case UINT32: 
				byte.writeUint32(v);
				break;
			case FLOAT32: 
				byte.writeFloat32(v);
				break;
			case FLOAT64: 
				byte.writeFloat64(v);
				break;
			case STRING: 
				byte.writeUTFString(v);
				break;
			case CLASS: 
				writeClass(v, byte, des);
				break;
			case DYNAMIC: 
				writeClass(v, byte, this["getClass"]());
				break;
			case ARRAY: 
				writeArray(v, byte, des);
				break;
			}
		}
		
		/**
		 * @private
		 */
		public function writeClass(data:MessageBase, byte:Byte, clz:Class):void {
			data.writeByDes(data, byte, clz[DES_SIGN]);
		}
		
		/**
		 * @private
		 */
		public function writeArray(arr:Array, byte:Byte, des:Array):void {
			if (!arr) byte.writeInt32(-1);
			var i:int, len:int;
			len = arr.length;
			byte.writeInt32(len);
			for (i = 0; i < len; i++) {
				_writeObj(arr[i], byte, des[0], des[1]);
			}
		}
	}
}