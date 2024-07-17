// 十六进制转二进制
// 输入：'16'
// 输出：'10110'

import { decimalToBinary } from "../decimalToBinary/typescript"
import { leftFillZero } from "../../utils"

export function hexadecimalToBinary (hex: string): string {
  let res = ''
  hex = hex.toLowerCase()
  const strToNumber: { [key: string]: string } = {
    a: '10',
    b: '11',
    c: '12',
    d: '13',
    e: '14',
    f: '15'
  }
  for (let i = 0; i < hex.length; i++) {
    let nowStr = hex[i]
    nowStr = strToNumber[nowStr] ? strToNumber[nowStr] : nowStr
    const curStr = decimalToBinary(Number(nowStr))
    res += i > 0 ? leftFillZero(curStr, 4) : curStr
  }
  return res
}
