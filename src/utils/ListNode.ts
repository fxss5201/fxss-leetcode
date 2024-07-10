// #region ListNode
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
// #endregion ListNode

export function getListNode(arr: number[]): ListNode | null {
  let res: ListNode | null = null
  let middle: ListNode | null = null
  arr.map(item => {
    if (!res) {
      res = middle = new ListNode(item)
    } else {
      (middle as ListNode).next = new ListNode(item)
      middle = (middle as ListNode).next
    }
  })
  return res
}
