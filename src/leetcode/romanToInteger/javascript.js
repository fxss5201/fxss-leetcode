// 输入："MMMDCCXLIX"
// 输出：3749

export function romanToInt(s) {
  const list = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]]
  let res = 0
  for (const [rom, int] of list) {
    while (s.startsWith(rom)) {
      s = s.replace(rom, '')
      res += int
    }
  }
  return res
}