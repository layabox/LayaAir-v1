package laya.data {
	import laya.utils.Byte;
	import laya.utils.ClassUtils;
	
	/**
	 * @private 数据表解析
	 */
	public class DataDecoder {
		private static const _map:Object = {};
		public static const STRING:String = "string";
		public static const NUMBER:String = "number";
		public static const BOOLEAN:String = "boolean";
		public static const INT8:String = "int8";
		public static const UINT8:String = "uint8";
		public static const INT16:String = "int16";
		public static const UINT16:String = "uint16";
		public static const INT32:String = "int32";
		public static const UINT32:String = "uint32";
		public static const FLOAT32:String = "float32";
		public static const FLOAT64:String = "float64";
		
		public static function init():void {
			//_map[类型] = [代码中的类型,存储类型];
			_map["string"] = ["String", STRING];
			_map["number"] = ["Number", NUMBER];
			_map["int"] = ["Number", INT32];
			_map["int8"] = ["Number", INT8];
			_map["uint8"] = ["Number", UINT8];
			_map["int16"] = ["Number", INT16];
			_map["uint16"] = ["Number", UINT16];
			_map["int32"] = ["Number", INT32];
			_map["uint32"] = ["Number", UINT32];
			_map["float32"] = ["Number", FLOAT32];
			_map["float64"] = ["Number", FLOAT64];
			_map["boolean"] = ["Boolean", BOOLEAN];
			
			_map["s"] = ["String", STRING];
			_map["n"] = ["Number", NUMBER];
			_map["i"] = ["Number", INT32];
			_map["b"] = ["Boolean", BOOLEAN];
		}
		init();
		
		public static function getCodeType(type:String):String {
			if (_map[type]) return _map[type][0];
			return type;
		}
		
		public static function getStoreType(type:String):String {
			if (_map[type]) return _map[type][1];
			return STRING;
		}
		
		public static function readTypeFromByte(byte:Byte, type:String):* {
			var rst:*;
			switch (getStoreType(type)) {
			case STRING: 
				rst = byte.getUTFString();
				break;
			case NUMBER: 
				rst = byte.getFloat32();
				break;
			case INT8: 
				rst = byte.readByte();
				break;
			case UINT8: 
				rst = byte.getUint8();
				break;
			case INT16: 
				rst = byte.getInt16();
				break;
			case UINT16: 
				rst = byte.getUint16();
				break;
			case INT32: 
				rst = byte.getInt32();
				break;
			case UINT32: 
				rst = byte.getUint32();
				break;
			case FLOAT32: 
				rst = byte.getFloat32();
				break;
			case FLOAT64: 
				rst = byte.getFloat64();
				break;
			case BOOLEAN: 
				rst = byte.readByte() == 1;
				break;
			}
			return rst;
		}
		
		public static function decodeData(byte:Byte, name:String):Sheet {
			var className:String;
			className = byte.readUTFString();
			var dataType:String;
			dataType = byte.readUTFString();
			var typeLen:int = byte.getInt32();
			var i:int, len:int;
			len = typeLen;
			var keys:Array = [];
			for (i = 0; i < len; i++) {
				keys.push(byte.readUTFString());
			}
			var types:Array = [];
			for (i = 0; i < len; i++) {
				types.push(byte.readUTFString());
			}
			var dataLen:int = byte.getInt32();
			len = dataLen;
			
			var tData:Object;
			var j:int, jLen:int;
			jLen = typeLen;
			
			if (dataType == "objecttable") {
				//{key:[],data:{[id:[1,1,1,2],id:[1,1,1,2]}}
				var rst:* = {};
				rst.key = keys;
				var dataO:Object = {};
				rst.data = dataO;
				for (i = 0; i < len; i++) {
					tData = [];
					
					for (j = 0; j < jLen; j++) {
						tData[j] = readTypeFromByte(byte, types[j]);
					}
					
					dataO[tData[0]] = tData;
				}
				return rst;
			}
			var datas:Sheet = new Sheet(name);
			var classZ:Class = ClassUtils.getClass(className);
			
			for (i = 0; i < len; i++) {
				if (classZ) tData = new classZ();
				else tData = {};
				
				for (j = 0; j < jLen; j++) {
					tData[keys[j]] = readTypeFromByte(byte, types[j]);
				}
				
				datas.add(tData);
			}
			return datas;
		}
	}
}