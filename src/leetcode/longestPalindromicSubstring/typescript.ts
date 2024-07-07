// 输入：s = "babad"
// 输出："bab"

export function longestPalindrome(s: string): string {
  let max = 0
  let start = -1
  for (let i = 0; i < s.length; i++) {
    let now = 1
    while (s[i] === s[i + 1]) {
      now++
      i++
    }
    let l = i - 1
    let r = i + 1
    while (s[l] && s[l] === s[r]) {
      now+=2
      l--
      r++
    }
    if (now > max) {
      max = now
      start = l + 1
    }
  }
  return s.slice(start, start + max)
}