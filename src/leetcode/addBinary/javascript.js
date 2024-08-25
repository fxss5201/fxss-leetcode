// 67. 二进制求和：https://leetcode.cn/problems/add-binary/description/
// 输入：a = "11", b = "1"
// 输出："100"

export function addBinary (a, b) {
  const len = Math.max(a.length, b.length)
  a.length === len ? (b = b.padStart(len, '0')) : (a = a.padStart(len, '0'))
  let ad = 0
  let res = ''
  for (let idx = len - 1; idx >= 0; idx--) {
    const cur = Number(a[idx]) + Number(b[idx]) + ad
    if (cur > 1) {
      res = `${cur % 2}${res}`
      ad = 1
    } else {
      res =  `${cur}${res}`
      ad = 0
    }
  }
  if (ad > 0) {
    res =  `${ad}${res}`
  }
  return res
}
