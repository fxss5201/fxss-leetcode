// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"

export function convert(s, numRows) {
  if (numRows === 1 || numRows > s.length) return s
  const resObj = {}
  let rowIndex = 0
  let rowLine = 1
  for (let i = 0; i < s.length; i++) {
      resObj[String(rowIndex)] = resObj[String(rowIndex)] ? `${resObj[String(rowIndex)]}${s[i]}` : s[i]
      if (rowIndex === numRows - 1) rowLine = -1
      if (rowIndex === 0) rowLine = 1
      rowIndex = rowIndex + rowLine
  }
  let res = ''
  for (let i = 0; i < numRows; i++) {
      res = `${res}${resObj[String(i)]}`
  }
  return res
}
