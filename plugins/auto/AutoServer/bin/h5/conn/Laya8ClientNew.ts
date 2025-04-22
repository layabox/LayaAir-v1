import {ILaya8Client} from "./ILaya8Client";
import {ServerInfo} from "./ServerInfo";
import * as http from "http";
import * as _ from "lodash";
import {getLogger} from "../utils/logger";
import {Logger} from "log4js";
import {IRankClient} from "../rank/IRankClient";
import {IUserBasicData} from "../db/IUserBasicData";
import {IBackpack} from "../backpack/IBackpack";
import {IMall} from "../mall/IMall";
import {IBanWordsFilter} from "../utils/banWords/IBanWordsFilter";
import {THMBanWordsFilter} from "../utils/banWords/THMBanWordsFilter";
import {IDbClient} from "../db/IDbClient";
import {Link} from "./Link";
const logger: Logger = getLogger(__filename, 'Laya8Client');

/**
 * Created by Bob Jiang on 2016/10/9.
 */
export class Laya8ClientNew implements ILaya8Client, IDbClient, IRankClient, IUserBasicData, IMall, IBackpack, IBanWordsFilter {

	public getGameData(gameUserId: number, query: Array<string>, callback: (err: Error, results?: any) => void): void {
		this.request('game.data.get', 'game.dataGot', {
			userId: 1,
			query: query
		}, {'userId': 'userId'}, (err: Error, params?: any): void => {
			callback(err, params['results']);
		});
	}

	public updateGameData(gameUserId: number, update: any, callback: (err: Error, results?: any) => void): void {
		this.request('game.data.update', 'game.dataUpdated', {
			userId: 1,
			update: update
		}, {'userId': 'userId'}, (err: Error, params?: any): void => {
			callback(err, params['results']);
		});
	}

	public masterInfo: ServerInfo = new ServerInfo();

	/**大厅服务器信息集合*/
	private hallServerInfoMap: Object = {};
	/**链接集合*/
	// private roomLinkList: Object = {};

	public myInfo: ServerInfo = new ServerInfo();
	public onOpenCallback: (err: Error, serverInfo?: ServerInfo) => void;
	public isMasterConnected: boolean;
	// public masterClient: Link;
	public serverId: number;
	public gameId: number;

	// 是否为第一次连接
	public wasntConnected: boolean = true;

