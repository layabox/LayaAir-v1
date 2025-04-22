import {ILaya8Client} from "./ILaya8Client";
import {ServerInfo} from "./ServerInfo";
import * as http from 'http';
import * as net from 'net';
import * as _ from 'lodash';

import {getLogger} from "../utils/logger";
import {Logger} from "log4js";
import {IRankClient} from "../rank/IRankClient";
import {Socket} from "net";
import {IUserBasicData} from "../db/IUserBasicData";
import {IBackpack} from "../backpack/IBackpack";
import {IMall} from "../mall/IMall";
import {IBanWordsFilter} from "../utils/banWords/IBanWordsFilter";
import {THMBanWordsFilter} from "../utils/banWords/THMBanWordsFilter";
const logger: Logger = getLogger(__filename, 'Laya8Client');

/**
 * Created by Bob Jiang on 2016/10/9.
 */
export class Laya8Client implements ILaya8Client, IRankClient, IUserBasicData, IMall, IBackpack, IBanWordsFilter {

	public masterInfo: ServerInfo = new ServerInfo();
	public roomInfo: ServerInfo = new ServerInfo();
	public myInfo: ServerInfo = new ServerInfo();

	public onOpenCallback: (err: Error, serverInfo?: ServerInfo) => void;

	public isMasterConnected: boolean;
	public isRoomConnected: boolean;
	public wasntConnected: boolean = true;

	public masterClient: net.Socket;
	public roomClient: net.Socket;

	public serverId: number;
	public gameId: number;

	private masterHeartBeatTimeout: any;
	private roomHeartBeatTimeout: any;

	public open(configUrl: string, serverId: number, callback: (err: Error, serverInfo?: ServerInfo)=>void): void {
		const pos1: number = configUrl.indexOf('://');

		if (pos1 === -1) {
			logger.error('Master Config URL is invalid: ' + configUrl);
			return;
		}

		const pos2: number = configUrl.indexOf('/', pos1 + 3);

		const hostname: string = configUrl.substring(pos1 + 3, pos2);
		const port: number = 80;
		const path: string = configUrl.substring(pos2);

		const options: Object = {
			hostname: hostname,
			port: port,
			path: path,
			method: 'GET'
		};

		const self: Laya8Client = this;

		this.isMasterConnected = false;
		this.isRoomConnected = false;

		this.serverId = serverId;

		const request: http.ClientRequest = http.request(options, function (response: http.ClientResponse): void {
			response.setEncoding('utf8');
			response.on('data', (chunk: string): void => {
				const result: Object = JSON.parse(chunk);

				const masterIp: string = result['masterIP'];
				const masterPort: number = result['masterPort'];

				self.masterInfo.ip = masterIp;
				self.masterInfo.port = masterPort;
				self.masterInfo.type = 1;

				self.onOpenCallback = callback;

				self.connectToMaster(masterIp, masterPort);
			});

			response.on('end', (): void => {
				logger.debug('HTTP 请求结束');
			});
		});

		request.end();
	}

