// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49

// function maxArea(height: number[]): number {
//   if (!height.length || height.length === 1) return 0
//   for (let i = 0; i < height.length; i++) {
//       for (let j = i + 1; j < height.length; j++) {
//           const area = (j - i) * Math.min(height[i], height[j])
//           if (max < area) max = area 
//       }
//   }
//   return max
// }

export function maxArea(height: number[]): number {
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
