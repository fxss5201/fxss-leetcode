// 八进制转二进制
// 输入：'15'
// 输出：'1101'

import { decimalToBinary } from "../decimalToBinary/javascript"
import { leftFillZero } from "../../utilsJs"

export function octalToBinary (octal) {
  let res = ''
  for (let i = 0; i < octal.length; i++) {
    const nowStr = decimalToBinary(Number(octal[i]))
    res += i > 0 ? leftFillZero(nowStr, 3) : nowStr
  }
  return res
}
