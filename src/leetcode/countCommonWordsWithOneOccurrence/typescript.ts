// 2085. 统计出现过一次的公共字符串
// https://leetcode.cn/problems/count-common-words-with-one-occurrence/description/

export function countWords (words1: string[], words2: string[]): number {
  interface ObjNumber { 
    [propName: string]: number;
  }

  const arrayToObject = (arr: string[]): ObjNumber => {
    const res: ObjNumber = {}
    arr.forEach(element => {
      res[element] = (res[element] || 0) + 1
    });
    return res
  }
  const wObj1: ObjNumber = arrayToObject(words1)
  const wObj2: ObjNumber = arrayToObject(words2)
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

// map实现
export function countWordsMap (words1: string[], words2: string[]): number {
  const arrayToMap = (arr: string[]): Map<string, number> => {
    const res: Map<string, number> = new Map()
    arr.forEach(element => {
      res.set(element, (res.get(element) || 0) + 1)
    });
    return res
  }
  const wMap1 = arrayToMap(words1)
  const wMap2 = arrayToMap(words2)
  const minLength = Math.min(words1.length, words2.length)
  const resMap = words1.length === minLength ? wMap1 : wMap2
  const othMap = words1.length === minLength ? wMap2 : wMap1
  let res = 0
  for (const [key, value] of resMap) {
    if (value === 1 && othMap.get(key) === 1) {
      res++
    }
  }
  return res
};
