// 18. 四数之和：https://leetcode.cn/problems/4sum/description/
// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

export function fourSum (nums, target) {
  if (nums.length < 4) return []
  nums = nums.sort((a, b) => a - b)
  const len = nums.length
  const res = []
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) continue
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) continue
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
      
      let l = j + 1
      let k = len - 1
      while (l < k) {
        const sum = nums[i] + nums[j] + nums[l] + nums[k]
        if (sum > target) {
          k--
        } else if (sum < target) {
          l++
        } else {
          res.push([nums[i], nums[j], nums[l], nums[k]])
          l++
          while (l < k && nums[l] === nums[l - 1]) {
            l++
          }
          k--
          while (l < k && nums[k] === nums[k + 1]) {
            k--
          }
        }
      }
    }
  }
  return res
}

