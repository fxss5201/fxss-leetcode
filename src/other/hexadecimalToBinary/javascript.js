// 十六进制转二进制
// 输入：'16'
// 输出：'10110'

import { decimalToBinary } from "../decimalToBinary/javascript"
import { leftFillZero } from "../../utilsJs"

export function hexadecimalToBinary (hex) {
  let res = ''
  for (let i = 0; i < hex.length; i++) {
    const nowStr = decimalToBinary(Number(hex[i]))
    res += i > 0 ? leftFillZero(nowStr, 4) : nowStr
  }
  return res
}