	private connectToMaster(masterHost: string, masterPort: number): void {
		logger.debug('准备连接到 Master：' + masterHost + ':' + masterPort);

		this.cleanMasterClient();

		const self: Laya8Client = this;

		// TODO：需要更强健的连接逻辑，包括断线重连，超时侦听等
		this.masterClient = net.connect({host: masterHost, port: masterPort}, (): void => {
			logger.debug('已经连接到 Master，开始握手提供本机 ServerId：%d', self.serverId);

			self.isMasterConnected = true;

			self.masterClient.write('{"url":"master.ServerMgr.apply","params":{"svid":"' + self.serverId + '"}}');
		});

		this.masterClient.on('end', (): void => {
			logger.debug('Master 连接终止，当前 Master 连接状态：%j', self.isMasterConnected);

			self.cleanMasterClient();

			// 启动延时重连
			setTimeout(self.connectToMaster.bind(self), 3000, masterHost, masterPort);
		});

		this.masterClient.on('error', (err: Error): void => {
			logger.debug('Master 连接出现错误：%s，当前 Master 连接状态：%j', err.message, self.isMasterConnected);

			if (self.isMasterConnected) {
			}

			self.cleanMasterClient();

			// 启动延时重连
			setTimeout(self.connectToMaster.bind(self), 3000, masterHost, masterPort);
		});

		this.masterClient.on('data', (data: Buffer): void => {

			logger.debug('Master 返回：%s', data);

			let results: Array<Object> = self.splitBufferToMessages(data);

			for (let i: number = 0, m: number = results.length; i<m; i++) {
				const result: Object = results[i];

				const params: Object = result['params'];

				switch (result['url']) {
					case 'master.error':
						if (_.isFunction(self.onOpenCallback)) {
							self.onOpenCallback(new Error(params['msg']));

							self.onOpenCallback = null;
						}

						self.dispose();

						break;

					case 'master.applyok':
						self.myInfo = new ServerInfo();

						self.myInfo.id = params['id'];
						self.myInfo.type = params['type'];
						self.myInfo.idc = params['idc'];
						self.myInfo.ip = params['ip'];
						self.myInfo.port = params['port'];

						const gameIdList: Array<string> = params['gameidlist'];

						if (_.isArray(gameIdList) && gameIdList.length > 0) {
							self.gameId = parseInt(gameIdList[0]);
							logger.debug('[applyok] 自己的游戏 Id 为：%d', self.gameId);
						} else {
							const errMsg: string = '来自 Master 的服务器 Game Id 列表无效：' + JSON.stringify(result);
							logger.error(errMsg);

							self.cleanMasterClient();

							if (_.isFunction(self.onOpenCallback)) {
								self.onOpenCallback(new Error(errMsg));
							}

							return;
						}

						// 查询我要找得  room server
						Laya8Client.writePackageTo(self.masterClient, 'master.ServerMgr.queryMyRoomServer', {gameid: self.gameId});

						break;

					case 'master.myroomserver':
						logger.debug('查询到房间服务器信息');

						self.roomInfo = new ServerInfo();

						self.roomInfo.id = params['id'];
						self.roomInfo.type = params['type'];
						self.roomInfo.idc = params['idc'];
						self.roomInfo.ip = params['ip'];
						self.roomInfo.port = params['port'];

						// 连接到 Room 服务器
						self.connectToRoom(self.roomInfo.ip, self.roomInfo.port);

						break;
				}

			}

			this.startMasterHeartBeatTimeCounting();

		});
	}

	private cleanMasterClient(): void {
		this.cleanMasterHeartBeatTimeCounting();

		if (!!this.masterClient) {
			try {
				this.masterClient.end();
			} catch (err) {
				logger.error(
					'关闭 Master 连接 %s:%d -> %s:%d 时出错：%s',
					this.roomClient.localAddress,
					this.roomClient.localPort,
					this.roomClient.remoteAddress,
					this.roomClient.remotePort,
					err.message
				);
			}

			this.masterClient.destroy();
		}
		this.masterClient = null;
		this.isMasterConnected = false;
	}

	public connectToRoom(gameHost: string, gamePort: number): void {
		if (!this.isMasterConnected) {
			logger.warn('当前未能连接到 Master 服务器，不能独立连接到 Room 服务器中！');
			return;
		}

		logger.debug('连接到 Room 服务器 %s:%d', gameHost, gamePort);

		this.cleanRoomClient();

		const self: Laya8Client = this;

		// TODO：需要更强健的连接逻辑，包括断线重连，超时侦听等
		this.roomClient = net.connect({host: gameHost, port: gamePort}, (): void => {
			logger.debug('已经连接到 Room 服务器，准备提供自己的游戏 Id：%d', self.gameId);

			// 通知外界连接成功
			self.isRoomConnected = true;

			// 游戏模块握手
			self.send({url: 'game.IAmGame', params: {
				gameid: self.gameId,
				serverid: self.serverId,
				ip: self.myInfo.ip + ':' + self.myInfo.port,
				bootup: self.wasntConnected ? 1 : 0
			}});

			self.wasntConnected = false;

			if (_.isFunction(self.onOpenCallback)) {
				self.onOpenCallback(null, self.myInfo);

				self.onOpenCallback = null;
			}
		});

		this.roomClient.on('end', (): void => {
			logger.debug('Room 连接终止，当前 Room 连接状态：%j', self.isRoomConnected);

			self.cleanRoomClient();

			// 启动延时重连
			setTimeout(self.connectToRoom.bind(self), 3000, gameHost, gamePort);
		});

		this.roomClient.on('error', (err: Error): void => {
			logger.debug('Room 连接出现错误：%s，当前 Room 连接状态：%j', err.message, self.isRoomConnected);

			if (self.isRoomConnected) {
			}

			self.cleanRoomClient();

			// 启动延时重连
			setTimeout(self.connectToRoom.bind(self), 3000, gameHost, gamePort);
		});

		this.roomClient.on('data', (data: Buffer): void => {

			logger.debug('Room 返回：%s', data);

			const results: Array<Object> = self.splitBufferToMessages(data);

			for (let i: number = 0, m: number = results.length; i<m; i++) {

				const result: Object = results[i];

				const url: string = result['url'];
				const params: Object = result['params'];

				const arr: Array<Function> = self.eventCbs[url];

				if (_.isArray(arr)) {
					for (let j: number = 0, n: number = arr.length; j<n; j++) {
						let cb: Function = arr[j];

						if (_.isFunction(cb)) {
							cb(url, params);
						}
					}
				}

				const arr2: Array<Function> = self.eventOnceCbs[url];
				if (_.isArray(arr2)) {
					for (let j: number = 0, n: number = arr2.length; j<n; j++) {
						let cb: Function = arr2[j];

						if (_.isFunction(cb)) {
							cb(url, params);
						}
					}

					arr2.length = 0;
				}
			}

			self.startRoomHeartBeatTimeCounting();

		});
	}

