"use strict";
/**
 * 连接对象，封装了 Socket 类以及心跳检测的机制
 * Created by Bob Jiang on 2017/2/9.
 */
const net = require('net');
const events_1 = require("events");
const logger_1 = require("../utils/logger");
const logger = logger_1.getLogger(__filename, 'Laya8Client');
class Link extends events_1.EventEmitter {
    constructor(heartbeat = 10000, deadTimeout = 30000, reconnectInterval = 3000) {
        super();
        // 拆包机制
        this.packageBuffer = Buffer.alloc(0xFFFF, 0);
        this.packagePos = 0;
        this.socket = null;
        this.isConnected = false;
        this.heartbeatInterval = heartbeat;
        this.brokenInterval = deadTimeout;
        this.reconnectInterval = reconnectInterval;
    }
    connect(host, port, linkId) {
        this.close();
        this.host = host;
        this.port = port;
        this.linkId = linkId;
        const self = this;
        logger.debug('准备连接到服务器 #%d：%s:%d', linkId, host, port);
        self.socket = net.connect({ host: host, port: port }, () => {
            self.isConnected = true;
            logger.debug("成功连接到服务器 #%d：%s:%d", linkId, self.host, self.port);
            self.emit('connected', self.linkId);
            self.startHeartbeatTimeCounting();
            self.startBrokenTimeStartCounting();
        });
        self.socket.on('end', () => {
            logger.debug('服务器 #%d 连接中止，当前连接状态：%j', linkId, self.isConnected);
            self.isConnected = false;
            // 启动延时重连
            self.startReconnectTimeCounting();
            self.emit('end');
        });
        self.socket.on('error', (err) => {
            logger.debug('服务器 #%d 连接出错：%s，当前连接状态：%j', linkId, err.message, self.isConnected);
            self.isConnected = false;
            // 启动延时重连
            self.startReconnectTimeCounting();
            self.emit('error', err);
        });
        self.socket.on('data', (data) => {
            logger.debug('服务器 #%d 收到网络消息：%s', linkId, data);
            const results = self.splitBufferToMessages(data);
            self.emit('package', results);
            self.startBrokenTimeStartCounting();
        });
    }
    // 启动重连计时器
    startReconnectTimeCounting() {
        this.cleanReconnectTimeCounting();
        logger.debug('开始到服务器 #%d 链接的重连计时', this.linkId);
        this.reconnectTimeout = setTimeout(this.connect.bind(this), this.reconnectInterval, this.host, this.port, this.linkId);
    }
    cleanReconnectTimeCounting() {
        if (!!this.reconnectTimeout) {
            logger.debug('清理到服务器 #%d 链接的重连计时', this.linkId);
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
    }
    // 启动心跳计时
    startHeartbeatTimeCounting() {
        this.cleanHeartbeatTimeCounting();
        logger.debug('到服务器 #%d 链接启动心跳计时', this.linkId);
        let self = this;
        self.heartBeatTimeout = setTimeout(() => {
            if (self.isConnected) {
                logger.debug('向服务器 #%d 发送心跳，时间间隔 %d 秒', self.linkId, self.heartbeatInterval / 1000);
                self.send('{}');
            }
        }, self.heartbeatInterval);
    }
    // 清理心跳计时
    cleanHeartbeatTimeCounting() {
        if (!!this.heartBeatTimeout) {
            logger.debug('清理服务器 #%d 心跳计时器', this.linkId);
            clearTimeout(this.heartBeatTimeout);
            this.heartBeatTimeout = null;
        }
    }
    // 连接失活监测
    startBrokenTimeStartCounting() {
        this.cleanBrokenTimeCounting();
        logger.debug('到服务器 #%d 链接启动连接失活检测计时', this.linkId);
        let self = this;
        self.brokenTimeout = setTimeout(() => {
            logger.debug('向服务器 #%d 进行连接失活断开操作，时间间隔 %d 秒', self.linkId, self.brokenInterval / 1000);
            self.close();
            self.startReconnectTimeCounting();
        }, self.brokenInterval);
    }
    cleanBrokenTimeCounting() {
        if (!!this.brokenTimeout) {
            logger.debug('清理服务器 #%d 的连接失活监测计时器', this.linkId);
            clearTimeout(this.brokenTimeout);
            this.brokenTimeout = null;
        }
    }
    sendPackage(pkg) {
        if (null !== pkg) {
            this.send(JSON.stringify(pkg));
        }
    }
    send(content) {
        if (this.isConnected) {
            logger.debug('向服务器 #%d 写入内容：%s', this.linkId, content);
            this.socket.write(content);
            this.startHeartbeatTimeCounting();
        }
        else {
            logger.warn('服务器 #%d 尚未连接，但是收到了写入内容：%s', this.linkId, content);
        }
    }
    /**
     * 关闭连接
     * @param isShutdown    是否为完整关闭，包括移除所有的事件侦听器
     */
    close(isShutdown = false) {
        logger.debug('关闭到服务器 #%d 的连接', this.linkId);
        this.isConnected = false;
        this.cleanReconnectTimeCounting();
        this.cleanHeartbeatTimeCounting();
        this.cleanBrokenTimeCounting();
        if (isShutdown)
            this.removeAllListeners();
        if (!!this.socket) {
            try {
                this.socket.removeAllListeners();
                this.socket.end();
            }
            catch (err) {
                logger.error('关闭连接 %s:%d -> %s:%d 时出错：%s', this.getLocalAddress(), this.getLocalPort(), this.getRemoteAddress(), this.getRemotePort(), err.message);
            }
            finally {
                if (!!this.socket)
                    this.socket.destroy();
            }
        }
        this.socket = null;
    }
    // Socket 属性
    getLocalAddress() {
        return null !== this.socket ? this.socket.localAddress : '';
    }
    getLocalPort() {
        return null !== this.socket ? this.socket.localPort : 0;
    }
    getRemoteAddress() {
        return null !== this.socket ? this.socket.remoteAddress : '';
    }
    getRemotePort() {
        return null !== this.socket ? this.socket.remotePort : 0;
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
                startPos = endPos;
                // 忽略心跳包
                if ('{}' === pkg)
                    continue;
                const data = JSON.parse(pkg);
                // 把自己的链接服务器 Id 注入包内
                if (0 < this.linkId) {
                    if (undefined !== data['params']) {
                        data['params']['linkId'] = this.linkId;
                    }
                    else {
                        data['linkId'] = this.linkId;
                    }
                }
                result.push(data);
            }
        }
        this.packageBuffer.copy(this.packageBuffer, 0, startPos, this.packagePos);
        this.packagePos -= startPos;
        return result;
    }
}
exports.Link = Link;
//# sourceMappingURL=Link.js.map