// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

export function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]
  let rI = 0
  while (rI < strs[0].length) {
    const cur = strs[0][rI]
    let flag = true
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][rI] !== cur) {
        flag = false
        break
      }
    }
    if (!flag) {
      break
    } else {
      rI++
    }
  }
  return strs[0].slice(0, rI)
}
