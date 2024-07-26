// 22. 括号生成：https://leetcode.cn/problems/generate-parentheses/description/
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

export function generateParenthesis (n) {
  let resSet = new Set([''])
  for (let i = 1; i <= n; i++) {
    const newSet = new Set()
    for (let item of resSet.values()) {
      for (let j = 0; j <= item.length; j++) {
        newSet.add(`${item.slice(0, j)}()${item.slice(j)}`)
      }
    }
    resSet = newSet
  }
  return [...resSet]
}