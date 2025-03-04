// 73. 矩阵置零：https://leetcode.cn/problems/set-matrix-zeroes/
// 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
// 输出：[[1,0,1],[0,0,0],[1,0,1]]

export function setMatrixZeroes (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const row = new Array(m).fill(false)
  const col = new Array(n).fill(false)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true
        col[j] = true
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0
      }
    }
  }
}
