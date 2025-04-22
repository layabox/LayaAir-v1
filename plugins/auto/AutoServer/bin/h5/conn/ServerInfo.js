"use strict";
/**
 * 服务器信息
 * Created by Bob Jiang on 2016/9/28.
 */
class ServerInfo {
    /**
     * 清理和释放自己的资源
     */
    dispose() {
        if (!!this.link) {
            this.link.close(true);
            this.link = null;
        }
    }
}
exports.ServerInfo = ServerInfo;
//# sourceMappingURL=ServerInfo.js.map