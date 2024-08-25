// 66. 加一：https://leetcode.cn/problems/plus-one/description/
// 输入：digits = [1,2,3]
// 输出：[1,2,4]

export function plusOne (digits) {
  let add = 1
  let ad = 0
  for (let idx = digits.length - 1; idx >= 0; idx--) {
    const cur = digits[idx] + add + ad
    add = 0
    if (cur > 9) {
      digits[idx] = cur % 10
      ad = 1
    } else {
      digits[idx] = cur
      ad = 0
    }
  }
  if (ad > 0) {
    digits = [ad, ...digits]
  }
  return digits
}
