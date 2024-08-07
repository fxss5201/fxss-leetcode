// 46. 全排列：https://leetcode.cn/problems/permutations/description/
// 输入：[1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

export function permutations (nums: number[]): number[][] {
  const res: number[][] = []
  function dfs (curList: number[], list: number[]) {
    if (curList.length === nums.length) {
      res.push(curList)
      return
    }
    for (let i = 0, len = list.length; i < len; i++) {
      const newList = [...list]
      dfs([...curList, ...newList.splice(i, 1)], newList)
    }
  }
  dfs([], nums)
  return res
}