	public open(configUrl: string, serverId: number, callback: (err: Error, serverInfo?: ServerInfo) => void): void {
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

		const self: Laya8ClientNew = this;

		this.isMasterConnected = false;

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

		const self: Laya8ClientNew = this;

		if (!!this.masterInfo && !!this.masterInfo.link) {
			this.masterInfo.link.close();
			this.masterInfo.link = null;
		}

		if (!this.masterInfo) this.masterInfo = new ServerInfo();

		const masterLink: Link = this.masterInfo.link = new Link();
		masterLink.connect(masterHost, masterPort, 0);

		masterLink.once('connected', (): void => {
			logger.debug('已经连接到 Master，开始握手提供本机 ServerId：%d', self.serverId);

			self.isMasterConnected = true;

			masterLink.send('{"url":"master.ServerMgr.apply","params":{"svid":"' + self.serverId + '"}}');
		});

		masterLink.on('end', (): void => {
			logger.debug('Master 连接终止，当前 Master 连接状态：%j', self.isMasterConnected);

			self.isMasterConnected = false;
		});

		masterLink.on('error', (err: Error): void => {
			logger.debug('Master 连接出现错误：%s，当前 Master 连接状态：%j', err.message, self.isMasterConnected);

			self.isMasterConnected = false;
		});

		masterLink.on('package', (results: Array<Object>): void => {
			for (let i: number = 0, m: number = results.length; i < m; i++) {
				const result: Object = results[i];

				logger.debug('处理来自 Master 服务器的消息：%j', result);

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
						self.myInfo.link = null;

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

						// 查询自己的 hall server
						Laya8ClientNew.writePackageTo(masterLink, 'master.ServerMgr.query_hall_servers', {gameidlist: [self.gameId]});

						break;

					case 'master.hall_servers':
						// 先清空原来的所有大厅连接
						for (let k in this.hallServerInfoMap) {
							const serverInfo: ServerInfo = this.hallServerInfoMap[k];
							serverInfo.dispose();

							delete this.hallServerInfoMap[k];
						}

						// 遍历添加服务器
						for (let ind in params) {
							this.produceServerOnline(params[ind]);
						}

						break;

					case 'master.svonline':
						this.produceServerOnline(params);

						break;

					case 'master.svoffline':
						this.produceServerOffline(params);

						break;
				}

			}

		});
	}

	private produceServerOnline(serverParams: any): void {
		logger.debug('处理服务器上线消息：%j', serverParams);

		const self = this;

		// 如果是大厅服务器
		if (serverParams['type'] == 4 && !!serverParams['gameidlist']) {
			const gameIdList: Array<string> = serverParams['gameidlist'];
			for (let i in gameIdList) {
				if (parseInt(gameIdList[i]) == self.gameId) {
					const serverId: number = serverParams['id'];
					let hallServerInfo: ServerInfo;

					logger.debug('添加一个大厅服务器 #%d 信息：%j', serverId, serverParams);

					if (self.hallServerInfoMap[serverId]) {
						hallServerInfo = self.hallServerInfoMap[serverId];
					} else {
						hallServerInfo = new ServerInfo();
						self.hallServerInfoMap[serverId] = hallServerInfo;
					}

					hallServerInfo.id = serverParams['id'];
					hallServerInfo.type = serverParams['type'];
					hallServerInfo.idc = serverParams['idc'];
					hallServerInfo.ip = serverParams['ip'];
					hallServerInfo.port = serverParams['port'];

					self.connectToHall(hallServerInfo);

					break;
				}
			}
		}
	}

	private produceServerOffline(serverParams: any): void {
		logger.debug('处理服务器下线消息：%j', serverParams);

		const serverId: number = parseInt(serverParams['svid']);

		if (this.hallServerInfoMap[serverId]) {
			logger.debug('关闭服务器 #%d 连接并清除', serverId);
			this.closeSingleHall(serverId);
			delete this.hallServerInfoMap[serverId];
		} else {
			logger.warn('服务器 #%d 连接不存在，无法关闭', serverId);
		}
	}

	private cleanMasterClient(): void {
		if (!!this.masterInfo) {
			this.masterInfo.dispose();
			this.masterInfo = null;
		}

		this.isMasterConnected = false;
	}

	/**
	 * 连接到一个大厅服务器中
	 */
	public connectToHall(serverInfo: ServerInfo): Link {
		if (!this.isMasterConnected) {
			logger.warn('当前未能连接到 Master 服务器，不能独立连接到 Hall 服务器中！');
			return;
		}

		serverInfo.dispose();

		const gameHost: string = serverInfo.ip;
		const gamePort: number = serverInfo.port;
		const id: number = serverInfo.id;

		logger.debug('连接到 Hall 服务器 #%d %s:%d', id, gameHost, gamePort);

		this.closeSingleHall(id);

		const self: Laya8ClientNew = this;

		const hallLink: Link = new Link();
		hallLink.connect(gameHost, gamePort, id);

		this.hallServerInfoMap[id] = serverInfo;
		serverInfo.link = hallLink;

		hallLink.on('connected', (serverId: number): void => {
			logger.debug('已经连接到 Hall #%d 服务器，准备提供自己的游戏 Id：%d', serverId, self.gameId);

			// const myLink: Link = self.hallServerInfoMap[serverId].link;

			// 游戏模块握手
			// if (myLink && myLink.isConnected) {
				const message: Object = {
					url: 'game.IAmGame',
					params: {
						gameid: self.gameId,
						serverid: self.serverId,
						ip: self.myInfo.ip + ':' + self.myInfo.port,
						bootup: self.wasntConnected ? 1 : 0
					}
				};

				self.wasntConnected = false;

				logger.debug('向 Hall #%d 服务器发送数据：%j', serverId, message);

				hallLink.sendPackage(message);
			// } else {
				// logger.warn('Hall #%d 服务器并没有连接，但是尝试发送握手数据：');
			// }

			if (_.isFunction(self.onOpenCallback)) {
				self.onOpenCallback(null, self.myInfo);

				self.onOpenCallback = null;
			}
		});

		hallLink.on('end', (): void => {
			logger.debug('Hall #%d 连接终止，当前 Hall 连接状态：%j', hallLink.linkId, hallLink.isConnected);
		});

		hallLink.on('error', (err: Error): void => {
			logger.debug('Hall #%d 连接出现错误：%s，当前 Hall 连接状态：%j', hallLink.linkId, err.message, hallLink.isConnected);
		});

		hallLink.on('package', (results: Array<Object>): void => {
			for (let i: number = 0, m: number = results.length; i < m; i++) {
				const result: Object = results[i];
				const url: string = result['url'];
				const params: Object = result['params'];

				logger.debug('处理来自 Hall #%d 连接的消息：%j', hallLink.linkId, result);

				// 检查全局侦听函数
				let arr3: Array<Function> = self.eventCbs[url];
				if (_.isArray(arr3)) {
					for (let j: number = 0, n: number = arr3.length; j < n; j++) {
						let cb: Function = arr3[j];
						if (_.isFunction(cb)) {
							cb(url, params);
						}
					}
				}

				// 检查单次侦听函数
				let arr4: Array<Function> = self.eventOnceCbs[url];
				if (_.isArray(arr4)) {
					for (let j: number = 0, n: number = arr4.length; j < n; j++) {
						let cb: Function = arr4[j];
						if (_.isFunction(cb)) {
							cb(url, params);
						}
					}
					arr4.length = 0;
				}

				// 检查单大厅连接级别的侦听
				for (let ids in this.hallServerInfoMap) {
					if (this.hallServerInfoMap[ids].link.isConnected) {
						let arr: Array<Function> = self.eventCbsSin[url + ids];
						if (_.isArray(arr)) {
							for (let j: number = 0, n: number = arr.length; j < n; j++) {
								let cb: Function = arr[j];
								if (_.isFunction(cb)) {
									cb(url + ids, params);
								}
							}
						}

						let arr2: Array<Function> = self.eventOnceCbsSin[url + ids];
						if (_.isArray(arr2)) {
							for (let j: number = 0, n: number = arr2.length; j < n; j++) {
								let cb: Function = arr2[j];
								if (_.isFunction(cb)) {
									cb(url + ids, params);
								}
							}
							arr2.length = 0;
						}
					}
				}
			}
		});

		return hallLink;
	}

	/**
	 *
	 * 关闭所有room
	 *
	 */
	private cleanHallClients(): void {
		for (let k in this.hallServerInfoMap) {
			const serverInfo: ServerInfo = this.hallServerInfoMap[k];
			serverInfo.dispose();

			delete this.hallServerInfoMap[k];
		}
	}

	/**
	 *
	 * 根据 hallId 关闭单个 Hall 连接
	 *
	 */
	private closeSingleHall(id: number): void {
		if (!!this.hallServerInfoMap[id]) {
			logger.debug('关闭到大厅服务器 #%d 的连接', id);
			const serverInfo: ServerInfo = this.hallServerInfoMap[id];
			serverInfo.dispose();

			delete this.hallServerInfoMap[id];
		}
	}

	public close(): void {
		this.cleanHallClients();
		this.cleanMasterClient();
	}

	public send(message: Object, id: number = 0): void {
		let link = this.getClient(id);
		if (link && link.isConnected && message) {
			logger.debug('向 Hall #%d 服务器发送数据：%j', link.linkId, message);
			link.send(JSON.stringify(message));
		} else if (!!link) {
			logger.warn('Hall #%d 服务器并没有连接，但是试图发送数据：%j', link.linkId, message);
		} else {
			logger.warn('Hall 服务器连接为空');
		}
	}

	private getClient(id: number = 0): Link {
		if (!id) {
			const array: Array<number> = [];
			let index: number = 0;

			for (let ids in this.hallServerInfoMap) {
				if (this.hallServerInfoMap[ids].link.isConnected) {
					index++;
					array.push(parseInt(ids));
				}
			}

			if (0 === index) {
				logger.warn('当前没有 Hall 服务器在线');
				return null;
			}

			id = array[Math.floor(Math.random() * index)];
		}

		return this.hallServerInfoMap[id].link;
	}

	private eventCbs: Object = {};
	private eventOnceCbs: Object = {};
	private eventCbsSin: Object = {};
	private eventOnceCbsSin: Object = {};

	public singleOn(event: string, callback: (url: string, params: Object) => void): void {
		if (!!event && _.isFunction(callback)) {
			let arr: Array<Function> = this.eventCbsSin[event];

			if (!_.isArray(arr)) {
				arr = this.eventCbsSin[event] = [];
			}

			arr.push(callback);
		}
	}

	public singleOff(event: string, callback: (url: string, params: Object) => void): void {
		if (!!event && _.isFunction(callback)) {
			let arr: Array<Function> = this.eventCbsSin[event];

			if (_.isArray(arr)) {
				for (let i = arr.length - 1, m = 0; i >= m; i--) {
					const cb: Function = arr[i];

					if (_.isFunction(cb) && cb === callback) {
						arr.splice(i, 1);
					}
				}
			}

			arr = this.eventOnceCbsSin[event];

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

	public singleOnce(event: string, callback: (url: string, params: Object) => void): void {
		if (!!event && _.isFunction(callback)) {
			const arr: Array<Function> = this.eventOnceCbsSin[event];

			if (_.isArray(arr)) {
				arr.push(callback);
			} else {
				this.eventOnceCbsSin[event] = [callback];
			}
		}
	}

	public once(event: string, callback: (url: string, params: Object) => void): void {
		if (!!event && _.isFunction(callback)) {
			const arr: Array<Function> = this.eventOnceCbs[event];

			if (_.isArray(arr)) {
				arr.push(callback);
			} else {
				this.eventOnceCbs[event] = [callback];
			}
		}
	}

	public on(event: string, callback: (url: string, params: Object) => void): void {
		if (!!event && _.isFunction(callback)) {
			let arr: Array<Function> = this.eventCbs[event];
			if (!_.isArray(arr)) {
				arr = [];
			}
			arr.push(callback);
			this.eventCbs[event] = arr;
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
	 * @param serverId    调用经历的服务器 Id
	 * @param timeout     请求超时的毫秒数。不提供该参数，则默认值为 3000（3 秒）
	 */
	public request(request: string, response: string, params: any, matches: any, callback: (err: Error, result?: any) => void, serverId: number = 0, timeout: number = 3000): void {
		const link: Link = this.getClient(serverId);

		if (link && link.isConnected) {
			const self: Laya8ClientNew = this;
			const sendUrl: string = link.linkId ? response + link.linkId : response;

			let timeoutHandler: any = null;

			if (timeout > 0) {
				const timeoutCb: () => void = (): void => {
					self.singleOff(sendUrl, cb);
					return callback(new Error('[错误] 请求超时！'));
				};
				timeoutHandler = setTimeout(timeoutCb, timeout);
			}

			const cb: (url: string, resultParams?: any) => void = (url: string, params2: any): void => {
				if (null === params2 || undefined === params2) {
					callback(new Error('[错误] 未获得正确的返回数据：' + JSON.stringify(params2)));
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

										for (let i = 0, m = value1.length; i < m; i++) {
											const k1: any = value1[i];
											if (undefined === value2[k1]) {
												isMatch = false;

												break;
											}
										}

										if (isMatch) {
											continue;
										}
									}
								} else if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
									let isMatch: Boolean = true;

									for (let k in value1) {
										if (undefined === value2[k]) {
											isMatch = false;

											break;
										}
									}

									if (isMatch) {
										continue;
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

							self.singleOff(url, cb);
							return callback(null, params2);
						}
					} else {
						if (!!timeoutHandler) {
							clearTimeout(timeoutHandler);
						}

						self.singleOff(url, cb);
						return callback(null, params2);
					}
				}
			};

			this.singleOn(sendUrl, cb);
			this.send({url: request, params: params}, serverId);

		} else {
			return callback(new Error('[错误] 尚未连接到 Laya8 集群'));
		}
	}

	/**
	 * 通用的通知接口。通知是单向的通讯，不要求反馈
	 *
	 * @param request     请求名
	 * @param params      参数对象
	 * @param id          服务器 Id
	 */
	public notify(request: string, params: any, id: number = 0): void {
		this.send({url: request, params: params}, id);
	}

	/*private packageBuffer: Buffer = Buffer.alloc(0xFFFF, 0);
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
		for (let i: number = 0, m: number = this.packagePos, level: number = 0; i < m; i++) {
			const c: number = this.packageBuffer[i];

			switch (c) {
				case leftB:
					level++;

					break;

				case rightB:
					if (level > 0)
						level--;
					else
						logger.warn('出现了 level 降到 0 以下的 bug');

					break;
			}

			if (level === 0) {
				const endPos: number = i + 1;
				const pkg: string = this.packageBuffer.toString('utf8', startPos, endPos);
				result.push(JSON.parse(pkg));

				startPos = endPos;
			}
		}

		this.packageBuffer.copy(this.packageBuffer, 0, startPos, this.packagePos);
		this.packagePos -= startPos;

		return result;
	}*/

	private static writePackageTo(socket: Link, url: string, params: Object = {}): void {
		logger.debug('[Write Package] 向 %s:%d 写入消息：%s -> %j', socket.getRemoteAddress(), socket.getRemotePort(), url, params);
		socket.send('{"url": "' + url + '", "params": ' + JSON.stringify(params) + '}');
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

		for (let k in this.eventOnceCbsSin) {
			let v: Array<Function> = this.eventOnceCbsSin[k];

			if (_.isArray(v)) {
				v.length = 0;
			}

			delete this.eventOnceCbsSin[k];
		}

		for (let k in this.eventOnceCbsSin) {
			let v: Array<Function> = this.eventOnceCbsSin[k];

			if (_.isArray(v)) {
				v.length = 0;
			}

			delete this.eventOnceCbsSin[k];
		}
	}

	public listRanks(callback: (err: Error, ranks?: Array<any>) => void, id: number = 0) {
		this.request('room.rank.listRanks', 'game.listRanksResult', {}, {}, (err: Error, params: Object): void => {
			if (!err) {
				const ranks: Array<Object> = params['ranks'];

				if (_.isArray(ranks)) {
					callback(null, ranks);
				} else {
					callback(new Error('[错误] 获取排行榜配置时出错，返回了文本：' + JSON.stringify(params)));
				}

				ranks.length = 0;
				callback = null;
				params = null;
			}
		});
		/*let link = this.getClient(id);
		if (link && link.isConnected) {
			this.singleOnce('game.listRanksResult' + link.linkId, (url: string, params: any): void => {
				const ranks: Array<any> = params['ranks'];

				if (_.isArray(ranks)) {
					callback(null, params['ranks']);
				} else {
					callback(new Error('[错误] 获取排行榜配置时出错，返回了文本：' + JSON.stringify(params)));
				}
				callback = null;
				params = null;
			});
			let roomClient = this.getClient(id);
			Laya8ClientNew.writePackageTo(roomClient, 'room.rank.listRanks');
		} else if (_.isFunction(callback)) {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}*/
	}

	public updateUser(rankId: number, userId: number, value: number, id: number = 0) {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			Laya8ClientNew.writePackageTo(link, 'room.rank.updateUser', {rankId: rankId, userId: userId, value: value});
		}
	}

	public getUserRank(userId: number, callback: (err: Error, userRanks?: Array<any>) => void, id: number = 0): any {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			const requestEvent: string = 'room.rank.getUserRank';
			const responseEvent: string = 'c.user.getUserRankResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
				if (!!params) {
					const resultUserId: number = params['UserId'];

					if (resultUserId === userId) {
						self.singleOff(responseEvent, cb);

						callback(null, params['UserRanks']);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的排行榜数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId}}, id);

			return cb;

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public getPrevRangedRank(rankId: number, begin: number, end: number, callback: (err: Error, ranks?: Array<any>) => void, id: number = 0): void {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			const requestEvent: string = 'room.rank.getPrevRangedRank';
			const responseEvent: string = 'room.rank.getPrevRangedRankResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
				if (!!params) {
					const resultRankId: number = params['rankId'];
					const resultBegin: number = params['begin'];
					const resultEnd: number = params['end'];

					if (rankId === resultRankId && begin === resultBegin && end === resultEnd) {
						self.singleOff(responseEvent, cb);

						callback(null, params['ranks']);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的排行榜上一轮数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);

			this.send({url: requestEvent, params: {rankId: rankId, begin: begin, end: end}}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public getUserBasicData(userId: number, callback: (err: Error, userBasicData?: any) => void, id: number = 0): void {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			const requestEvent: string = 'room.platform.getUserBasicData';
			const responseEvent: string = 'user.getUserBasicDataResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
				if (!!params) {
					const resultUserId: number = params['userId'];

					if (resultUserId === userId) {
						self.singleOff(responseEvent, cb);

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

			this.singleOn(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId}}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public setUserBasicData(userId: number, userBasicData: any, callback: (err: Error, isSuccess?: Boolean) => void, id: number = 0): void {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			const requestEvent: string = 'room.platform.setUserBasicData';
			const responseEvent: string = 'user.setUserBasicDataResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
				if (!!params) {
					const resultUserId: number = params['userId'];

					if (resultUserId === userId) {
						self.singleOff(responseEvent, cb);

						return callback(null, true);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的用户平台数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId, userBasicData: userBasicData}}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public listMalls(callback: (err: Error, malls?: Array<any>) => void, id: number = 0) {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			const requestEvent: string = 'room.mall.listMalls';
			const responseEvent: string = 'mall.listMallsResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
				if (!!params) {
					const malls: Array<any> = params['malls'];

					if (_.isArray(malls)) {
						self.singleOff(responseEvent, cb);

						return callback(null, malls);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的商城数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);

			this.send({url: requestEvent, params: {}}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public listGoods(mallId: number, callback: (err: Error, goods?: Array<any>) => void, id: number = 0) {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			const requestEvent: string = 'room.mall.listGoods';
			const responseEvent: string = 'mall.listGoodsResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
				if (!!params) {
					const resultMallId: number = params['mallId'];
					const goodses: Array<any> = params['goodses'];

					if (mallId === resultMallId && _.isArray(goodses)) {
						self.singleOff(responseEvent, cb);

						return callback(null, goodses);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的商品数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);

			this.send({url: requestEvent, params: {mallId: mallId}}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public purchase(mallId: number, goodsId: number, itemInGoodsId: number, userId: number, backpackId: number, amount: number, callback: (err: Error, items?: Array<any>) => void, id: number = 0) {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			const requestEvent: string = 'room.mall.purchase';
			const responseEvent: string = 'mall.purchaseResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
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
						self.singleOff(responseEvent, cb);

						return callback(null, items);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的购买数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);

			this.send({
				url: requestEvent,
				params: {
					mallId: mallId,
					goodsId: goodsId,
					itemInGoodsId: itemInGoodsId,
					userId: userId,
					backpackId: backpackId,
					amount: amount
				}
			}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public listBackpacks(userId: number, callback: (err: Error, goods?: Array<any>) => void, id: number = 0) {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			const requestEvent: string = 'room.backpack.listBackpacks';
			const responseEvent: string = 'backpack.listBackpacksResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
				if (!!params) {
					const userId2: number = params['userId'];
					const backpacks: Array<any> = params['backpacks'];

					if (
						userId === userId2 &&
						_.isArray(backpacks)
					) {
						self.singleOff(responseEvent, cb);

						return callback(null, backpacks);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的背包数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId}}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public unlockCells(userId: number, backpackId: number, unlockTo: number, callback: (err: Error, isSuccess?: boolean) => void, id: number = 0) {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			const requestEvent: string = 'room.backpack.unlockCells';
			const responseEvent: string = 'backpack.unlockCellsResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
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
						self.singleOff(responseEvent, cb);

						return callback(null, isSuccess);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的格子解锁数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);

			this.send({url: requestEvent, params: {userId: userId, backpackId: backpackId, unlockTo: unlockTo}}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public addItem(userId: number, backpackId: number, itemStaticId: number, amount: number, callback: (err: Error, isSuccess?: boolean, items?: Array<any>) => void, id: number = 0) {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			if (amount <= 0) {
				return callback(new Error('[错误] 添加道具时不能指定负数或 0 个数量'));
			}

			const requestEvent: string = 'room.backpack.addItem';
			const responseEvent: string = 'backpack.addItemResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
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
						amount === amount2 && !!items
					) {
						self.singleOff(responseEvent, cb);

						return callback(null, isSuccess, items);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的增加道具数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);

			this.send({
				url: requestEvent,
				params: {userId: userId, backpackId: backpackId, itemStaticId: itemStaticId, amount: amount}
			}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public removeItem(userId: number, backpackId: number, itemStaticId: number, amount: number, callback: (err: Error, isSuccess?: boolean, items?: Array<any>) => void, id: number = 0) {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			if (amount <= 0) {
				return callback(new Error('[错误] 减少道具时不能指定负数或 0 个数量'));
			}

			const requestEvent: string = 'room.backpack.removeItem';
			const responseEvent: string = 'backpack.addItemResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
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
						amount === -amount2 && !!items
					) {
						self.singleOff(responseEvent, cb);

						return callback(null, isSuccess, items);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的减少道具数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);

			this.send({
				url: requestEvent,
				params: {userId: userId, backpackId: backpackId, itemStaticId: itemStaticId, amount: -amount}
			}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public moveItem(userId: number, fromBackpackId: number, toBackpackId: number, itemStaticId: number, amount: number, callback: (err: Error, isSuccess?: boolean, fromItem?: any, toItem?: any) => void, id: number = 0) {
		let link = this.getClient(id);
		if (link && link.isConnected) {
			if (amount <= 0) {
				return callback(new Error('[错误] 减少道具时不能指定负数或 0 个数量'));
			}

			const requestEvent: string = 'room.backpack.moveItem';
			const responseEvent: string = 'backpack.moveItemResult' + link.linkId;

			const self = this;
			const cb: (url: string, params?: Object) => void = (url: string, params: Object): void => {
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
						amount === amount2 && !!fromItem && !!toItem
					) {
						self.singleOff(responseEvent, cb);

						return callback(null, fromItem, toItem);
					}
				} else {
					callback(new Error('[错误] 没有拿到正确的移动道具数据：' + JSON.stringify(params)));
				}
			};

			this.singleOn(responseEvent, cb);
			this.send({
				url: requestEvent,
				params: {
					userId: userId,
					fromBackpackId: fromBackpackId,
					toBackpackId: toBackpackId,
					itemStaticId: itemStaticId,
					amount: amount
				}
			}, id);

		} else {
			return callback(new Error('[错误] 尚未连接到 Hall 服务器'));
		}
	}

	public useItemResult(requestId: number, userId: number, backpackId: number, itemStaticId: number, amount: number, isSuccess: boolean, items: Array<any>, id: number = 0): void {
		this.send({
			url: "room.backpack.useItemResult", params: {
				requestId: requestId,
				userId: userId,
				backpackId: backpackId,
				itemStaticId: itemStaticId,
				amount: amount,
				isSuccess: isSuccess,
				items: items
			}
		}, id);
	}

	private filter: IBanWordsFilter;

	public initBanWordsFilter(wordsPath: string): void {
		this.filter = new THMBanWordsFilter(wordsPath);
	}

	public hasBanWords(message: string): boolean {
		if (!!this.filter) {
			return this.filter.hasBanWords(message);
		} else {
			logger.warn('脏字过滤器尚未创建，请先调用 initBanWordsFilter 函数创建该过滤器');
			return false;
		}
	}
}