	private cleanRoomClient(): void {
		this.cleanRoomHeartBeatTimeCounting();

		if (!!this.roomClient) {
			try {
				this.roomClient.end();
			} catch (err) {
				logger.error(
					'关闭 Room 连接 %s:%d -> %s:%d 时出错：%s',
					this.roomClient.localAddress,
					this.roomClient.localPort,
					this.roomClient.remoteAddress,
					this.roomClient.remotePort,
					err.message
				);
			}

			this.roomClient.destroy();
		}
		this.roomClient = null;
		this.isRoomConnected = false;
	}

	public close(): void {
		this.cleanRoomClient();
		this.cleanMasterClient();

		this.cleanMasterHeartBeatTimeCounting();
		this.cleanRoomHeartBeatTimeCounting();
	}

	public getIsConnected(): boolean {
		return this.isRoomConnected;
	}

	public send(message: Object): void {
		if (!!this.getIsConnected() && !!this.roomClient && !!message) {
			logger.debug('向 Room 服务器发送数据：%j', message);

			this.roomClient.write(JSON.stringify(message));

			this.startRoomHeartBeatTimeCounting();
		} else {
			logger.warn('Room 服务器并没有连接，但是尝试发送数据：%j', message);
		}
	}

	private startMasterHeartBeatTimeCounting(): void {
		this.cleanMasterHeartBeatTimeCounting();

		this.masterHeartBeatTimeout = setTimeout(this.onMasterHeartBeatTimeoutHandler.bind(this), 10000);
	}

	private cleanMasterHeartBeatTimeCounting(): void {
		if (!!this.masterHeartBeatTimeout) {
			clearTimeout(this.masterHeartBeatTimeout);
			this.masterHeartBeatTimeout = null;
		}
	}

	private onMasterHeartBeatTimeoutHandler(): void {
		if (this.isMasterConnected) {
			Laya8Client.writePackageTo(this.masterClient, 'ServerMgr.report', {onlinenum: 0});
		}

		this.startMasterHeartBeatTimeCounting();
	}

	private startRoomHeartBeatTimeCounting(): void {
		this.cleanRoomHeartBeatTimeCounting();

		this.roomHeartBeatTimeout = setTimeout(this.onRoomHeartBeatTimeoutHandler.bind(this), 10000);
	}

	private cleanRoomHeartBeatTimeCounting(): void {
		if (!!this.roomHeartBeatTimeout) {
			clearTimeout(this.roomHeartBeatTimeout);
			this.roomHeartBeatTimeout = null;
		}
	}

	private onRoomHeartBeatTimeoutHandler(): void {
		this.send({url: 'game.hb', params: 1});
	}

	private eventCbs: Object = {};
	private eventOnceCbs: Object = {};

		public on(event: string, callback: (url: string, params: Object)=>void): void {
		if (!!event && _.isFunction(callback)) {
			let arr: Array<Function> = this.eventCbs[event];

			if (!_.isArray(arr)) {
				this.eventCbs[event] = arr = [];
			}

			arr.push(callback);
		}
	}

