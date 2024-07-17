// 其他进制转十进制
// 输入：binaryToDecimal('1010', 2)
// 输出：10

export function otherBaseToDecimal (str: string, base: number): number {
  if (base === 10 || base > 16 || base < 2) return Number(str) 
  let res = 0
  let digit = 0
  const numToStr: { [key: string]: string } = {
    a: '10',
    b: '11',
    c: '12',
    d: '13',
    e: '14',
    f: '15'
  }
  for (let i = str.length - 1; i > -1; i--) {
    const curStr = str[i]
    const curNum = numToStr[curStr] ? numToStr[curStr] : curStr
    res += Number(curNum) * Math.pow(base, digit)
    digit += 1
  }
  return res
}
