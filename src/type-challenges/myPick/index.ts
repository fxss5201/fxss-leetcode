// 4. 实现 Pick：https://tsch.js.org/4/zh-CN
import type { Equal, Expect } from '@type-challenges/utils'

// 你的代码
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 测试用例
type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
