// 输入：[1, 2, 3]
// 输出：[3, 2, 1]

export function arrayReverse <T>(arr: T[]): T[] {
  const res = []
  for (let i = arr.length -1; i > -1; i--) {
    res.push(arr[i])
  }
  return res
}
