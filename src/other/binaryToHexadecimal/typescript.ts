// 二进制转十六进制
// 输入：'11011'
// 输出：'1b'

import { binaryToDecimal } from "../binaryToDecimal/typescript"

export function binaryToHexadecimal (binary: string): string {
  const numberToStr: { [key: string]: string } = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
  }
  let hex = ''
  for (let i = binary.length - 1; i > -1; i-=4) {
    const start = i - 3
    const nowNum = binaryToDecimal(binary.slice(start < 0 ? 0 : start, i + 1))
    hex = nowNum > 9 ? numberToStr[nowNum] : nowNum + hex
  }
  return hex
}
