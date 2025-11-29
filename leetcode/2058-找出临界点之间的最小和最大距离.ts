// 遍历链表问题，一次通过

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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let minDistance = Infinity;
    let maxDistance = 0;

    // 先找到第一个极值点
    let cur = head.next;
    let prev = head;
    let firstCriticalPoint = -Infinity;
    let lastCriticalPoint = -Infinity;
    let count = 2;
    while (cur.next) {
        if (
            (cur.val < prev.val && cur.val < cur.next.val) ||
            (cur.val > prev.val && cur.val > cur.next.val)
        ) {
            firstCriticalPoint = count;
            lastCriticalPoint = count;
            prev = prev.next;
            cur = cur.next;
            count++;
            break;
        }
        prev = prev.next;
        cur = cur.next;
        count++;
    }

    while (cur.next) {
        if (
            (cur.val < prev.val && cur.val < cur.next.val) ||
            (cur.val > prev.val && cur.val > cur.next.val)
        ) {
            minDistance = Math.min(minDistance, count - lastCriticalPoint);
            maxDistance = count - firstCriticalPoint;
            lastCriticalPoint = count;
        }
        prev = prev.next;
        cur = cur.next;
        count++;
    }

    if (minDistance === Infinity) {
        return [-1, -1];
    }
    return [minDistance, maxDistance];
}
