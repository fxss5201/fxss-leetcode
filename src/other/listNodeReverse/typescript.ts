// 输入：[1, 2, 3]
// 输出：[3, 2, 1]

import { ListNode } from "../../utils"

export function listNodeReverse (head: ListNode | null): ListNode | null {
  if (!head) {
    return head
  }
  let res: ListNode | null = new ListNode(head.val)
  let middle = res
  while (head.next) {
    head = head?.next
    res = new ListNode(head.val)
    res.next = middle
    middle = res
  }
  return res
}
