// 45. 跳跃游戏 II：https://leetcode.cn/problems/jump-game-ii/description/
// 输入：nums = [2,3,1,1,4]
// 输出：2

export function jumpGameIi (nums: number[]): number {
  let posititon = nums.length - 1
  let step = 0
  while (posititon > 0) {
    for (let i = 0; i < posititon; i++) {
      if (i + nums[i] >= posititon) {
        posititon = i
        step++
        break
      }
    }
  }
  return step
}
