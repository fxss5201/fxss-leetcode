// 14. 第一个元素：https://tsch.js.org/14/zh-CN
import type { Equal, Expect } from '@type-challenges/utils'

// 你的代码
type First<T extends any[]> = T extends [] ? never : T[0]

// 测试用例
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]
