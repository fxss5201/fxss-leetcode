// 50. Pow(x, n)：https://leetcode.cn/problems/powx-n/description/
// 输入：x = 2, n = 10
// 输出：1024

export function powxN (x, n) {
  function dfs (x, n) {
    if (n === 0) {
      return 1
    }
    const y = dfs(x, Math.floor(n / 2))
    return n % 2 === 0 ? y * y : y * y * x
  }
  return n >= 0 ? dfs(x, n) : 1 / dfs(x, Math.abs(n))
}
