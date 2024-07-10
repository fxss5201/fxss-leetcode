// 2. 两数相加
// https://leetcode.cn/problems/add-two-numbers/

import { ListNodeJs } from "../../utilsJs"

export function addTwoNumbers(l1, l2) {
  let result = null
  let middleVal = null
  let advanced = 0
  while(l1 || l2) {
    const l1Val = l1 ? l1.val : 0
    const l2Val = l2 ? l2.val : 0
    const sum = l1Val + l2Val + advanced
    if (!result) {
      result = middleVal = new ListNodeJs((sum) % 10)
    } else {
      middleVal.next = new ListNodeJs((sum) % 10)
      middleVal = middleVal.next
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
    middleVal.next = new ListNodeJs(advanced)
  }
  return result
};
