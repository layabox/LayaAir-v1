/**
 * Created by Bob Jiang on 2016/9/28.
 */
import * as _ from 'lodash';
import * as log4js from 'log4js';
import {Logger} from "log4js";
import * as path from 'path';

export function getLogger(filename: string, category: string = ''): Logger {
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
					"filename": "logs/game_sdk.log",
					"pattern": "-yyyy-MM-dd",
					"alwaysIncludePattern": false
				}
			]
		});

		return log4js.getLogger(filename);
	} else {
		return getLogger(__filename);
	}
}