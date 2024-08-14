// 57. 插入区间：https://leetcode.cn/problems/insert-interval/description/
// 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
// 输出：[[1,5],[6,9]]

export function insertInterval (intervals, newInterval) {
  function mergeIntervals (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]
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
  return mergeIntervals(intervals.concat([newInterval]))
}
