// 20. 有效的括号：https://leetcode.cn/problems/valid-parentheses/description/
// 输入：s = "()"
// 输出：true

export function isValidParentheses (s) {
  const obj = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const list = []
  for (let i = 0; i < s.length; i++) {
    if (list.length && list[list.length - 1] === obj[s[i]]) {
      list.pop()
    } else {
      list.push(s[i])
    }
  }
  return list.length === 0
}
