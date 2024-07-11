function getDefaultCode (name: string, title: string, url: string): string {
  return `${title}${title ? '：' : ''}${url}
// 输入：
// 输出：

export function ${name} () {

}
`
}

export default getDefaultCode
