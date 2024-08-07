// 47. 全排列 II：https://leetcode.cn/problems/permutations-ii/description/
// 输入：[1,1,2]
// 输出：[[1,1,2],[1,2,1],[2,1,1]]

export function permutationsIi (nums) {
  const res = []
  nums = nums.sort((a, b) => a - b)
  function dfs (curList, list) {
    if (curList.length === nums.length) {
      res.push(curList)
      return
    }
    for (let i = 0, len = list.length; i < len; i++) {
      const newList = [...list]
      dfs([...curList, ...newList.splice(i, 1)], newList)
      while (i + 1 < len && list[i + 1] === list[i]) {
        i++
      }
    }
  }
  dfs([], nums)
  return res
}