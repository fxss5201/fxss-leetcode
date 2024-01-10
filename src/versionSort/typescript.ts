// 输入：['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
// 输出：['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]

export function versionListSort (list: string[]): string[] {
  let listArr = list.map(x => x.split('.'))
  const maxLength = Math.max(...listArr.map(x => x.length))
  let sortIndex = 0
  while(sortIndex < maxLength) {
    listArr = listArr.sort((a, b) => {
      if (a[sortIndex] && b[sortIndex]) {
        if (sortIndex > 0) {
          if (a[sortIndex - 1] === b[sortIndex - 1]) {
            return Number(b[sortIndex]) - Number(a[sortIndex])
          } else {
            return 0
          }
        }
        return Number(b[sortIndex]) - Number(a[sortIndex])
      }
      return 0
    })
    sortIndex++
  }
  return listArr.map(x => x.join('.'))
}
