// 24. 两两交换链表中的节点：https://leetcode.cn/problems/swap-nodes-in-pairs/description/
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

import { ListNode } from "../../utils"

export function swapNodesInPairs (head: ListNode | null): ListNode | null {
  const newHead = new ListNode(0, head)
  let temp = newHead
  while (temp.next !== null && temp?.next?.next !== null) {
    const node1 = temp.next
    const node2 = temp.next.next
    temp.next = node2
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }
  return newHead.next
}
