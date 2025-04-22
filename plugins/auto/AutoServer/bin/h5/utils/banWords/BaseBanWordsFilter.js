"use strict";
const fs = require('fs');
const logr = require('../logger');
const logger = logr.getLogger(__filename);
/**
 * Created by Bob Jiang on 2016/11/24.
 */
class BaseBanWordsFilter {
    constructor(wordsPath) {
        this.isReady = false;
        this.init();
        // fs.readFile(wordsPath, 'utf8', (err: Error, content: string): void => {
        const content = fs.readFileSync(wordsPath, 'utf8');
        if (!!content) {
            const lines = content.split(/\n|\r\n/m);
            for (let i = 0, m = lines.length; i < m; i++) {
                const line = lines[i];
                this.processLine(line);
            }
            this.isReady = true;
        }
        else {
            logger.error('打开屏蔽词库文件 %s 时出错', wordsPath);
        }
    }
}
exports.BaseBanWordsFilter = BaseBanWordsFilter;
//# sourceMappingURL=BaseBanWordsFilter.js.map