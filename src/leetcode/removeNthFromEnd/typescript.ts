// 19. 删除链表的倒数第 N 个结点：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

import { ListNode } from "../../utils"

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let newHead = new ListNode(0, head)
  let right = newHead
  let left = newHead
  while (right?.next) {
    right = right.next
    if (n <= 0) {
      left = left.next as ListNode
    }
    n--
  }
  left.next = left?.next?.next as ListNode
  return newHead.next
}
