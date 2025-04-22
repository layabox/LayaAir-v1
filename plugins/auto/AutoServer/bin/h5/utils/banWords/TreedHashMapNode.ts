/**
 * Created by Bob Jiang on 2016/11/24.
 */
export class TreedHashMapNode {
	public next: any = {};
	public isEnd: boolean = false;
	public head: string;

	public constructor(head: string = null, word: string = null) {
		this.head = head;

		if (null !== head) {
			this.add(word);
		}
	}

	public add(word: string): void {
		if (!!word) {
			const head: string = word.charAt(0);
			const tail: string = word.substring(1);

			let nextNode: TreedHashMapNode = this.next[head];
			if (!!nextNode) {
				nextNode.add(tail);
			} else {
				this.next[head] = new TreedHashMapNode(head, tail);
			}
		} else if (!this.isEnd) {
			this.isEnd = true;
		}
	}

	public isMatch(message: string, isEnglishWord: boolean): boolean {
		const len: number = message.length;

		if (len > 0) {
			const head: string = message.charAt(0);
			const tail: string = message.substring(1);

			const nextNode: TreedHashMapNode = this.next[head];

			if (!!nextNode) {
				return len > 1 ? nextNode.isMatch(tail, isEnglishWord) : nextNode.isEnd;
			} else if (!isEnglishWord) {
				return this.isEnd;
			} else {
				return tail.length === 0 || !TreedHashMapNode.isEnglishChar(head);
			}
		} else {
			return this.isEnd;
		}
	}

	private static a: number = 'a'.charCodeAt(0);
	private static z: number = 'z'.charCodeAt(0);
	private static A: number = 'A'.charCodeAt(0);
	private static Z: number = 'Z'.charCodeAt(0);
	private static one: number = '1'.charCodeAt(0);
	private static zero: number = '0'.charCodeAt(0);

	public static isEnglishChar(chr: string): boolean {
		const code: number = chr.charCodeAt(0);

		return (
			(code >= TreedHashMapNode.a && code <= TreedHashMapNode.z) ||
			(code >= TreedHashMapNode.A && code <= TreedHashMapNode.Z) ||
			(code >= TreedHashMapNode.one && code <= TreedHashMapNode.zero)
		);
	}
}