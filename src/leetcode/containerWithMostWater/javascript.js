// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49

export function maxArea(height) {
  if (!height.length || height.length === 1) return 0
  let max = 0
  let l = 0
  let r = height.length - 1
  max = (r - l) * Math.min(height[l], height[r])
  while (l < r) {
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
    const area = (r - l) * Math.min(height[l], height[r])
    if (max < area) max = area
  }
  return max
}
