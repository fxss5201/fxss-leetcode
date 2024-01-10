// 1. 两数之和
// https://leetcode.cn/problems/two-sum/description/

export function twoSum(nums, target) {
  let result = []
  for(let i = 0, len = nums.length; i < len; i++) {
    const otherIndex = nums.indexOf(target - nums[i], i + 1)
    if (otherIndex > -1) {
      result = [i, otherIndex]
      break
    }
  }
  return result
};
