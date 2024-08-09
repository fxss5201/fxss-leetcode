// 49. 字母异位词分组：https://leetcode.cn/problems/group-anagrams/description/
// 输入：strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出：[["eat","tea","ate"],["tan","nat"],["bat"]]

export function groupAnagrams (strs: string[]): string[][] {
  const res = new Map<string, string[]>()
  strs.forEach(str => {
    const resStr = str.split('').sort().join('')
    res.set(resStr, res.get(resStr) ? (res.get(resStr) as string[]).concat(str) : [str])
  })
  return [...res.values()]
}
