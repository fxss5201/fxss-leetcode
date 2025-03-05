// 77. 组合：https://leetcode.cn/problems/combinations/
// 输入：n = 4, k = 2
// 输出：[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

export function combinations (n: number, k: number): number[][] {
  const ans: number[][] = []
  const dfs = (cur: number, temp: number[]) => {
    if (temp.length + (n - cur + 1) < k) {
      return
    }
    if (temp.length === k) {
      ans.push(temp)
      return
    }
    dfs(cur + 1, [...temp, cur])
    dfs(cur + 1, temp)
  }
  dfs(1, [])
  return ans
}
