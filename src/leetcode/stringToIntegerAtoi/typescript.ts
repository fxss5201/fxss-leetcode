// 8. 字符串转换整数 (atoi)：https://leetcode.cn/problems/string-to-integer-atoi/
// 输入：" -042"
// 输出：-42

export function stringToIntegerAtoi (s: string): number {
  let res = 0
  let sign = 1
  let i = 0
  const len = s.length
  while (i < len && s[i] === ' ') {
    i++
  }
  if (i < len && s[i] === '-') {
    sign = -1
    i++
  }
  if (i < len && s[i] === '+') {
    if (sign === -1) return 0
    i++
  }
  while (i < len && s[i] >= '0' && s[i] <= '9') {
    res = res * 10 + Number(s[i])
    i++
  }
  res = res * sign
  const intMax = 2 ** 31 - 1
  if (res > intMax) {
    return intMax
  }
  const intMin = -(2 ** 31)
  if (res < intMin) {
    return intMin
  }
  return res
}