	public once(event: string, callback: (url: string, params: Object) => void): void {
		if (!!event && _.isFunction(callback)) {
			let arr: Array<Function> = this.eventOnceCbs[event];

			if (!_.isArray(arr)) {
				this.eventOnceCbs[event] = arr = [];
			}

			arr.push(callback);
		}
	}

	public off(event: string, callback: (url: string, params: Object) => void): void {

		if (!!event && _.isFunction(callback)) {
			let arr: Array<Function> = this.eventCbs[event];

			if (_.isArray(arr)) {
				for (let i = arr.length - 1, m = 0; i >= m; i--) {
					const cb: Function = arr[i];

					if (_.isFunction(cb) && cb === callback) {
						arr.splice(i, 1);
					}
				}
			}

			arr = this.eventOnceCbs[event];

			if (_.isArray(arr)) {
				for (let i = arr.length - 1, m = 0; i >= m; i--) {
					const cb: Function = arr[i];

					if (_.isFunction(cb) && cb === callback) {
						arr.splice(i, 1);
					}
				}
			}
		}
	}

	/**
	 * 通用的请求接口，提供请求名和返回名，以及要请求的参数和需要检查的参数名字对，然后自动添加超时机制
	 *
	 * @param request     请求名
	 * @param response    返回名
	 * @param params      参数对象
	 * @param matches     包匹配参数
	 * @param callback    最终回调
	 * @param timeout     请求超时的毫秒数。不停工该参数，则默认值为 3000（3 秒）
	 */
	public request(request: string, response: string, params: any, matches: any, callback: (err: Error, result?: any) => void, timeout: number = 3000): void {
		if (this.getIsConnected()) {
			const self = this;

			let timeoutHandler = null;

			if (timeout > 0) {
				const timeoutCb: ()=>void = (): void => {
					self.off(response, cb);

					return callback(new Error('[错误] 请求超时！'));
				};

				timeoutHandler = setTimeout(timeoutCb, timeout);
			}

			const cb: (url: string, resultParams?: any) => void = (url: string, params2: any): void => {
				if (null === params2 || undefined === params2) {
					callback(new Error('[错误] 没有拿到正确的返回数据：' + JSON.stringify(params2)));
				} else {
					// 进行参数匹配检测
					if (!!matches) {
						let isMyResponse: boolean = true;

						for (let key1 in matches) {
							const value1: any = params[key1];
							const key2: string = matches[key1];

							// 如果请求参数里存在要检测的值，且检查参数里存在要监测的属性名
							if ((null !== value1 || undefined !== value1) && !!key2) {
								const value2: any = params2[key2];

								if (value1 == value2) {
									continue;
								} else if (_.isArray(value1)) {
									if (_.isArray(value2) && _.isEqual(value1, value2)) {
										continue;
									} else if (_.isPlainObject(value2)) {
										let isMatch: Boolean = true;

										for (let i = 0, m = value1.length; i<m; i++) {
											const k1: String = value1[i];

											if (undefined === value2[k1]) {
												isMatch = false;

												break;
											}
										}

										if (isMatch) {
											continue;
										}
									}
								}

								isMyResponse = false;

								break;

							} else {
								// 对不上则认为匹配失败，不是针对当前请求的响应
								isMyResponse = false;

								break;
							}
						}

						if (isMyResponse) {
							if (!!timeoutHandler) {
								clearTimeout(timeoutHandler);
							}

							self.off(response, cb);

							return callback(null, params2);
						}
					} else {
						if (!!timeoutHandler) {
							clearTimeout(timeoutHandler);
						}

						self.off(response, cb);

						return callback(null, params2);
					}
				}
			};

			this.on(response, cb);
			this.send({url: request, params: params});

		} else {
			return callback(new Error('[错误] 尚未连接到 Laya8 服务器'));
		}
	}

	/**
	 * 通用的通知接口。通知是单向的通讯，不要求反馈
	 *
	 * @param request     请求名
	 * @param params      参数对象
	 */
	public notify(request: string, params: any): void {
		if (this.getIsConnected()) {
			this.send({url: request, params: params});
		} else {
			logger.error('[错误] 尚未连接到 Laya8 服务器');
		}
	}

	private packageBuffer: Buffer = Buffer.alloc(0xFFFF, 0);
	private packagePos: number = 0;

