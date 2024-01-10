// 2696. 删除子串后的字符串最小长度
// https://leetcode.cn/problems/minimum-string-length-after-removing-substrings/

// 只去除 AB 或 CD
export function minimumStringLengthAfterRemovingABOrCDSubstrings(str) {
  while(str.indexOf('AB') > -1 || str.indexOf('CD') > -1) {
    str = str.replace('AB', '')
    str = str.replace('CD', '')
  }
  return str.length
}

// 去除 AB / CD / BC 等所有的两个子串
export function minimumStringLengthAfterRemovingSubstrings(str) {
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
  let getSubstringIndex = getSubstringPosition()
  while(getSubstringIndex > -1) {
    strCharCode.splice(getSubstringIndex, 2)
    getSubstringIndex = getSubstringPosition()
  }
  return strCharCode.length
}

// 去除 AB / CD / BC 等所有的两个子串，栈实现
export function minimumStringLengthAfterRemovingSubstringsStack(str) {
  const strCharCode = str.split('').map(x => x.charCodeAt(0))
  const resList = []
  strCharCode.forEach(item => {
    if (item - resList[resList.length - 1] === 1) {
      resList.pop()
    } else {
      resList.push(item)
    }
  });
  return resList.length
}
