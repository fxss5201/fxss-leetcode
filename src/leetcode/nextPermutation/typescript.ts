// 31. 下一个排列：https://leetcode.cn/problems/next-permutation/description/
// 输入：nums = [1,2,3]
// 输出：[1,3,2]

export function nextPermutation (nums: number[]): void {
  let len = nums.length

  if (len <= 1) return

  let min = len - 2
  for (; min >= 0; min--) {
    if (nums[min] < nums[min + 1]) {
      break
    }
  }

  let max = len - 1
  for (; max > min && min >= 0; max--) {
    if (nums[max] > nums[min]) {
      break
    }
  }

  if (min >= 0) {
    [nums[min], nums[max]] = [nums[max], nums[min]]
  }

  for (let i = min + 1, j = len - 1; i < j; i++, j--) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
}
