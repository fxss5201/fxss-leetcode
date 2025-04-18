function getTypeChallengesDefaultCode (name: string, title: string, url: string): string {
  return `// ${title}${title && url ? '：' : ''}${url}
import type { Equal, Expect } from '@type-challenges/utils'

// 你的代码
type ${name} = any

// 测试用例
`
}

export default getTypeChallengesDefaultCode
