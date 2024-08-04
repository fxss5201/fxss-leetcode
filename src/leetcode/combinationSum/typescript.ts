// 39. 组合总和：https://leetcode.cn/problems/combination-sum/description/
// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]

export function combinationSum (candidates: number[], target: number): number[][] {
  const res: number[][] = []
  function dfs (target: number, combine: number[], idx: number) {
    if (idx === candidates.length) {
      return
    }
    if (target === 0) {
      res.push(combine)
      return
    }
    dfs(target, combine, idx + 1)
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
    }
  }
  dfs(target, [], 0)
  return res
}
