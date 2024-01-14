// 2645. 构造有效字符串的最少插入数
// https://leetcode.cn/problems/minimum-additions-to-make-valid-string/description/

export function addMinimum1(word: string): number {
  const start = 'a'.charCodeAt(0)
  const end = 'c'.charCodeAt(0)
  let res = 0
  for (let index = 0; index < word.length; index++) {
    if (index === 0 || index === word.length - 1) {
      // 单个的时候需要前后两次执行
      if (index === 0) {
        res += word.charCodeAt(index) - start
      }
      if (index === word.length - 1) {
        if (index - 1 >= 0) res += (word.charCodeAt(index) - word.charCodeAt(index - 1) - 1 + 3) % 3
        res += end - word.charCodeAt(index)
      }
    } else {
      res += (word.charCodeAt(index) - word.charCodeAt(index - 1) - 1 + 3) % 3
    }
  }
  return res
};

export function addMinimum2(word: string): number {
  const start = 'a'.charCodeAt(0)
  const end = 'c'.charCodeAt(0)
  let res = 0
  for (let index = 0; index < word.length; index++) {
    if (index === 0) {
      // 前后合并
      res += word.charCodeAt(index) - word.charCodeAt(word.length - 1) + end - start
    } else {
      res += (word.charCodeAt(index) - word.charCodeAt(index - 1) - 1 + 3) % 3
    }
  }
  return res
};

export function addMinimum3(word: string): number {
  // 前后提取出来，其余的遍历
  let res = word.charCodeAt(0) - word.charCodeAt(word.length - 1) + 2
  for (let index = 1; index < word.length; index++) {
    res += (word.charCodeAt(index) - word.charCodeAt(index - 1) - 1 + 3) % 3
  }
  return res
};
