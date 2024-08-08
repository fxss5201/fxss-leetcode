// 组合排列
// 输入：[[1,2],[3,4],[5,6]]
// 输出：[[1,3,5],[1,3,6],[1,4,5],[1,4,6],[2,3,5],[2,3,6],[2,4,5],[2,4,6]]

export function combinationArrangement (nums: number[][]): number[][] {
  const res: number[][] = []
  function dfs (curList: number[], idx: number) {
    if (curList.length === nums.length) {
      res.push(curList)
      return
    }
    const nowArr = nums[idx]
    for (let i = 0; i < nowArr.length; i++) {
      dfs([...curList, nowArr[i]], idx + 1)
    }
  }
  dfs([], 0)
  return res
}
