// 59. 螺旋矩阵 II：https://leetcode.cn/problems/spiral-matrix-ii/description/
// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]

export function spiralMatrixIi (n: number): number[][] {
  const maxNum = n * n
  let curNum = 1
  const matrix: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let row = 0, column = 0
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let directionIndex = 0
  while (curNum <= maxNum) {
      matrix[row][column] = curNum
      curNum++
      const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1]
      if (nextRow < 0 || nextRow >= n || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] !== 0) {
          directionIndex = (directionIndex + 1) % 4
      }
      row = row + directions[directionIndex][0]
      column = column + directions[directionIndex][1]
  }
  return matrix
}
