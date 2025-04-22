"use strict";
/**
 * Created by Bob Jiang on 2016/9/28.
 */
const _ = require('lodash');
const log4js = require('log4js');
const path = require('path');
function getLogger(filename, category = '') {
    if (_.isString(filename)) {
        const lastPos = filename.lastIndexOf(path.sep);
        if (lastPos > -1) {
            filename = filename.substring(lastPos + 1);
        }
        // log4js.setGlobalLogLevel('WARN');
        // log4js.loadAppender('file');
        // log4js.addAppender(log4js.appenders.file('logs/game_sdk_' + filename + '.log'));
        log4js.configure({
            appenders: [
                // {type: 'console'},
                // {
                // 	type: 'file',
                // 	filename: 'logs/game_sdk.log',
                // 	maxLogSize: 20480,
                // 	backups: 10,
                // 	category: !!category ? category : filename
                // }
                {
                    "type": "dateFile",
                    "filename": "log/game_sdk.log",
                    "pattern": "-yyyy-MM-dd",
                    "alwaysIncludePattern": false
                }
            ]
        });
        return log4js.getLogger(filename);
    }
    else {
        return getLogger(__filename);
    }
}
exports.getLogger = getLogger;
//# sourceMappingURL=logger.js.map