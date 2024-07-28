// 27. 移除元素：https://leetcode.cn/problems/remove-element/description/
// 输入：nums = [3,2,2,3], val = 3
// 输出：2, nums = [2,2,_,_]

export function removeElement (nums: number[], val: number): number {
  let left = 0
  let right = nums.length
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1]
      right--
    } else {
      left++
    }
  }
  return left
}
