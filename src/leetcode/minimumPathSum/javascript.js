// 64. 最小路径和：https://leetcode.cn/problems/minimum-path-sum/description/
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7

export function minimumPathSum (grid) {
  if (!grid.length) return 0
  const row = grid.length
  const col = grid[0].length

  const newGrid = new Array(row).fill(0).map(() => new Array(col).fill(0))
  newGrid[0][0] = grid[0][0]
  for (let i = 1; i < row; i++) {
    newGrid[i][0] = newGrid[i - 1][0] + grid[i][0]
  }
  for (let j = 1; j < col; j++) {
    newGrid[0][j] = newGrid[0][j - 1] + grid[0][j]
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      newGrid[i][j] = Math.min(newGrid[i - 1][j] + grid[i][j], newGrid[i][j - 1] + grid[i][j])
    }
  }
  return newGrid[row - 1][col - 1]
}
