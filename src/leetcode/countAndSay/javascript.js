// 38. 外观数列：https://leetcode.cn/problems/count-and-say/description/
// 输入：n = 4
// 输出："1211"

export function countAndSay (n) {
  const stringToCountStr = (str) => {
    const resList = []
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
