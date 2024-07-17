// 十进制转其他进制
// 输入：decimalToOtherBase(10, 2)
// 输出：'1010'

export function decimalToOtherBase (num, base) {
  if (base === 10 || base > 16 || base < 2) return String(num)
  const numToStr = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
  }
  let res = ''
  while (num > 0) {
    const remainder = num % base
    const curStr = remainder > 9 ? numToStr[remainder] : remainder
    res = curStr + res
    num = ~~(num / base)
  }
  return res
}
