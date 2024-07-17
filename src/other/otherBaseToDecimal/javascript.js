// 其他进制转十进制
// 输入：binaryToDecimal('1010', 2)
// 输出：10

import { getMapStringToNumber } from "../../utilsJs"

export function otherBaseToDecimal (str, base) {
  if (base === 10 || base > 36 || base < 2) return Number(str)
  str = str.toLowerCase()
  let res = 0
  let digit = 0
  const strToNum = getMapStringToNumber(base)
  for (let i = str.length - 1; i > -1; i--) {
    const curStr = str[i]
    const curNum = strToNum[curStr] ? strToNum[curStr] : curStr
    res += Number(curNum) * Math.pow(base, digit)
    digit += 1
  }
  return res
}
