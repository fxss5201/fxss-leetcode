// 49. 字母异位词分组：https://leetcode.cn/problems/group-anagrams/description/
// 输入：strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出：[["eat","tea","ate"],["tan","nat"],["bat"]]

export function groupAnagrams (strs) {
  const res = new Map()
  strs.forEach(str => {
    const resStr = str.split('').sort().join('')
    res.set(resStr, res.get(resStr) ? res.get(resStr).concat(str) : [str])
  })
  return [...res.values()]
}