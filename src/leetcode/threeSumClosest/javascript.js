// 16. 最接近的三数之和：https://leetcode.cn/problems/3sum-closest/description/
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2

export function threeSumClosest (nums, target) {
  nums = nums.sort((a, b) => a - b)
  const len = nums.length
  let res = 0
  let diffNum = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let sum = nums[i] + nums[i + 1] + nums[i + 2]
    if (sum > target) {
      if (sum - target < diffNum) {
        res = sum
      }
      break
    }

    sum = nums[i] + nums[len - 2] + nums[len - 1]
    if (sum < target) {
      if (target - sum < diffNum) {
        diffNum = target - sum
        res = sum
      }
      continue
    }

    let j = i + 1
    let k = len - 1
    while (j < k) {
      sum = nums[i] + nums[j] + nums[k]
      if (sum === target) return target 
      if (sum > target) {
        if (sum - target < diffNum) {
          diffNum = sum - target
          res = sum
        }
        k--
      } else {
        if (target - sum < diffNum) {
          diffNum = target - sum
          res = sum
        }
        j++
      }
    }
  }
  return res
}
