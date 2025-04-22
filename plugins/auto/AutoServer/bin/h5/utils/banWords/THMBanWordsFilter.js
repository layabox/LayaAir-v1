"use strict";
const TreedHashMapNode_1 = require("./TreedHashMapNode");
const BaseBanWordsFilter_1 = require("./BaseBanWordsFilter");
const logr = require('../logger');
const logger = logr.getLogger(__filename);
/**
 * Created by Bob Jiang on 2016/11/24.
 */
class THMBanWordsFilter extends BaseBanWordsFilter_1.BaseBanWordsFilter {
    constructor(wordsPath) {
        super(wordsPath);
    }
    hasBanWords(message) {
        let inEnglishWord = false;
        let isBeginOfEnglishWord = false;
        for (let i = 0, m = message.length; i < m; i++) {
            const chr = message.charAt(i);
            const nowIsEng = TreedHashMapNode_1.TreedHashMapNode.isEnglishChar(chr);
            if (!inEnglishWord && nowIsEng) {
                inEnglishWord = true;
                isBeginOfEnglishWord = true;
            }
            else if (inEnglishWord && !nowIsEng) {
                inEnglishWord = false;
                isBeginOfEnglishWord = false;
            }
            else if (inEnglishWord && nowIsEng) {
                continue;
            }
            else {
                isBeginOfEnglishWord = false;
            }
            if (this.banWordsRoot.isMatch(message.substring(i), isBeginOfEnglishWord)) {
                return true;
            }
        }
        return false;
    }
    init() {
        this.banWordsRoot = new TreedHashMapNode_1.TreedHashMapNode();
    }
    processLine(line) {
        line = line.trim();
        if (line.length > 0) {
            this.banWordsRoot.add(line);
            if (this.banWordsRoot.isEnd) {
                logger.debug(line);
            }
        }
    }
}
exports.THMBanWordsFilter = THMBanWordsFilter;
//# sourceMappingURL=THMBanWordsFilter.js.map