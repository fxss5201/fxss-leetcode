// 55. 跳跃游戏：https://leetcode.cn/problems/jump-game/description/
// 输入：nums = [2,3,1,1,4]
// 输出：true

export function jumpGame (nums: number[]): boolean {
  let position = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (i <= position) {
      position = Math.max(position, i + nums[i])
      if (position >= len - 1) {
        return true
      }
    }
  }
  return false
}
