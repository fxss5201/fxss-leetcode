import { expect, test } from 'vitest'
import { jumpGameIi } from './typescript.ts'
import { jumpGameIi as jumpGameIiJs } from './javascript.js'

test(`jumpGameIi`, () => {
  expect(jumpGameIi([2,3,1,1,4])).toBe(2)
})

test(`jumpGameIiJs`, () => {
  expect(jumpGameIiJs([2,3,1,1,4])).toBe(2)
})
