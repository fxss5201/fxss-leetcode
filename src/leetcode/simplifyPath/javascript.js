// 71. 简化路径：https://leetcode.cn/problems/simplify-path/description/
// 输入：'/home/user/Documents/../Pictures'
// 输出：'/home/user/Pictures'

export function simplifyPath (path) {
  const pathList = path.split('/').filter(item => !['', '.'].includes(item))
  const stack = []
  pathList.forEach(item => {
    if (item === '..') {
      stack.pop()
    } else {
      stack.push(item)
    }
  })
  return `/${stack.join('/')}`
}
