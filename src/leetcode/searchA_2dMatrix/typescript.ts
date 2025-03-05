// 74. 搜索二维矩阵：https://leetcode.cn/problems/search-a-2d-matrix/
// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// 输出：true

export function searchA_2dMatrix (matrix: number[][], target: number): boolean {
  return matrix.flat().includes(target)
}
