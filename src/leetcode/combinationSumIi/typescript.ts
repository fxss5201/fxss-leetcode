// 40. 组合总和 II：https://leetcode.cn/problems/combination-sum-ii/description/
// 输入：candidates = [10,1,2,2,7,6,1,5], target = 8
// 输出：[[1,1,6],[1,2,5],[1,7],[2,6]]

export function combinationSumIi (candidates: number[], target: number): number[][] {
  const res: number[][] = []
  candidates = candidates.sort((a, b) => a - b)
  const length = candidates.length
  function dfs (pos: number, rest: number, combine: number[]) {
    if (pos >= length || rest <= 0) {
      if (rest === 0) {
        res.push(combine)
      }
      return
    }
    for (let j = pos + 1; j < length; j++) {
      if (candidates[j] > rest) break
      dfs(j, rest - candidates[j], [...combine, candidates[j]])
      while (j + 1 < length && candidates[j + 1] === candidates[j]) {
        j++
      }
    }
  }
  for (let i = 0; i < length; i++) {
    if (candidates[i] > target) break
    dfs(i, target - candidates[i], [candidates[i]])
    while (i + 1 < length && candidates[i + 1] === candidates[i]) {
      i++
    }
  }
  return res
}
