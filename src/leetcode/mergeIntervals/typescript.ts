// 56. 合并区间：https://leetcode.cn/problems/merge-intervals/description/
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]

export function mergeIntervals (intervals: number[][]): number[][] {
  if (!intervals.length) return [[]]
  intervals = intervals.sort((a, b) => a[0] - b[0])
  const res: number[][] = [intervals[0]]
  const len = intervals.length
  for (let i = 1; i < len; i++) {
    let cur = intervals[i]
    const resLast = res[res.length - 1]
    if (cur[0] > resLast[1]) {
      res.push(cur)
    } else {
      resLast[1] = Math.max(resLast[1], cur[1])
    }
  }
  return res
}
