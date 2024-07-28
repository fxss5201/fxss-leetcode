// 26. 删除有序数组中的重复项：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/
// 输入：nums = [1,1,2]
// 输出：2, nums = [1,2,_]

export function removeDuplicates (nums: number[]): number {
  let left = 0
  let right = 0
  const len = nums.length
  while (right < len) {
    if (nums[left] !== nums[right]) {
      left++
      nums[left] = nums[right]
    }
    right++
  }
  return left + 1
}
