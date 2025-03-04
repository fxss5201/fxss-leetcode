// 289. 生命游戏：https://leetcode.cn/problems/game-of-life/
// 输入：board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// 输出：[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

export function gameOfLife (board) {
  const m = board.length
  const n = board[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const count = countLiveNeighbors(board, i, j)
      if (board[i][j] === 1) {
        if (count < 2 || count > 3) {
          board[i][j] = -1
        }
      }
      if (board[i][j] === 0) {
        if (count === 3) {
          board[i][j] = 2
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 0
      } else if (board[i][j] === 2) {
        board[i][j] = 1
      }
    }
  }

  function countLiveNeighbors (board, i, j) {
    let count = 0
    for (let x = i - 1; x <= i + 1; x++) {
      for (let y = j - 1; y <= j + 1; y++) {
        if (x === i && y === j) continue
        if (board[x]?.[y] === 1 || board[x]?.[y] === -1) count++
      }
    }
    return count
  }
}
