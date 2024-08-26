// 70. 爬楼梯：https://leetcode.cn/problems/climbing-stairs/description/
// 输入：n = 2
// 输出：2

export function climbingStairs (n) {
  let resArr = [0, 1]
  for (let idx = 0; idx < n; idx++) {
    resArr = [resArr[1], resArr[0] + resArr[1]]
  }
  return resArr[1]
}
