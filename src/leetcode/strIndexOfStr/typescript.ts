// 28. 找出字符串中第一个匹配项的下标：https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
// 输入：haystack = "sadbutsad", needle = "sad"
// 输出：0

export function strIndexOfStr (haystack: string, needle: string): number {
  let m = haystack.length
  let n = needle.length
  if (m < n) return -1
  for (let i = 0; i <= m - n; i++) {
    let flag = true
    for (let j = 0; j < n; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false
        break
      }
    }
    if (flag) return i 
  }
  return -1
}
