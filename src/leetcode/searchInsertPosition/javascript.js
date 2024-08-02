// 35. 搜索插入位置：https://leetcode.cn/problems/search-insert-position/description/
// 输入：nums = [1,3,5,6], target = 5
// 输出：2

export function searchInsertPosition (nums, target) {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return high + 1
}
