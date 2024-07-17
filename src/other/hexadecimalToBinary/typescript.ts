// 十六进制转二进制
// 输入：'16'
// 输出：'10110'

import { decimalToBinary } from "../decimalToBinary/typescript"
import { leftFillZero } from "../../utils"

export function hexadecimalToBinary (hex: string): string {
  let res = ''
  for (let i = 0; i < hex.length; i++) {
    const nowStr = decimalToBinary(Number(hex[i]))
    res += i > 0 ? leftFillZero(nowStr, 4) : nowStr
  }
  return res
}
