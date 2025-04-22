/**
 * Created by Bob Jiang on 2016/11/24.
 */
export interface IBanWordsFilter {
	hasBanWords(message: string): boolean;
}