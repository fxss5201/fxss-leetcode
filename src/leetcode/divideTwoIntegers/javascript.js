// 29. 两数相除：https://leetcode.cn/problems/divide-two-integers/
// 输入：divideTwoIntegers(10, 3)
// 输出：3

export function divideTwoIntegers (dividend, divisor) {
  const intMax = 2 ** 31 - 1
  const intMin = -(2 ** 31)
  if (dividend === intMin) {
    if (divisor === 1) return intMin
    if (divisor === -1) return intMax
  }
  if (divisor === intMin) return dividend === intMin ? 1 : 0
  if (dividend === 0) return 0
  let rev = false
  if (dividend > 0) {
    dividend = -dividend
    rev = !rev
  }
  if (divisor > 0) {
    divisor = -divisor
    rev = !rev
  }
  let left = 1
  let right = intMax
  let ans = 0
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    const check = quickAdd(divisor, mid, dividend)
    if (check) {
      ans = mid
      if (mid === intMax) break
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return rev ? -ans : ans

  function quickAdd(y, z, x) {
    let result = 0
    let add = y
    while (z !== 0) {
      if ((z & 1) !== 0) {
        if (result < x - add) return false
        result += add
      }
      if (z !== 1) {
        if (add < x - add) return false
        add += add
      }
      z >>= 1
    }
    return true
  }
}
