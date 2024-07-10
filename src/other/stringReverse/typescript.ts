// 输入：'abcd'
// 输出：'dcba'

export function stringReverse (str: string): string {
  let res = ''
  for (let i = str.length -1; i > -1; i--) {
    res += str[i]
  }
  return res
}
