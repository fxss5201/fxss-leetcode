// 746. 使用最小花费爬楼梯：https://leetcode.cn/problems/min-cost-climbing-stairs/description/
// 输入：[10,15,20]
// 输出：15

export function minCostClimbingStairs (cost: number[]): number {
  const n = cost.length
  let prev = 0
  let curr = 0
  let next = 0
  for (let i = 2; i <= n; i++) {
    next = Math.min(curr + cost[i - 1], prev + cost[i - 2])
    prev = curr
    curr = next
  }
  return curr
}
