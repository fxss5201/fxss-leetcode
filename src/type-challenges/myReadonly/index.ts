// 7. 对象属性只读：https://tsch.js.org/7/zh-CN
import type { Equal, Expect } from '@type-challenges/utils'

// 你的代码
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// 测试用例
type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
