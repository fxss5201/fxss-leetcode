// 79. 单词搜索：https://leetcode.cn/problems/word-search/
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true

export function wordSearch (board, word) {
  const m = board.length
  const n = board[0].length
  const visited = new Array(m).fill(false).map(() => new Array(n).fill(false))
  const dfs = (i, j, k) => {
    if (board[i][j] !== word[k]) {
      return false
    }
    if (k === word.length - 1) {
      return true
    }
    visited[i][j] = true
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for (const [dx, dy] of directions) {
      const newi = i + dx
      const newj = j + dy
      if (newi >= 0 && newi < m && newj >= 0 && newj < n) {
        if (!visited[newi][newj]) {
          const flag = dfs(newi, newj, k + 1)
          if (flag) {
            return true
          }
        }
      }
    }
    visited[i][j] = false
    return false
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const flag = dfs(i, j, 0)
      if (flag) {
        return true
      }
    }
  }
  return false
}
