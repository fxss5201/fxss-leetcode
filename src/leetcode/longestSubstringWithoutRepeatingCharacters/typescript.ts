// 3. 无重复字符的最长子串
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/

export function lengthOfLongestSubstring (s: string): number {
  // 滑动窗口，保存所有不重复的单个子项
  const list: Set<string> = new Set()
  // 右侧指针
  let rightIndex = -1
  // 最大值
  let max = 0

  for (let index = 0; index < s.length; index++) {
    if (index !== 0) {
      // 当前指针增加的时候，需要将前一位的删除，不然遇到相同项就添加不进来了
      list.delete(s[index - 1])
    }

    // 右侧 + 1 小于字符串长度并且滑动窗口内不包含右侧指针的下一个值
    while (rightIndex + 1 < s.length && !list.has(s[rightIndex + 1])) {
      list.add(s[rightIndex + 1])
      rightIndex++
    }

    // 滑动窗口的子项个数最大值
    max = Math.max(max, list.size)
  }

  return max
};
