// 2085. 统计出现过一次的公共字符串
// https://leetcode.cn/problems/count-common-words-with-one-occurrence/description/

export function countWords (words1: string[], words2: string[]): number {
  const arrayToObject = (arr: string[]): object => {
    const res = {}
    arr.forEach(element => {
      res[element] = (res[element] || 0) + 1
    });
    return res
  }
  const wObj1 = arrayToObject(words1)
  const wObj2 = arrayToObject(words2)
  const minLength = Math.min(words1.length, words2.length)
  const resArr = words1.length === minLength ? words1 : words2
  let res = 0
  resArr.forEach(key => {
    if (wObj1[key] === 1 && wObj2[key] === 1) {
      res++
    }
  })
  return res
};
