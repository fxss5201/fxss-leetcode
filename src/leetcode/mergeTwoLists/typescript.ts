// 21. 合并两个有序链表：https://leetcode.cn/problems/merge-two-sorted-lists/description/
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

import { ListNode } from "../../utils"

export function mergeTwoLists (list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const head = new ListNode(0)
  let main = head
  while (list1 && list2) {
    if (list1?.val < list2?.val) {
      main.next = list1
      list1 = list1.next
    } else {
      main.next = list2
      list2 = list2.next
    }
    main = main.next
  }
  if (list1) main.next = list1
  if (list2) main.next = list2
  return head.next
}
