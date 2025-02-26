// 415. 字符串相加：https://leetcode.cn/problems/add-strings/
// 输入：num1 = "11", num2 = "123"
// 输出：'134'

export function addStrings (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let add = 0
  const ans = []
  while (i >= 0 || j >= 0 || add !== 0) {
    const x = i >= 0 ? Number(num1[i]) : 0
    const y = j >= 0 ? Number(num2[j]) : 0
    const result = x + y + add
    ans.unshift(result % 10)
    add = Math.floor(result / 10)
    i--
    j--
  }
  return ans.join('')
}
