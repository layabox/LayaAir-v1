package {
	
	/**
	 * ...
	 * @author leo
	 */
	public class NodeFile {
		private static var _fs:* = __JS__("require('fs')");
		private static var _readline:* = __JS__("require('readline')");
		
		public function NodeFile() {
			
		}
		
		private function test():void {
			var rli:* = _readline.createInterface({input: _fs.createReadStream("fps.txt")});
			
			rli.on("line", function (line:String):void {
				trace("line:", line);
			});
			
			rli.on("close", function ():void {
				trace("line end:");
				_fs.appendFile("fps.txt", "iam.", function (err:Error):void {
					if (err) {
						trace(err);
					}
				});
			});
		}
		
		public static function readFile(filePath:String):String {
			if (!filePath) return null;
			
			return _fs.readFileSync(filePath);
		}
		
		public static function appendFile(filePath:String, appendStr:String, cb:Function = null):void {
			if (!filePath || !appendStr) return;
			
			_fs.appendFile(filePath, appendStr, function (err:Error):void {
				if (err) {
					console.error(err);
				}
				cb && cb();
			});
		}
		
		public static function writeFile(filePath:String, str:String, cb:Function = null):void {
			_fs.writeFile(filePath, str, function (err:*):void {
				if (err) {
					console.error(err);
				}
				cb && cb();
			});
		}
		
	}

}