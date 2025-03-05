// 78. 子集：https://leetcode.cn/problems/subsets/
// 输入：[1,2,3]
// 输出：[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]

export function subsets (nums: number[]): number[][] {
  const res: number[][] = []
  const dfs = (index: number, list: number[]) => {
    res.push(list)
    for (let i = index; i < nums.length; i++) {
      dfs(i + 1, [...list, nums[i]])
    }
  }
  dfs(0, [])
  return res
}
