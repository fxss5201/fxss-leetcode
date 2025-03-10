// 81. 搜索旋转排序数组 II：https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/
// 输入：nums = [2,5,6,0,0,1,2], target = 0
// 输出：true

export function searchInRotatedSortedArrayIi (nums, target) {
  const n = nums.length
  if (n === 0) return false
  if (n === 1) return nums[0] === target
  let l = 0
  let r = n - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (nums[mid] === target) return true
    if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
      l++
      r--
    } else if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return false
}
