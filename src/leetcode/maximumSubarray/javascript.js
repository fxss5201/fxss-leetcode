// 53. 最大子数组和：https://leetcode.cn/problems/maximum-subarray/description/
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6

export function maximumSubarray (nums) {
  let maxSum = nums[0]
  let preSum = nums[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    const cur = nums[i]
    preSum = Math.max(preSum + cur, cur)
    maxSum = Math.max(maxSum, preSum)
  }
  return maxSum
}
