package laya.data {
	import laya.data.MessageBase;
	import laya.utils.Byte;
	
	/**
	 * @private 消息工具类
	 */
	public class MessageUtils {
		private static var _msgDic:Object = {};
		private static var _desDic:Object = {};
		public static var msgID:int = 1;
		public static const IDSign:String = "__MID";
		public static const KEYSign:String = "KEY";
		private static var _inited:Boolean=false;
		
		public static function regMessage(clz:Class):void {
			if (!clz[IDSign]) {
				clz[IDSign] = msgID;
				_msgDic[msgID] = clz;
				_desDic[msgID] = clz[MessageBase.DES_SIGN];
				msgID++;
			}
		}
		
		
		public static function regMessageList(msgList:Array):void {
			if (!_inited) {
				_inited = true;
				MessageUtils.regMessage(DataMessage);
				MessageUtils.regMessage(ErrorMessage);
			}
			var i:int, len:int = msgList.length;
			for (i = 0; i < len; i++) {
				MessageUtils.regMessage(msgList[i]);
			}
		}
		
		public static function setMessagesKey(msgList:Array):void {
			var i:int, len:int = msgList.length;
			for (i = 0; i < len; i++) {
				setMessageKey(msgList[i]);
			}
		}
		
		public static function setMessageKey(msg:Class, key:String = null):void {
			if (!key) key = msg["name"];
			msg[KEYSign] = key;
		}
		
		public static function replaceClass(newClz:Class, oldClz:Class):void {
			var id:int;
			id = getClassID(oldClz);
			newClz[IDSign] = id;
			_msgDic[id] = newClz;
		}
		
		public static function getDesByObject(obj:Object):Array {
			return _desDic[getObjectClassID(obj)];
		}
		
		public static function getClassByID(id:int):Class {
			return _msgDic[id];
		}
		
		public static function getClassID(clz:Class):int {
			return clz[IDSign];
		}
		
		public static function getClassKey(clz:Class):String {
			return clz[KEYSign];
		}
		
		public static function getObjectClassID(obj:*):int {
			return getClassID(obj["__proto__"]["constructor"]);
		}
		
		public static function getObjectClass(obj:*):Class {
			return obj["__proto__"]["constructor"];
		}
		
		public static function readMessageFromByte(byte:Byte):* {
			var clz:* = getClassByID(byte.getInt32());
			//TODO:复用
			var rst:MessageBase = new clz();
			rst.read(byte);
			return rst;
		}
		
		public static function writeMessageToByte(byte:Byte, message:*):void {
			byte.endian = Byte.LITTLE_ENDIAN;
			byte.writeInt32(getObjectClassID(message));
			message.write(byte);
		}
	}
}