	private splitBufferToMessages(input: Buffer): Array<Object> {
		this.packagePos += input.copy(this.packageBuffer, this.packagePos);

		const leftB: number = '{'.charCodeAt(0);
		const rightB: number = '}'.charCodeAt(0);

		if (this.packageBuffer[0] !== leftB) {
			logger.error('数据内容没有以字符 { 开始，格式错误：%s', this.packageBuffer);
			return [];
		}

		const result: Array<Object> = [];

		let startPos: number = 0;
		for (let i: number = 0, m: number = this.packagePos, level: number = 0; i<m; i++) {
			const c: number = this.packageBuffer[i];

			switch (c) {
				case leftB:
					level ++;

					break;

				case rightB:
					if (level > 0)
						level --;
					else
						logger.warn('出现了 level 降到 0 以下的 bug');

					break;
			}

			if (level === 0) {
				const endPos: number = i+1;
				const pkg: string = this.packageBuffer.toString('utf8', startPos, endPos);
				result.push(JSON.parse(pkg));

				startPos = endPos;
			}
		}

		this.packageBuffer.copy(this.packageBuffer, 0, startPos, this.packagePos);
		this.packagePos -= startPos;

		return result;
	}

	private static writePackageTo(socket: Socket, url: string, params: Object = {}): void {
		logger.debug('[Write Package] 向 %s:%d 写入消息：%s -> %j', socket.remoteAddress, socket.remotePort, url, params);
		socket.write('{"url": "' + url + '", "params": ' + JSON.stringify(params) + '}');
	}

	public dispose(): void {
		this.close();

		for (let k in this.eventCbs) {
			let v: Array<Function> = this.eventCbs[k];

			if (_.isArray(v)) {
				v.length = 0;
			}

			delete this.eventCbs[k];
		}

		for (let k in this.eventOnceCbs) {
			let v: Array<Function> = this.eventOnceCbs[k];

			if (_.isArray(v)) {
				v.length = 0;
			}

			delete this.eventOnceCbs[k];
		}
	}



