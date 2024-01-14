// 2696. 删除子串后的字符串最小长度
// https://leetcode.cn/problems/minimum-string-length-after-removing-substrings/

// 只去除 AB 或 CD
export function minimumStringLengthAfterRemovingABOrCDSubstrings(str: string): number {
  while(str.indexOf('AB') > -1 || str.indexOf('CD') > -1) {
    str = str.replace('AB', '').replace('CD', '')
  }
  return str.length
}

// 去除 AB / CD / BC 等所有的两个子串
export function minimumStringLengthAfterRemovingSubstrings(str: string): number {
  const strCharCode = str.split('').map(x => x.charCodeAt(0))

  const getSubstringPosition = () => {
    let subIndex = -1
    for(let i = 0, len = strCharCode.length; i < len - 1; i++) {
      if (strCharCode[i + 1] - strCharCode[i] === 1) {
        subIndex = i
        break
      }
    }
    return subIndex
  }
  while(getSubstringPosition() > -1) {
    strCharCode.splice(getSubstringPosition(), 2)
  }
  return strCharCode.length
}

// 去除 AB / CD / BC 等所有的两个子串，栈实现
export function minimumStringLengthAfterRemovingSubstringsStack(str: string): number {
  const strCharCode = str.split('').map(x => x.charCodeAt(0))
  const resList: number[] = []
  strCharCode.forEach(item => {
    if (item - resList[resList.length - 1] === 1) {
      resList.pop()
    } else {
      resList.push(item)
    }
  });
  return resList.length
}