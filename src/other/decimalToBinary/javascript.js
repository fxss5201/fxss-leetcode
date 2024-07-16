// 十进制转二进制
// 输入：10
// 输出：'1010'

export function decimalToBinary (num) {
  let res = ''
  while (num > 0) {
    res = num % 2 + res
    num = ~~(num / 2)
  }
  return res
}