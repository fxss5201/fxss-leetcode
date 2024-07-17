// 十进制转其他进制
// 输入：decimalToOtherBase(10, 2)
// 输出：'1010'

import { getMapNumberToString } from "../../utils"

export function decimalToOtherBase (num: number, base: number): string {
  if (base === 10 || base > 36 || base < 2) return String(num)
  const numToStr = getMapNumberToString(base)
  let res = ''
  while (num > 0) {
    const remainder = num % base
    const curStr = remainder > 9 ? numToStr[remainder] : remainder
    res = curStr + res
    num = ~~(num / base)
  }
  return res
}
