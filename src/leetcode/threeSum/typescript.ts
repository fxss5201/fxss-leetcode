// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

export function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b)
  const len = nums.length
  const res = []
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    if (nums[i] + nums[len - 2] + nums[len - 1] < 0) continue
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break
    let j = i + 1
    let k = len - 1
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum > 0) {
        k--
      } else if (sum < 0) {
        j++
      } else {
        res.push([nums[i], nums[j], nums[k]])
        j++
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
        k--
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }
  return res
}
