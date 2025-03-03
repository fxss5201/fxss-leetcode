// 75. 颜色分类：https://leetcode.cn/problems/sort-colors/
// 输入：[2,0,2,1,1,0]
// 输出：[0,0,1,1,2,2]

export function sortColors (nums: number[]): void {
  let p0 = 0
  let p2 = nums.length - 1
  for (let i = 0; i <= p2; i++) {
    while (i <= p2 && nums[i] === 2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]]
      p2--
    }
    if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]]
      p0++
    }
  }
}
