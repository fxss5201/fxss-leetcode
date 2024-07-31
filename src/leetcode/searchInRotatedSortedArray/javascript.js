// 33. 搜索旋转排序数组：https://leetcode.cn/problems/search-in-rotated-sorted-array/description/
// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4

export function searchInRotatedSortedArray (nums, target) {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
  }
  return -1
}
