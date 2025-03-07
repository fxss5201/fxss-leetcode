// 80. 删除有序数组中的重复项 II：https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/
// 输入：nums = [1,1,1,2,2,3]
// 输出：5

export function removeDuplicatesFromSortedArrayIi (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (map.get(nums[i]) >= 2) {
        nums.splice(i, 1)
        i--
      }
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  return nums.length
}
