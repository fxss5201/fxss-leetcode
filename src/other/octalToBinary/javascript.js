// 八进制转二进制
// 输入：'15'
// 输出：'1101'

import { decimalToBinary } from "../decimalToBinary/javascript"

export function octalToBinary (str) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    res += decimalToBinary(Number(str[i]))
  }
  return res
}