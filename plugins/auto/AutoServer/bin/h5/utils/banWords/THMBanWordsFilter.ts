import {TreedHashMapNode} from "./TreedHashMapNode";
import {BaseBanWordsFilter} from "./BaseBanWordsFilter";
import * as logr from '../logger';
import {Logger} from "log4js";

const logger: Logger = logr.getLogger(__filename);

/**
 * Created by Bob Jiang on 2016/11/24.
 */
export class  THMBanWordsFilter extends BaseBanWordsFilter {

	private banWordsRoot: TreedHashMapNode;

	public constructor(wordsPath: string) {
		super(wordsPath);
	}

	public hasBanWords(message: string): boolean {
		let inEnglishWord: boolean = false;
		let isBeginOfEnglishWord: boolean = false;

		for (let i: number = 0, m: number = message.length; i<m; i++) {
			const chr: string = message.charAt(i);
			const nowIsEng: boolean = TreedHashMapNode.isEnglishChar(chr);

			if (!inEnglishWord && nowIsEng) {
				inEnglishWord = true;
				isBeginOfEnglishWord = true;
			} else if (inEnglishWord && !nowIsEng) {
				inEnglishWord = false;
				isBeginOfEnglishWord = false;
			} else if (inEnglishWord && nowIsEng) {
				continue;
			} else {
				isBeginOfEnglishWord = false;
			}

			if (this.banWordsRoot.isMatch(message.substring(i), isBeginOfEnglishWord)) {
				return true;
			}
		}

		return false;
	}

	protected init(): void {
		this.banWordsRoot = new TreedHashMapNode();
	}

	protected processLine(line: string): void {
		line = line.trim();

		if (line.length > 0) {
			this.banWordsRoot.add(line);

			if (this.banWordsRoot.isEnd) {
				logger.debug(line);
			}
		}
	}
}