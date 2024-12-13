// 633. 平方数之和：https://leetcode.cn/problems/sum-of-square-numbers/description/
// 输入：5
// 输出：true
// 解释：1 * 1 + 2 * 2 = 5

// 枚举
export function judgeSquareSum (c) {
  const sqrt = Math.floor(Math.sqrt(c))
  for (let a = 0; a <= sqrt; a++) {
    const b = Math.floor(Math.sqrt(c - a * a))
    if (a * a + b * b === c) return true
  }
  return false
}

// 双指针
export function judgeSquareSum1 (c) {
  let a = 0
  let b = Math.floor(Math.sqrt(c))
  while (a <= b) {
    const sum = a * a + b * b
    if (sum === c) {
      return true
    } else if (sum > c) {
      b--
    } else {
      a++
    }
  }
  return false
}
