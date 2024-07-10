// n个数值是否可以组成n边形

export function nNumberCanNPolygon(nNumber: number[]): boolean {
  const nNumberLength = nNumber.length
  if (nNumberLength < 3) return false
  const nNumberSort = nNumber.sort((a, b) => a - b)
  let sum = 0
  for (let index = 0; index < nNumberLength - 1; index++) {
    sum += nNumberSort[index]
  }
  if (sum <= nNumberSort[nNumberLength - 1]) return false
  return true
};
