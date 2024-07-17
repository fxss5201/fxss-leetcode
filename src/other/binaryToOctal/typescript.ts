// 二进制转八进制
// 输入：'1101'
// 输出：'15'

import { binaryToDecimal } from "../binaryToDecimal/typescript"

export function binaryToOctal (binary: string): string {
  let octal = ''
  for (let i = binary.length - 1; i > -1; i-=3) {
    const start = i - 2
    octal = binaryToDecimal(binary.slice(start < 0 ? 0 : start, i + 1)) + octal
  }
  return octal
}