	public listRanks(callback: (err: Error, ranks?: Array<any>)=>void) {
		if (this.getIsConnected()) {
			this.once('game.listRanksResult', (url: string, params: any): void => {
				const ranks: Array<any> = params['ranks'];

				if (_.isArray(ranks)) {
					callback(null, params['ranks']);
				} else {
					callback(new Error('[错误] 获取排行榜配置时出错，返回了文本：' + JSON.stringify(params)));
				}
				callback = null;
				params = null;
			});

			Laya8Client.writePackageTo(this.roomClient, 'room.rank.listRanks');
		} else if (_.isFunction(callback)) {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public updateUser(rankId: number, userId: number, value: number) {
		if (this.getIsConnected()) {
			Laya8Client.writePackageTo(this.roomClient, 'room.rank.updateUser', {rankId: rankId, userId: userId, value: value});
		}
	}

	public getUserRank(userId: number, callback: (err: Error, userRanks?: Array<any>) => void): any {
		if (this.getIsConnected()) {
			const requestEvent: string = 'room.rank.getUserRank';
			const responseEvent: string = 'c.user.getUserRankResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const resultUserId: number = params['UserId'];

					if (resultUserId === userId) {
						self.off(responseEvent, cb);

						callback(null, params['UserRanks']);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的排行榜数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId}});

			return cb;

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public getPrevRangedRank(rankId: number, begin: number, end: number, callback: (err: Error, ranks?: Array<any>) => void): void {
		if (this.getIsConnected()) {
			const requestEvent: string = 'room.rank.getPrevRangedRank';
			const responseEvent: string = 'room.rank.getPrevRangedRankResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const resultRankId: number = params['rankId'];
					const resultBegin: number = params['begin'];
					const resultEnd: number = params['end'];

					if (rankId === resultRankId && begin === resultBegin && end === resultEnd) {
						self.off(responseEvent, cb);

						callback(null, params['ranks']);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的排行榜上一轮数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {rankId: rankId, begin: begin, end: end}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public getUserBasicData(userId: number, callback: (err: Error, userBasicData?: any)=>void): void {
		
		if (this.getIsConnected()) {
			const requestEvent: string = 'room.platform.getUserBasicData';
			const responseEvent: string = 'user.getUserBasicDataResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const resultUserId: number = params['userId'];

					if (resultUserId === userId) {
						self.off(responseEvent, cb);

						const userBasicData: any = params['userBasicData'];
						if (!!userBasicData) {
							return callback(null, userBasicData);
						} else {
							return callback(new Error('[错误] 请求用户 #' + userId + ' 的基础数据，没有获得正确的返回数据：' + JSON.stringify(params)));
						}
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的用户平台数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public setUserBasicData(userId: number, userBasicData: any, callback: (err: Error, isSuccess?: Boolean)=>void): void {

		if (this.getIsConnected()) {
			const requestEvent: string = 'room.platform.setUserBasicData';
			const responseEvent: string = 'user.setUserBasicDataResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const resultUserId: number = params['userId'];

					if (resultUserId === userId) {
						self.off(responseEvent, cb);

						return callback(null, true);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的用户平台数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId, userBasicData: userBasicData}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public listMalls(callback: (err: Error, malls?: Array<any>)=>void) {
		if (this.getIsConnected()) {
			const requestEvent: string = 'room.mall.listMalls';
			const responseEvent: string = 'mall.listMallsResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const malls: Array<any> = params['malls'];

					if (_.isArray(malls)) {
						self.off(responseEvent, cb);

						return callback(null, malls);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的商城数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public listGoods(mallId: number, callback: (err: Error, goods?: Array<any>)=>void) {
		if (this.getIsConnected()) {
			const requestEvent: string = 'room.mall.listGoods';
			const responseEvent: string = 'mall.listGoodsResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const resultMallId: number = params['mallId'];
					const goodses: Array<any> = params['goodses'];

					if (mallId === resultMallId && _.isArray(goodses)) {
						self.off(responseEvent, cb);

						return callback(null, goodses);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的商品数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {mallId: mallId}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public purchase(mallId: number, goodsId: number, itemInGoodsId: number, userId: number, backpackId: number, amount: number, callback: (err: Error, items?: Array<any>)=>void) {
		if (this.getIsConnected()) {
			const requestEvent: string = 'room.mall.purchase';
			const responseEvent: string = 'mall.purchaseResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const resultMallId: number = params['mallId'];
					const resultGoodsId: number = params['goodsId'];
					const resultItemInGoodsId: number = params['itemInGoodsId'];
					const resultUserId: number = params['userId'];
					const resultBackpackId: number = params['backpackId'];
					const resultAmount: number = params['amount'];
					const items: Array<any> = params['items'];

					if (
						mallId === resultMallId &&
						goodsId === resultGoodsId &&
						itemInGoodsId === resultItemInGoodsId &&
						userId === resultUserId &&
						backpackId === resultBackpackId &&
						amount === resultAmount &&
						_.isArray(items)
					) {
						self.off(responseEvent, cb);

						return callback(null, items);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的购买数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {mallId: mallId, goodsId: goodsId, itemInGoodsId: itemInGoodsId, userId: userId, backpackId: backpackId, amount: amount}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public listBackpacks(userId: number, callback: (err: Error, goods?: Array<any>)=>void) {
		if (this.getIsConnected()) {
			const requestEvent: string = 'room.backpack.listBackpacks';
			const responseEvent: string = 'backpack.listBackpacksResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const userId2: number = params['userId'];
					const backpacks: Array<any> = params['backpacks'];

					if (
						userId === userId2 &&
						_.isArray(backpacks)
					) {
						self.off(responseEvent, cb);

						return callback(null, backpacks);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的背包数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public unlockCells(userId: number, backpackId: number, unlockTo: number, callback: (err: Error, isSuccess?: boolean)=>void) {
		if (this.getIsConnected()) {
			const requestEvent: string = 'room.backpack.unlockCells';
			const responseEvent: string = 'backpack.unlockCellsResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const userId2: number = params['userId'];
					const backpackId2: number = params['backpackId'];
					const unlockTo2: number = params['unlockTo'];
					const isSuccess: boolean = params['isSucccess'];

					if (
						userId === userId2 &&
						backpackId === backpackId2 &&
						unlockTo === unlockTo2
					) {
						self.off(responseEvent, cb);

						return callback(null, isSuccess);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的格子解锁数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId, backpackId: backpackId, unlockTo: unlockTo}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public addItem(userId: number, backpackId: number, itemStaticId: number, amount: number, callback: (err: Error, isSuccess?: boolean, items?: Array<any>)=>void) {
		if (this.getIsConnected()) {
			if (amount <= 0 ) {
				return callback(new Error('[错误] 添加道具时不能指定负数或 0 个数量'));
			}

			const requestEvent: string = 'room.backpack.addItem';
			const responseEvent: string = 'backpack.addItemResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const userId2: number = params['userId'];
					const backpackId2: number = params['backpackId'];
					const itemStaticId2: number = params['itemStaticId'];
					const amount2: number = params['amount'];
					const isSuccess: boolean = params['isSuccess'];
					const items: Array<any> = params['items'];

					if (
						userId === userId2 &&
						backpackId === backpackId2 &&
						itemStaticId === itemStaticId2 &&
						amount === amount2 &&
						!!items
					) {
						self.off(responseEvent, cb);

						return callback(null, isSuccess, items);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的增加道具数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId, backpackId: backpackId, itemStaticId: itemStaticId, amount: amount}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public removeItem(userId: number, backpackId: number, itemStaticId: number, amount: number, callback: (err: Error, isSuccess?: boolean, items?: Array<any>)=>void) {
		if (this.getIsConnected()) {
			if (amount <= 0 ) {
				return callback(new Error('[错误] 减少道具时不能指定负数或 0 个数量'));
			}

			const requestEvent: string = 'room.backpack.removeItem';
			const responseEvent: string = 'backpack.addItemResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const userId2: number = params['userId'];
					const backpackId2: number = params['backpackId'];
					const itemStaticId2: number = params['itemStaticId'];
					const amount2: number = params['amount'];
					const isSuccess: boolean = params['isSuccess'];
					const items: Array<any> = params['items'];

					if (
						userId === userId2 &&
						backpackId === backpackId2 &&
						itemStaticId === itemStaticId2 &&
						amount === -amount2 &&
						!!items
					) {
						self.off(responseEvent, cb);

						return callback(null, isSuccess, items);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的减少道具数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId, backpackId: backpackId, itemStaticId: itemStaticId, amount: -amount}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public moveItem(userId: number, fromBackpackId: number, toBackpackId: number, itemStaticId: number, amount: number, callback: (err: Error, isSuccess?: boolean, fromItem?: any, toItem?: any)=>void) {
		if (this.getIsConnected()) {
			if (amount <= 0 ) {
				return callback(new Error('[错误] 减少道具时不能指定负数或 0 个数量'));
			}

			const requestEvent: string = 'room.backpack.moveItem';
			const responseEvent: string = 'backpack.moveItemResult';

			const self = this;
			const cb: (url: string, params?: Object)=>void = (url: string, params: Object): void => {
				if (!!params) {
					const userId2: number = params['userId'];
					const fromBackpackId2: number = params['fromBackpackId'];
					const toBackpackId2: number = params['toBackpackId'];
					const itemStaticId2: number = params['itemStaticId'];
					const amount2: number = params['amount'];

					const isSuccess: boolean = params['isSuccess'];

					const fromItem: any = params['fromItem'];
					const toItem: any = params['toItem'];

					if (
						userId === userId2 &&
						fromBackpackId === fromBackpackId2 &&
						toBackpackId === toBackpackId2 &&
						itemStaticId === itemStaticId2 &&
						amount === amount2 &&
						!! fromItem &&
						!! toItem
					) {
						self.off(responseEvent, cb);

						return callback(null, fromItem, toItem);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的移动道具数据：' + JSON.stringify(params)));
				}
			};

			this.on(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId, fromBackpackId: fromBackpackId, toBackpackId: toBackpackId, itemStaticId: itemStaticId, amount: amount}});

		} else {
			return callback(new Error('[错误] 尚未连接到 Room 服务器'));
		}
	}

	public useItemResult(requestId: number, userId: number, backpackId: number, itemStaticId: number, amount: number, isSuccess: boolean, items: Array<any>): void {
		if (this.getIsConnected()) {
			this.send({url: "room.backpack.useItemResult", params: {
				requestId: requestId,
				userId: userId,
				backpackId: backpackId,
				itemStaticId: itemStaticId,
				amount: amount,
				isSuccess: isSuccess,
				items: items
			}});
		} else {
			logger.error('[Use Item Result] 当前没能连接到大厅服务器');
		}
	}



	private filter: IBanWordsFilter;

	public initBanWordsFilter(wordsPath: string): void {
		this.filter = new THMBanWordsFilter(wordsPath);
	}

	public hasBanWords(message: string): boolean {
		if (!!this.filter) {
			return this.filter.hasBanWords(message);
		} else {
			return false;
		}
	}

}