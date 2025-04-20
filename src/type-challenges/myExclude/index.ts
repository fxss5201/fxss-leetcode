// 43. 实现 Exclude：https://tsch.js.org/43/zh-CN
import type { Equal, Expect } from '@type-challenges/utils'

// 你的代码
type MyExclude<T, U> = T extends U ? never : T

// 测试用例
type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]
