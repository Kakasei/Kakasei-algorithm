// 稍复杂的反转链表，核心仍然是头插法
// 自己想出来的解法，一次通过

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number,
): ListNode | null {
    const dummy = new ListNode(-1, head);
    let prev = dummy;
    let cur = head;
    let count = 1;

    while (cur) {
        if (count === left) {
            let pseudoDummy = prev;
            let pseudoHead = cur;
            let pseduoTail = cur;
            cur = cur.next;
            count++;
            while (count !== right + 1) {
                pseudoDummy.next = cur;
                cur = cur.next;
                count++;
                pseudoDummy.next.next = pseudoHead;
                pseudoHead = pseudoDummy.next;
            }
            pseduoTail.next = cur;
            break;
        } else {
            prev = prev.next;
            cur = cur.next;
            count++;
        }
    }

    return dummy.next;
}
