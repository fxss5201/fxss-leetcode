// 1. 两数之和
// https://leetcode.cn/problems/two-sum/description/

// 易理解，耗时长
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

// 遍历一遍，将值和索引保存在对象中
export function twoSumObj(nums, target) {
  let result = []
  const resObj = {}
  for(let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] in resObj) {
      result = [resObj[nums[i]], i]
      break
    }
    resObj[target - nums[i]] = i
  }
  return result
};
