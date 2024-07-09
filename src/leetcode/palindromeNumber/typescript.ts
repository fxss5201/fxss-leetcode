// 输入：x = 121
// 输出：true

export function isPalindrome(x: number): boolean {
  if (x < 0) return false
  let num = x
  let res = 0
  while (num !== 0) {
    res = res * 10 + num % 10
    num = ~~(num / 10)
  }
  return res === x
}