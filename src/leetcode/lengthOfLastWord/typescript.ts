// 58. 最后一个单词的长度：https://leetcode.cn/problems/length-of-last-word/description/
// 输入："Hello World"
// 输出：5

export function lengthOfLastWord (s: string): number {
  s = s.trim()
  let res = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      break
    }
    res++
  }
  return res
}
