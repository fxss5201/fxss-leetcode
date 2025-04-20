// 18. 获取元组长度：https://tsch.js.org/18/zh-CN
import type { Equal, Expect } from '@type-challenges/utils'

// 你的代码
type Length<T extends readonly any[]> = T['length']

// 测试用例
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]
