package {
	import laya.display.Sprite;
	import laya.display.Text;
	import laya.net.LocalStorage;
	import laya.renders.Render;
	import laya.utils.Browser;
	import laya.utils.Stat;
	import laya.webgl.WebGL;
	
	/**
	 * Laya Engine 性能测试类。
	 * 测试流程如下：
	 * [0]初始化舞台、环境变量、事件侦听 >> [1]实例化测试用例，并等待测试用例准备完毕派发事件，这是为了给测试用例进行资源加载等操作的时间 >>
	 * [2]接收到测试用例准备完毕的事件，准备进行性能数据计算，等待的准备时间为 WaitTimeAfterStart 毫秒，这是为了让性能趋于稳定后再进行性能统计 >>
	 * [3]预初始化与性能测试相关的环境变量，并进行记录，此时进入性能统计时间段，时长为 WaitTimeOfCalc 毫秒 >>
	 * [4]统计时间段结束，进行数据统计，缓存统计结果 >> [5]刷新浏览器，以清理测试环境，刷新完成后将进行下一个测试用例的测试，跳到[1]，如此往复，直到测试用例全部执行完毕，并显示统计数据。
	 *
	 * 当某个测试用例抛出错误，则略过此用例，进入下一个测试用例的流程。
	 */
	public class LayaTestFps {
		/**
		 * 处于同一测试过程的标识。
		 * [重要]当用户想要开始一个新的测试过程时，必须修改此值，累加即可，这会将之前存储的测试数据删除，以保证新的测试的正确性。
		 * 支持中断续测：某一测试用例测试过程中，被意外中断(比如关闭浏览器)，导致没有测试完成，可以重启此测试，程序会自动续测；
		 */
		private const TestId:uint = 2;
		
		/**
		 * 当前的测试用例实例。
		 */
		private var test:*;
		/**
		 * 测试用例类集合。
		 */
		private var testClsArr:Array = [PerformanceTest_Cartoon, PerformanceTest_Skeleton, PerformanceTest_Cartoon2, PerformanceTest_Maggots];
		/**
		 * 当前进行测试的用例索引。
		 */
		private var _testIndex:int = 0;
		/**
		 * 测试用例个数。
		 */
		private var testLen:uint;
		/**
		 * 统计开始时的帧数。
		 */
		private var _startFrameCnt:int;
		/**
		 * 统计开始时的帧所对应的时间。
		 */
		private var _startFrameTm:Number;
		//private var WaitTimeBlankStage:int = 5000;
		/**
		 * 测试开始后，等待性能数据稳定后，再进行统计，此数组中的时间与测试用例类数组 testArr 按序对应。
		 */
		private var WaitTimeAfterStart:Array = [5000, 5000, 5000, 15000];
		/**
		 * 性能统计的时长。
		 */
		private var WaitTimeOfCalc:int = 10000;
		/**
		 * 测试过程中的中间结果。
		 */
		private var calcRes:Array;
		/**
		 * 保存测试结果的文件路径，用于程序解析。
		 */
		private var jsonFilePath:String = "fps.json";
		/**
		 * 保存测试结果的文件路径，有一定可读性，方便人工查看。
		 */
		private var txtFilePath:String = "fps.txt";
		/**
		 * 本地存储 key 。
		 */
		private const LsKey:String = "layatestfps";
		/**
		 * 当前测试的 Laya Engine's Version。
		 */
		private var layaVersion:String;
		
		public function LayaTestFps() {
			trace("Hi Laya~ 201706221057");
			Laya.init(Browser.width, Browser.height, WebGL);
			Laya.stage.bgColor = "#000000";
			Stat.show();
			
			layaVersion = Laya.version;
			start();
			//analyseFile();
		}
		
		private function start():void {
			Laya.stage.destroyChildren();
			//test
			testLen = testClsArr.length;
			trace("test sum:" + testLen);
			Laya.stage.on("teststart", this, onTestStart);
			Laya.stage.on("testerror", this, onTestError);
			nextTest();
		}
		
		/**
		 * 开始下一个测试
		 */
		private function nextTest():void {
			trace("nextTest.");
			var storeData:Object = LocalStorage.getJSON(LsKey);
			if (storeData) {
				if (TestId !== storeData.id) {
					LocalStorage.removeItem(LsKey);
					_testIndex = 0;
					calcRes = [layaVersion];
				} else {
					_testIndex = storeData.index;
					calcRes = storeData.data;
				}
			} else {
				_testIndex = 0;
				calcRes = [layaVersion];
			}
			if (_testIndex >= testLen) {
				allTested();
			} else {
				//这5秒可以用来测试空白舞台，以及每次测试完成后，清理后的空白舞台。
				//Laya.timer.once(WaitTimeBlankStage, this, startTest, [testArr[_testIndex]]);
				//trace("wait to test:" + _testIndex);
				
				startTest(testClsArr[_testIndex]);
			}
		}
		
		/**
		 * 所有测试完成
		 */
		private function allTested():void {
			var fileStr:String = calcRes.join(" ") + "\r\n";
			trace("allTested: " + fileStr);
			NodeFile.appendFile(txtFilePath, fileStr);
			
			var fileData:* = NodeFile.readFile(jsonFilePath);
			var data:Array;
			if (fileData && fileData.length) {
				data = JSON.parse(fileData) as Array;
			} else {
				data = [];
			}
			var len:uint = data.length;
			data.push(calcRes);
			NodeFile.writeFile(jsonFilePath, JSON.stringify(data), function():void {
				trace("all tested & added to file.");
				
				analyseFile(data);
			});
			
			clear();
		}
		
		private function analyseFile(data:Array = null):void {
			trace("analyse file.");
			if (!data) {
				var fileData:* = NodeFile.readFile(jsonFilePath);
				fileData && fileData.length && (data = JSON.parse(fileData) as Array);
			}
			trace(data);
			if (!data || !data.length || !data[0].length) {
				trace("no file content.");
				return;
			}
			
			//output analyse result
			var rowHeight:int = 30, colWidth:int = 140, startX:int = 60, startY:int = 80;
			
			var row:int = data.length, col:int = data[0].length;
			var tempText:Text, i:int, j:int;
			var titleArr:Array = ["version"];
			
			for (i = 0; i < col - 1; i++) {
				titleArr.push(testClsArr[i].TestName);
			}
			for (i = 0; i < col; i++) {
				tempText = Laya.stage.addChild(new Text()) as Text;
				tempText.pos(i * colWidth + startX, startY);
				tempText.fontSize = 20;
				tempText.color = "#FFFFFF";
				tempText.text = titleArr[i];
			}
			
			var tempColor:String, tempStr:String, tempA:int, tempB:int;
			
			for (i = 0; i < row; i++) {
				for (j = 0; j < col; j++) {
					tempText = Laya.stage.addChild(new Text()) as Text;
					tempText.pos(j * colWidth + startX, (i + 1) * rowHeight + startY);
					tempText.fontSize = 16;
					if (0 === j) {
						tempText.color = "#FFFFFF";
						tempText.text = data[i][j];
					} else {
						tempA = data[i][j].toFixed(4);
						if (i !== 0) {
							tempB = data[i - 1][j].toFixed(4);
							if (tempA > tempB) {
								tempColor = "#FF0000";
								tempStr = tempA + "↑";
							} else if (tempA < tempB) {
								tempColor = "#00FF00";
								tempStr = tempA + "↓";
							} else {
								tempColor = "#FFFFFF";
								tempStr = tempA + "-";
							}
						} else {
							tempColor = "#FFFFFF";
							tempStr = tempA + "-";
						}
						tempText.color = tempColor;
						tempText.text = tempStr;
					}
				}
			}
			
			//draw graphics
			//var chartSpr:Sprite = new Sprite();
		}
		
		/**
		 * 开始测试
		 * @param	cls
		 */
		private function startTest(cls:Class):void {
			trace("startTest:" + _testIndex);
			test = new cls(_testIndex);
			//等待测试用例抛出开始或者出错的事件
		}
		
		/**
		 * 测试用例发生内部错误
		 * @param	ti
		 * @param	msg
		 */
		private function onTestError(ti:int, msg:String = null):void {
			trace("test internal error! current=" + _testIndex + ", errorindex=" + ti, "msg:" + msg);
			if (ti === _testIndex) {
				calcRes[ti + 1] = 0;
				storeAndRefresh(ti + 1, calcRes);
			}
		}
		
		/**
		 * 测试用例准备完毕，并开始运行测试
		 * @param	ti
		 * @param	msg
		 */
		private function onTestStart(ti:int, msg:String = null):void {
			trace("test start:" + ti, "msg:" + msg);
			if (ti === _testIndex) {
				//等性能稳定后，再进行性能统计
				Laya.timer.once(WaitTimeAfterStart[_testIndex], this, calcStart);
			} else {
				trace("not current testindex! current=" + _testIndex + ", get=" + ti, "msg:" + msg);
			}
		}
		
		/**
		 * 开始进行性能统计
		 */
		private function calcStart():void {
			trace("calcStart:" + _testIndex);
			_startFrameCnt = Laya.timer.currFrame;
			_startFrameTm = Laya.timer.currTimer;
			//性能统计时段
			Laya.timer.once(WaitTimeOfCalc, this, calcEnd);
		}
		
		/**
		 * 性能统计结束，准备开始下一个测试
		 */
		private function calcEnd():void {
			trace("calcEnd:" + _testIndex);
			var fps:Number = (Laya.timer.currFrame - _startFrameCnt) / (Laya.timer.currTimer - _startFrameTm) * 1000;
			trace("FPS: " + _testIndex + ", " + fps);
			calcRes[_testIndex + 1] = fps;
			//clear();
			
			if (_testIndex + 1 >= testLen) {
				LocalStorage.removeItem(LsKey);
				allTested();
			} else {
				storeAndRefresh(_testIndex + 1, calcRes);
			}
		}
		
		/**
		 * 清理当前测试
		 */
		private function clear():void {
			trace("cleared:" + _testIndex);
			test.clear();
			Laya.stage.destroyChildren();
		}
		
		private function storeAndRefresh(index:int, data:*):void 
		{
			LocalStorage.setJSON(LsKey, {"id":TestId, "index":index, "data":data});
			Browser.window.location.reload();
		}
	}
}