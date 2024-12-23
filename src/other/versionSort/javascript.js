// 输入：['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
// 输出：['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]

export function versionListSort (list) {
  let listArr = list.map(x => x.split('.').map(x => Number(x)))
  const maxLength = Math.max(...listArr.map(x => x.length))
  let sortIndex = 0
  while(sortIndex < maxLength) {
    listArr = listArr.sort((a, b) => {
      const aVal = a[sortIndex] || 0
      const bVal = b[sortIndex] || 0
      if (sortIndex > 0) {
        if (a[sortIndex - 1] === b[sortIndex - 1]) {
          return bVal - aVal
        } else {
          return 0
        }
      }
      return bVal - aVal
    })
    sortIndex++
  }
  return listArr.map(x => x.join('.'))
}
