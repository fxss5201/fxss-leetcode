// 38. 外观数列：https://leetcode.cn/problems/count-and-say/description/
// 输入：n = 4
// 输出："1211"

export function countAndSay (n: number): string {
  const stringToCountStr: (str: string) => string = (str) => {
    const resList: string[] = []
    let left = 0
    let right = 0
    while (right < str.length) {
      while (right < str.length && str[right] === str[left]) {
        right++
      }
      resList.push(`${right-left}${str[left]}`)
      left = right
    }
    return resList.join('')
  }

  if (n === 1) {
    return '1'
  } else {
    return stringToCountStr(countAndSay(n - 1))
  }
}
