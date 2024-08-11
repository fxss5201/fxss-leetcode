// 54. 螺旋矩阵：https://leetcode.cn/problems/spiral-matrix/description/
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

export function spiralMatrix (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  let top = 0
  let left = 0
  let bottom = matrix.length - 1
  let right = matrix[0].length - 1
  const res = []
  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col++) {
      res.push(matrix[top][col])
    }
    for (let row = top + 1; row <= bottom; row++) {
      res.push(matrix[row][right])
    }
    if (top < bottom && left < right) {
      for (let col = right - 1; col >= left; col--) {
        res.push(matrix[bottom][col])
      }
      for (let row = bottom - 1; row > top; row--) {
        res.push(matrix[row][left])
      }
    }
    top += 1
    left += 1
    bottom -= 1
    right -= 1
  }
  return res
}
