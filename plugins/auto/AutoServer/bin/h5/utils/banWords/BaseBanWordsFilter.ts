import * as fs from 'fs';
import * as logr from '../logger';
import {Logger} from "log4js";
import {IBanWordsFilter} from "./IBanWordsFilter";

const logger: Logger = logr.getLogger(__filename);

/**
 * Created by Bob Jiang on 2016/11/24.
 */
export abstract class BaseBanWordsFilter implements IBanWordsFilter {
	public isReady: boolean = false;

	public constructor(wordsPath: string) {
		this.init();

		// fs.readFile(wordsPath, 'utf8', (err: Error, content: string): void => {
		const content: string = fs.readFileSync(wordsPath, 'utf8');

		if (!!content) {
			const lines: Array<string> = content.split(/\n|\r\n/m);
			for (let i: number = 0, m: number = lines.length; i<m; i++) {
				const line: string = lines[i];
				this.processLine(line);
			}

			this.isReady = true;
		} else {
			logger.error('打开屏蔽词库文件 %s 时出错', wordsPath);
		}
	}

	public abstract hasBanWords(message: string): boolean;
	protected abstract init(): void;
	protected abstract processLine(line: string): void;
}