// 17. 电话号码的字母组合：https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

export function letterCombinations(digits: string): string[] {
  if (!digits.length) return []
  const numberObj: { [key: string]: string[] } = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  if (digits.length === 1) return numberObj[digits]
  const res: string[] = []
  const length = digits.length
  addString(0, '')

  function addString(start: number, resStr: string) {
    if (resStr.length === length) {
      res.push(resStr)
      return
    }
    const arr = numberObj[digits[start]]
    for (let i = 0; i < arr.length; i++) {
      addString(start + 1, resStr + arr[i])
    }
  }
  return res
}
