// 2182. 构造限制重复的字符串
// https://leetcode.cn/problems/construct-string-with-repeat-limit/description/

export function repeatLimitedString (s: string, repeatLimit: number): string {
  const N = 26
  let count = new Array(N).fill(0)
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++
  }
  let res = ''
  let limit = 0
  let index = N - 1
  let JIndex = N - 2
  while (index >= 0 && JIndex >= 0) {
    if (count[index] === 0) {
      index--
      limit = 0
    } else if (limit < repeatLimit) {
      count[index]--
      limit++
      res += String.fromCharCode(index + 97)
    } else if (JIndex >= index || count[JIndex] === 0) {
      JIndex--
    } else {
      count[JIndex]--
      limit = 0
      res += String.fromCharCode(JIndex + 97)
    }
  }
  return res
};
