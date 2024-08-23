// 63. 不同路径 II：https://leetcode.cn/problems/unique-paths-ii/description/
// 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// 输出：2

export function uniquePathsIi (obstacleGrid: number[][]): number {
  if (!obstacleGrid.length) {
    return 0
  }
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const f: number[] = new Array(n).fill(0)
  f[0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j]) {
        f[j] = 0
      } else {
        f[j] = j === 0 ? f[j] : f[j] + f[j - 1]
      }
    }
  }
  return f[n - 1]
}
