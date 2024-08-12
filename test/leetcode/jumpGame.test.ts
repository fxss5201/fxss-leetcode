import { expect, test } from 'vitest'
import { jumpGame } from '../../src/leetcode/jumpGame/typescript.ts'
import { jumpGame as jumpGameJs } from '../../src/leetcode/jumpGame/javascript.js'

test(`jumpGame`, () => {
  expect(jumpGame([2,3,1,1,4])).toBe(true)
  expect(jumpGame([3,2,1,0,4])).toBe(false)
})

test(`jumpGameJs`, () => {
  expect(jumpGameJs([2,3,1,1,4])).toBe(true)
  expect(jumpGameJs([3,2,1,0,4])).toBe(false)
})
