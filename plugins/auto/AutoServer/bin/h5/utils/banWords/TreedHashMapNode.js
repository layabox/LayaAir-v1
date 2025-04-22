"use strict";
/**
 * Created by Bob Jiang on 2016/11/24.
 */
class TreedHashMapNode {
    constructor(head = null, word = null) {
        this.next = {};
        this.isEnd = false;
        this.head = head;
        if (null !== head) {
            this.add(word);
        }
    }
    add(word) {
        if (!!word) {
            const head = word.charAt(0);
            const tail = word.substring(1);
            let nextNode = this.next[head];
            if (!!nextNode) {
                nextNode.add(tail);
            }
            else {
                this.next[head] = new TreedHashMapNode(head, tail);
            }
        }
        else if (!this.isEnd) {
            this.isEnd = true;
        }
    }
    isMatch(message, isEnglishWord) {
        const len = message.length;
        if (len > 0) {
            const head = message.charAt(0);
            const tail = message.substring(1);
            const nextNode = this.next[head];
            if (!!nextNode) {
                return len > 1 ? nextNode.isMatch(tail, isEnglishWord) : nextNode.isEnd;
            }
            else if (!isEnglishWord) {
                return this.isEnd;
            }
            else {
                return tail.length === 0 || !TreedHashMapNode.isEnglishChar(head);
            }
        }
        else {
            return this.isEnd;
        }
    }
    static isEnglishChar(chr) {
        const code = chr.charCodeAt(0);
        return ((code >= TreedHashMapNode.a && code <= TreedHashMapNode.z) ||
            (code >= TreedHashMapNode.A && code <= TreedHashMapNode.Z) ||
            (code >= TreedHashMapNode.one && code <= TreedHashMapNode.zero));
    }
}
TreedHashMapNode.a = 'a'.charCodeAt(0);
TreedHashMapNode.z = 'z'.charCodeAt(0);
TreedHashMapNode.A = 'A'.charCodeAt(0);
TreedHashMapNode.Z = 'Z'.charCodeAt(0);
TreedHashMapNode.one = '1'.charCodeAt(0);
TreedHashMapNode.zero = '0'.charCodeAt(0);
exports.TreedHashMapNode = TreedHashMapNode;
//# sourceMappingURL=TreedHashMapNode.js.map