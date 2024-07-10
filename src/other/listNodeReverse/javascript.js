// 输入：[1, 2, 3]
// 输出：[3, 2, 1]

import { ListNodeJs } from '../../utilsJs'

export function listNodeReverse (head) {
  if (!head) {
    return head
  }
  let res = new ListNodeJs(head.val)
  let middle = res
  while (head.next) {
    head = head?.next
    res = new ListNodeJs(head.val)
    res.next = middle
    middle = res
  }
  return res
}