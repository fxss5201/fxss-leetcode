// 34. 在排序数组中查找元素的第一个和最后一个位置：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

export function findFirstAndLastPositionOfElementInSortedArray (nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1]
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (nums[mid] === target) {
      let left = mid
      let right = mid
      while (nums[left - 1] === nums[left] && left > 0) {
        left--
      }
      while (nums[right] === nums[right + 1] && right < nums.length - 1) {
        right++
      }
      return [left, right]
    }
    if (nums[mid] < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return [-1, -1]
}
