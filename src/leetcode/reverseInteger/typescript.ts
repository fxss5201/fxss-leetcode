// 输入：x = 123
// 输出：321

export function reverse(x: number): number {
  let res = 0
  while (x !== 0) {
    res = res * 10 + x % 10
    x = ~~(x / 10)
    const max = Math.pow(2, 31)
    if (res < -max || res > max - 1) return 0
  }
  return res
}
