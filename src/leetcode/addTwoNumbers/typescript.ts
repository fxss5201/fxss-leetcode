// 2. 两数相加
// https://leetcode.cn/problems/add-two-numbers/

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let result: ListNode | null = null
  let middleVal: ListNode | null = null
  let advanced: number = 0
  while(l1 || l2) {
    const l1Val = l1 ? l1.val : 0
    const l2Val = l2 ? l2.val : 0
    const sum = l1Val + l2Val + advanced
    if (!result) {
      result = middleVal = new ListNode((sum) % 10)
    } else {
      (middleVal as ListNode).next = new ListNode((sum) % 10)
      middleVal = (middleVal as ListNode).next
    }
    advanced = Math.floor((sum) / 10)
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (advanced > 0) {
    (middleVal as ListNode).next = new ListNode(advanced)
  }
  return result
};
