"use strict";
const ServerInfo_1 = require("./ServerInfo");
const http = require('http');
const net = require('net');
const _ = require('lodash');
const logger_1 = require("../utils/logger");
const THMBanWordsFilter_1 = require("../utils/banWords/THMBanWordsFilter");
const logger = logger_1.getLogger(__filename, 'Laya8Client');
/**
 * Created by Bob Jiang on 2016/10/9.
 */
class Laya8Client {
    constructor() {
        this.masterInfo = new ServerInfo_1.ServerInfo();
        this.roomInfo = new ServerInfo_1.ServerInfo();
        this.myInfo = new ServerInfo_1.ServerInfo();
        this.wasntConnected = true;
        this.eventCbs = {};
        this.eventOnceCbs = {};
        this.packageBuffer = Buffer.alloc(0xFFFF, 0);
        this.packagePos = 0;
    }
    open(configUrl, serverId, callback) {
        const pos1 = configUrl.indexOf('://');
        if (pos1 === -1) {
            logger.error('Master Config URL is invalid: ' + configUrl);
            return;
        }
        const pos2 = configUrl.indexOf('/', pos1 + 3);
        const hostname = configUrl.substring(pos1 + 3, pos2);
        const port = 80;
        const path = configUrl.substring(pos2);
        const options = {
            hostname: hostname,
            port: port,
            path: path,
            method: 'GET'
        };
        const self = this;
        this.isMasterConnected = false;
        this.isRoomConnected = false;
        this.serverId = serverId;
        const request = http.request(options, function (response) {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                const result = JSON.parse(chunk);
                const masterIp = result['masterIP'];
                const masterPort = result['masterPort'];
                self.masterInfo.ip = masterIp;
                self.masterInfo.port = masterPort;
                self.masterInfo.type = 1;
                self.onOpenCallback = callback;
                self.connectToMaster(masterIp, masterPort);
            });
            response.on('end', () => {
                logger.debug('HTTP 请求结束');
            });
        });
        request.end();
    }
    connectToMaster(masterHost, masterPort) {
        logger.debug('准备连接到 Master：' + masterHost + ':' + masterPort);
        this.cleanMasterClient();
        const self = this;
        // TODO：需要更强健的连接逻辑，包括断线重连，超时侦听等
        this.masterClient = net.connect({ host: masterHost, port: masterPort }, () => {
            logger.debug('已经连接到 Master，开始握手提供本机 ServerId：%d', self.serverId);
            self.isMasterConnected = true;
            self.masterClient.write('{"url":"master.ServerMgr.apply","params":{"svid":"' + self.serverId + '"}}');
        });
        this.masterClient.on('end', () => {
            logger.debug('Master 连接终止，当前 Master 连接状态：%j', self.isMasterConnected);
            self.cleanMasterClient();
            // 启动延时重连
            setTimeout(self.connectToMaster.bind(self), 3000, masterHost, masterPort);
        });
        this.masterClient.on('error', (err) => {
            logger.debug('Master 连接出现错误：%s，当前 Master 连接状态：%j', err.message, self.isMasterConnected);
            if (self.isMasterConnected) {
            }
            self.cleanMasterClient();
            // 启动延时重连
            setTimeout(self.connectToMaster.bind(self), 3000, masterHost, masterPort);
        });
        this.masterClient.on('data', (data) => {
            logger.debug('Master 返回：%s', data);
            let results = self.splitBufferToMessages(data);
            for (let i = 0, m = results.length; i < m; i++) {
                const result = results[i];
                const params = result['params'];
                switch (result['url']) {
                    case 'master.error':
                        if (_.isFunction(self.onOpenCallback)) {
                            self.onOpenCallback(new Error(params['msg']));
                            self.onOpenCallback = null;
                        }
                        self.dispose();
                        break;
                    case 'master.applyok':
                        self.myInfo = new ServerInfo_1.ServerInfo();
                        self.myInfo.id = params['id'];
                        self.myInfo.type = params['type'];
                        self.myInfo.idc = params['idc'];
                        self.myInfo.ip = params['ip'];
                        self.myInfo.port = params['port'];
                        const gameIdList = params['gameidlist'];
                        if (_.isArray(gameIdList) && gameIdList.length > 0) {
                            self.gameId = parseInt(gameIdList[0]);
                            logger.debug('[applyok] 自己的游戏 Id 为：%d', self.gameId);
                        }
                        else {
                            const errMsg = '来自 Master 的服务器 Game Id 列表无效：' + JSON.stringify(result);
                            logger.error(errMsg);
                            self.cleanMasterClient();
                            if (_.isFunction(self.onOpenCallback)) {
                                self.onOpenCallback(new Error(errMsg));
                            }
                            return;
                        }
                        // 查询我要找得  room server
                        Laya8Client.writePackageTo(self.masterClient, 'master.ServerMgr.queryMyRoomServer', { gameid: self.gameId });
                        break;
                    case 'master.myroomserver':
                        logger.debug('查询到房间服务器信息');
                        self.roomInfo = new ServerInfo_1.ServerInfo();
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
    cleanMasterClient() {
        this.cleanMasterHeartBeatTimeCounting();
        if (!!this.masterClient) {
            try {
                this.masterClient.end();
            }
            catch (err) {
                logger.error('关闭 Master 连接 %s:%d -> %s:%d 时出错：%s', this.roomClient.localAddress, this.roomClient.localPort, this.roomClient.remoteAddress, this.roomClient.remotePort, err.message);
            }
            this.masterClient.destroy();
        }
        this.masterClient = null;
        this.isMasterConnected = false;
    }
    connectToRoom(gameHost, gamePort) {
        if (!this.isMasterConnected) {
            logger.warn('当前未能连接到 Master 服务器，不能独立连接到 Room 服务器中！');
            return;
        }
        logger.debug('连接到 Room 服务器 %s:%d', gameHost, gamePort);
        this.cleanRoomClient();
        const self = this;
        // TODO：需要更强健的连接逻辑，包括断线重连，超时侦听等
        this.roomClient = net.connect({ host: gameHost, port: gamePort }, () => {
            logger.debug('已经连接到 Room 服务器，准备提供自己的游戏 Id：%d', self.gameId);
            // 通知外界连接成功
            self.isRoomConnected = true;
            // 游戏模块握手
            self.send({ url: 'game.IAmGame', params: {
                    gameid: self.gameId,
                    serverid: self.serverId,
                    ip: self.myInfo.ip + ':' + self.myInfo.port,
                    bootup: self.wasntConnected ? 1 : 0
                } });
            self.wasntConnected = false;
            if (_.isFunction(self.onOpenCallback)) {
                self.onOpenCallback(null, self.myInfo);
                self.onOpenCallback = null;
            }
        });
        this.roomClient.on('end', () => {
            logger.debug('Room 连接终止，当前 Room 连接状态：%j', self.isRoomConnected);
            self.cleanRoomClient();
            // 启动延时重连
            setTimeout(self.connectToRoom.bind(self), 3000, gameHost, gamePort);
        });
        this.roomClient.on('error', (err) => {
            logger.debug('Room 连接出现错误：%s，当前 Room 连接状态：%j', err.message, self.isRoomConnected);
            if (self.isRoomConnected) {
            }
            self.cleanRoomClient();
            // 启动延时重连
            setTimeout(self.connectToRoom.bind(self), 3000, gameHost, gamePort);
        });
        this.roomClient.on('data', (data) => {
            logger.debug('Room 返回：%s', data);
            const results = self.splitBufferToMessages(data);
            for (let i = 0, m = results.length; i < m; i++) {
                const result = results[i];
                const url = result['url'];
                const params = result['params'];
                const arr = self.eventCbs[url];
                if (_.isArray(arr)) {
                    for (let j = 0, n = arr.length; j < n; j++) {
                        let cb = arr[j];
                        if (_.isFunction(cb)) {
                            cb(url, params);
                        }
                    }
                }
                const arr2 = self.eventOnceCbs[url];
                if (_.isArray(arr2)) {
                    for (let j = 0, n = arr2.length; j < n; j++) {
                        let cb = arr2[j];
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
    cleanRoomClient() {
        this.cleanRoomHeartBeatTimeCounting();
        if (!!this.roomClient) {
            try {
                this.roomClient.end();
            }
            catch (err) {
                logger.error('关闭 Room 连接 %s:%d -> %s:%d 时出错：%s', this.roomClient.localAddress, this.roomClient.localPort, this.roomClient.remoteAddress, this.roomClient.remotePort, err.message);
            }
            this.roomClient.destroy();
        }
        this.roomClient = null;
        this.isRoomConnected = false;
    }
    close() {
        this.cleanRoomClient();
        this.cleanMasterClient();
        this.cleanMasterHeartBeatTimeCounting();
        this.cleanRoomHeartBeatTimeCounting();
    }
    getIsConnected() {
        return this.isRoomConnected;
    }
    send(message) {
        if (!!this.getIsConnected() && !!this.roomClient && !!message) {
            logger.debug('向 Room 服务器发送数据：%j', message);
            this.roomClient.write(JSON.stringify(message));
            this.startRoomHeartBeatTimeCounting();
        }
        else {
            logger.warn('Room 服务器并没有连接，但是尝试发送数据：%j', message);
        }
    }
    startMasterHeartBeatTimeCounting() {
        this.cleanMasterHeartBeatTimeCounting();
        this.masterHeartBeatTimeout = setTimeout(this.onMasterHeartBeatTimeoutHandler.bind(this), 10000);
    }
    cleanMasterHeartBeatTimeCounting() {
        if (!!this.masterHeartBeatTimeout) {
            clearTimeout(this.masterHeartBeatTimeout);
            this.masterHeartBeatTimeout = null;
        }
    }
    onMasterHeartBeatTimeoutHandler() {
        if (this.isMasterConnected) {
            Laya8Client.writePackageTo(this.masterClient, 'ServerMgr.report', { onlinenum: 0 });
        }
        this.startMasterHeartBeatTimeCounting();
    }
    startRoomHeartBeatTimeCounting() {
        this.cleanRoomHeartBeatTimeCounting();
        this.roomHeartBeatTimeout = setTimeout(this.onRoomHeartBeatTimeoutHandler.bind(this), 10000);
    }
    cleanRoomHeartBeatTimeCounting() {
        if (!!this.roomHeartBeatTimeout) {
            clearTimeout(this.roomHeartBeatTimeout);
            this.roomHeartBeatTimeout = null;
        }
    }
    onRoomHeartBeatTimeoutHandler() {
        this.send({ url: 'game.hb', params: 1 });
    }
    on(event, callback) {
        if (!!event && _.isFunction(callback)) {
            let arr = this.eventCbs[event];
            if (!_.isArray(arr)) {
                this.eventCbs[event] = arr = [];
            }
            arr.push(callback);
        }
    }
    once(event, callback) {
        if (!!event && _.isFunction(callback)) {
            let arr = this.eventOnceCbs[event];
            if (!_.isArray(arr)) {
                this.eventOnceCbs[event] = arr = [];
            }
            arr.push(callback);
        }
    }
    off(event, callback) {
        if (!!event && _.isFunction(callback)) {
            let arr = this.eventCbs[event];
            if (_.isArray(arr)) {
                for (let i = arr.length - 1, m = 0; i >= m; i--) {
                    const cb = arr[i];
                    if (_.isFunction(cb) && cb === callback) {
                        arr.splice(i, 1);
                    }
                }
            }
            arr = this.eventOnceCbs[event];
            if (_.isArray(arr)) {
                for (let i = arr.length - 1, m = 0; i >= m; i--) {
                    const cb = arr[i];
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
    request(request, response, params, matches, callback, timeout = 3000) {
        if (this.getIsConnected()) {
            const self = this;
            let timeoutHandler = null;
            if (timeout > 0) {
                const timeoutCb = () => {
                    self.off(response, cb);
                    return callback(new Error('[错误] 请求超时！'));
                };
                timeoutHandler = setTimeout(timeoutCb, timeout);
            }
            const cb = (url, params2) => {
                if (null === params2 || undefined === params2) {
                    callback(new Error('[错误] 没有拿到正确的返回数据：' + JSON.stringify(params2)));
                }
                else {
                    // 进行参数匹配检测
                    if (!!matches) {
                        let isMyResponse = true;
                        for (let key1 in matches) {
                            const value1 = params[key1];
                            const key2 = matches[key1];
                            // 如果请求参数里存在要检测的值，且检查参数里存在要监测的属性名
                            if ((null !== value1 || undefined !== value1) && !!key2) {
                                const value2 = params2[key2];
                                if (value1 == value2) {
                                    continue;
                                }
                                else if (_.isArray(value1)) {
                                    if (_.isArray(value2) && _.isEqual(value1, value2)) {
                                        continue;
                                    }
                                    else if (_.isPlainObject(value2)) {
                                        let isMatch = true;
                                        for (let i = 0, m = value1.length; i < m; i++) {
                                            const k1 = value1[i];
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
                            }
                            else {
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
                    }
                    else {
                        if (!!timeoutHandler) {
                            clearTimeout(timeoutHandler);
                        }
                        self.off(response, cb);
                        return callback(null, params2);
                    }
                }
            };
            this.on(response, cb);
            this.send({ url: request, params: params });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Laya8 服务器'));
        }
    }
    /**
     * 通用的通知接口。通知是单向的通讯，不要求反馈
     *
     * @param request     请求名
     * @param params      参数对象
     */
    notify(request, params) {
        if (this.getIsConnected()) {
            this.send({ url: request, params: params });
        }
        else {
            logger.error('[错误] 尚未连接到 Laya8 服务器');
        }
    }
    splitBufferToMessages(input) {
        this.packagePos += input.copy(this.packageBuffer, this.packagePos);
        const leftB = '{'.charCodeAt(0);
        const rightB = '}'.charCodeAt(0);
        if (this.packageBuffer[0] !== leftB) {
            logger.error('数据内容没有以字符 { 开始，格式错误：%s', this.packageBuffer);
            return [];
        }
        const result = [];
        let startPos = 0;
        for (let i = 0, m = this.packagePos, level = 0; i < m; i++) {
            const c = this.packageBuffer[i];
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
                const endPos = i + 1;
                const pkg = this.packageBuffer.toString('utf8', startPos, endPos);
                result.push(JSON.parse(pkg));
                startPos = endPos;
            }
        }
        this.packageBuffer.copy(this.packageBuffer, 0, startPos, this.packagePos);
        this.packagePos -= startPos;
        return result;
    }
    static writePackageTo(socket, url, params = {}) {
        logger.debug('[Write Package] 向 %s:%d 写入消息：%s -> %j', socket.remoteAddress, socket.remotePort, url, params);
        socket.write('{"url": "' + url + '", "params": ' + JSON.stringify(params) + '}');
    }
    dispose() {
        this.close();
        for (let k in this.eventCbs) {
            let v = this.eventCbs[k];
            if (_.isArray(v)) {
                v.length = 0;
            }
            delete this.eventCbs[k];
        }
        for (let k in this.eventOnceCbs) {
            let v = this.eventOnceCbs[k];
            if (_.isArray(v)) {
                v.length = 0;
            }
            delete this.eventOnceCbs[k];
        }
    }
    listRanks(callback) {
        if (this.getIsConnected()) {
            this.once('game.listRanksResult', (url, params) => {
                const ranks = params['ranks'];
                if (_.isArray(ranks)) {
                    callback(null, params['ranks']);
                }
                else {
                    callback(new Error('[错误] 获取排行榜配置时出错，返回了文本：' + JSON.stringify(params)));
                }
                callback = null;
                params = null;
            });
            Laya8Client.writePackageTo(this.roomClient, 'room.rank.listRanks');
        }
        else if (_.isFunction(callback)) {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    updateUser(rankId, userId, value) {
        if (this.getIsConnected()) {
            Laya8Client.writePackageTo(this.roomClient, 'room.rank.updateUser', { rankId: rankId, userId: userId, value: value });
        }
    }
    getUserRank(userId, callback) {
        if (this.getIsConnected()) {
            const requestEvent = 'room.rank.getUserRank';
            const responseEvent = 'c.user.getUserRankResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const resultUserId = params['UserId'];
                    if (resultUserId === userId) {
                        self.off(responseEvent, cb);
                        callback(null, params['UserRanks']);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的排行榜数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { userId: userId } });
            return cb;
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    getPrevRangedRank(rankId, begin, end, callback) {
        if (this.getIsConnected()) {
            const requestEvent = 'room.rank.getPrevRangedRank';
            const responseEvent = 'room.rank.getPrevRangedRankResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const resultRankId = params['rankId'];
                    const resultBegin = params['begin'];
                    const resultEnd = params['end'];
                    if (rankId === resultRankId && begin === resultBegin && end === resultEnd) {
                        self.off(responseEvent, cb);
                        callback(null, params['ranks']);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的排行榜上一轮数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { rankId: rankId, begin: begin, end: end } });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    getUserBasicData(userId, callback) {
        if (this.getIsConnected()) {
            const requestEvent = 'room.platform.getUserBasicData';
            const responseEvent = 'user.getUserBasicDataResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const resultUserId = params['userId'];
                    if (resultUserId === userId) {
                        self.off(responseEvent, cb);
                        const userBasicData = params['userBasicData'];
                        if (!!userBasicData) {
                            return callback(null, userBasicData);
                        }
                        else {
                            return callback(new Error('[错误] 请求用户 #' + userId + ' 的基础数据，没有获得正确的返回数据：' + JSON.stringify(params)));
                        }
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的用户平台数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { userId: userId } });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    setUserBasicData(userId, userBasicData, callback) {
        if (this.getIsConnected()) {
            const requestEvent = 'room.platform.setUserBasicData';
            const responseEvent = 'user.setUserBasicDataResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const resultUserId = params['userId'];
                    if (resultUserId === userId) {
                        self.off(responseEvent, cb);
                        return callback(null, true);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的用户平台数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { userId: userId, userBasicData: userBasicData } });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    listMalls(callback) {
        if (this.getIsConnected()) {
            const requestEvent = 'room.mall.listMalls';
            const responseEvent = 'mall.listMallsResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const malls = params['malls'];
                    if (_.isArray(malls)) {
                        self.off(responseEvent, cb);
                        return callback(null, malls);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的商城数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: {} });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    listGoods(mallId, callback) {
        if (this.getIsConnected()) {
            const requestEvent = 'room.mall.listGoods';
            const responseEvent = 'mall.listGoodsResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const resultMallId = params['mallId'];
                    const goodses = params['goodses'];
                    if (mallId === resultMallId && _.isArray(goodses)) {
                        self.off(responseEvent, cb);
                        return callback(null, goodses);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的商品数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { mallId: mallId } });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    purchase(mallId, goodsId, itemInGoodsId, userId, backpackId, amount, callback) {
        if (this.getIsConnected()) {
            const requestEvent = 'room.mall.purchase';
            const responseEvent = 'mall.purchaseResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const resultMallId = params['mallId'];
                    const resultGoodsId = params['goodsId'];
                    const resultItemInGoodsId = params['itemInGoodsId'];
                    const resultUserId = params['userId'];
                    const resultBackpackId = params['backpackId'];
                    const resultAmount = params['amount'];
                    const items = params['items'];
                    if (mallId === resultMallId &&
                        goodsId === resultGoodsId &&
                        itemInGoodsId === resultItemInGoodsId &&
                        userId === resultUserId &&
                        backpackId === resultBackpackId &&
                        amount === resultAmount &&
                        _.isArray(items)) {
                        self.off(responseEvent, cb);
                        return callback(null, items);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的购买数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { mallId: mallId, goodsId: goodsId, itemInGoodsId: itemInGoodsId, userId: userId, backpackId: backpackId, amount: amount } });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    listBackpacks(userId, callback) {
        if (this.getIsConnected()) {
            const requestEvent = 'room.backpack.listBackpacks';
            const responseEvent = 'backpack.listBackpacksResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const userId2 = params['userId'];
                    const backpacks = params['backpacks'];
                    if (userId === userId2 &&
                        _.isArray(backpacks)) {
                        self.off(responseEvent, cb);
                        return callback(null, backpacks);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的背包数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { userId: userId } });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    unlockCells(userId, backpackId, unlockTo, callback) {
        if (this.getIsConnected()) {
            const requestEvent = 'room.backpack.unlockCells';
            const responseEvent = 'backpack.unlockCellsResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const userId2 = params['userId'];
                    const backpackId2 = params['backpackId'];
                    const unlockTo2 = params['unlockTo'];
                    const isSuccess = params['isSucccess'];
                    if (userId === userId2 &&
                        backpackId === backpackId2 &&
                        unlockTo === unlockTo2) {
                        self.off(responseEvent, cb);
                        return callback(null, isSuccess);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的格子解锁数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { userId: userId, backpackId: backpackId, unlockTo: unlockTo } });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    addItem(userId, backpackId, itemStaticId, amount, callback) {
        if (this.getIsConnected()) {
            if (amount <= 0) {
                return callback(new Error('[错误] 添加道具时不能指定负数或 0 个数量'));
            }
            const requestEvent = 'room.backpack.addItem';
            const responseEvent = 'backpack.addItemResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const userId2 = params['userId'];
                    const backpackId2 = params['backpackId'];
                    const itemStaticId2 = params['itemStaticId'];
                    const amount2 = params['amount'];
                    const isSuccess = params['isSuccess'];
                    const items = params['items'];
                    if (userId === userId2 &&
                        backpackId === backpackId2 &&
                        itemStaticId === itemStaticId2 &&
                        amount === amount2 &&
                        !!items) {
                        self.off(responseEvent, cb);
                        return callback(null, isSuccess, items);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的增加道具数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { userId: userId, backpackId: backpackId, itemStaticId: itemStaticId, amount: amount } });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    removeItem(userId, backpackId, itemStaticId, amount, callback) {
        if (this.getIsConnected()) {
            if (amount <= 0) {
                return callback(new Error('[错误] 减少道具时不能指定负数或 0 个数量'));
            }
            const requestEvent = 'room.backpack.removeItem';
            const responseEvent = 'backpack.addItemResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const userId2 = params['userId'];
                    const backpackId2 = params['backpackId'];
                    const itemStaticId2 = params['itemStaticId'];
                    const amount2 = params['amount'];
                    const isSuccess = params['isSuccess'];
                    const items = params['items'];
                    if (userId === userId2 &&
                        backpackId === backpackId2 &&
                        itemStaticId === itemStaticId2 &&
                        amount === -amount2 &&
                        !!items) {
                        self.off(responseEvent, cb);
                        return callback(null, isSuccess, items);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的减少道具数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { userId: userId, backpackId: backpackId, itemStaticId: itemStaticId, amount: -amount } });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    moveItem(userId, fromBackpackId, toBackpackId, itemStaticId, amount, callback) {
        if (this.getIsConnected()) {
            if (amount <= 0) {
                return callback(new Error('[错误] 减少道具时不能指定负数或 0 个数量'));
            }
            const requestEvent = 'room.backpack.moveItem';
            const responseEvent = 'backpack.moveItemResult';
            const self = this;
            const cb = (url, params) => {
                if (!!params) {
                    const userId2 = params['userId'];
                    const fromBackpackId2 = params['fromBackpackId'];
                    const toBackpackId2 = params['toBackpackId'];
                    const itemStaticId2 = params['itemStaticId'];
                    const amount2 = params['amount'];
                    const isSuccess = params['isSuccess'];
                    const fromItem = params['fromItem'];
                    const toItem = params['toItem'];
                    if (userId === userId2 &&
                        fromBackpackId === fromBackpackId2 &&
                        toBackpackId === toBackpackId2 &&
                        itemStaticId === itemStaticId2 &&
                        amount === amount2 &&
                        !!fromItem &&
                        !!toItem) {
                        self.off(responseEvent, cb);
                        return callback(null, fromItem, toItem);
                    }
                }
                else {
                    callback(new Error('[错误] 没有拿到正确的移动道具数据：' + JSON.stringify(params)));
                }
            };
            this.on(responseEvent, cb);
            this.send({ url: requestEvent, params: { userId: userId, fromBackpackId: fromBackpackId, toBackpackId: toBackpackId, itemStaticId: itemStaticId, amount: amount } });
        }
        else {
            return callback(new Error('[错误] 尚未连接到 Room 服务器'));
        }
    }
    useItemResult(requestId, userId, backpackId, itemStaticId, amount, isSuccess, items) {
        if (this.getIsConnected()) {
            this.send({ url: "room.backpack.useItemResult", params: {
                    requestId: requestId,
                    userId: userId,
                    backpackId: backpackId,
                    itemStaticId: itemStaticId,
                    amount: amount,
                    isSuccess: isSuccess,
                    items: items
                } });
        }
        else {
            logger.error('[Use Item Result] 当前没能连接到大厅服务器');
        }
    }
    initBanWordsFilter(wordsPath) {
        this.filter = new THMBanWordsFilter_1.THMBanWordsFilter(wordsPath);
    }
    hasBanWords(message) {
        if (!!this.filter) {
            return this.filter.hasBanWords(message);
        }
        else {
            return false;
        }
    }
}
exports.Laya8Client = Laya8Client;
//# sourceMappingURL=Laya8Client.js.map