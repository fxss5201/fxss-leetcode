// 62. 不同路径：https://leetcode.cn/problems/unique-paths/description/
// 输入：m = 3, n = 7
// 输出：28

export function uniquePaths (m, n) {
  const f = new Array(m).fill(0).map(_ => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    f[i][0] = 1
  }

  for (let j = 0; j < n; j++) {
    f[0][j] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1]
    }
  }

  return f[m - 1][n - 1]
}
