// 二进制转十进制
// 输入：'1010'
// 输出：10

export function binaryToDecimal (str: string): number {
  let res = 0
  let digit = 0
  for (let i = str.length - 1; i > -1; i--) {
    res += Number(str[i]) * Math.pow(2, digit)
    digit += 1
  }
  return res
}
