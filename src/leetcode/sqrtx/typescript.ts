// 69. x 的平方根：https://leetcode.cn/problems/sqrtx/description/
// 输入：x = 4
// 输出：2

export function sqrtx (x: number): number {
  let left = 0
  let right = x
  let res = -1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const midRes = mid * mid
    if (midRes <= x) {
      res = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return res
}
