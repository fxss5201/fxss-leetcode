// 48. 旋转图像：https://leetcode.cn/problems/rotate-image/description/
// 输入：[[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[7,4,1],[8,5,2],[9,6,3]]

export function rotateImage (matrix) {
  const len = matrix.length
  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < Math.floor((len + 1) / 2); j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[len - j - 1][i]
      matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1]
      matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1]
      matrix[j][len - i - 1] = temp
    }
  }
}
