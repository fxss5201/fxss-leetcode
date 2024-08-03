// 36. 有效的数独：https://leetcode.cn/problems/valid-sudoku/description/
/* 输入：board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
*/
// 输出：true

export function validSudoku (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const rowCol = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))
  for (let i = 0, len = board.length; i < len; i++) {
    for (let j = 0, jLen = board[i].length; j < jLen; j++) {
      const cur = board[i][j]
      if (cur !== '.') {
        const curNum = Number(cur) - 1
        rows[i][curNum]++
        cols[j][curNum]++
        const rowI = Math.floor(i / 3)
        const colI = Math.floor(j / 3)
        rowCol[rowI][colI][curNum]++
        if (rows[i][curNum] > 1 || cols[j][curNum] > 1 || rowCol[rowI][colI][curNum] > 1) {
          return false
        }
      }
    }
  }
  return true
}