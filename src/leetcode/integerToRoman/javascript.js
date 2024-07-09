// 输入：num = 3749
// 输出："MMMDCCXLIX"

export function intToRoman(num) {
  const list = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
  let res = ''
  for (const [int, rom] of list) {
    while (num >= int) {
      num -= int
      res += rom
    }
    if (num === 0) break
  }
  return res
}
