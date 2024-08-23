import { expect, test } from 'vitest'
import { uniquePathsIi } from '../../src/leetcode/uniquePathsIi/typescript.ts'
import { uniquePathsIi as uniquePathsIiJs } from '../../src/leetcode/uniquePathsIi/javascript.js'

test(`uniquePathsIi`, () => {
  expect(uniquePathsIi([])).toBe(0)
  expect(uniquePathsIi([[0,0,0],[0,1,0],[0,0,0]])).toBe(2)
})

test(`uniquePathsIiJs`, () => {
  expect(uniquePathsIiJs([])).toBe(0)
  expect(uniquePathsIiJs([[0,0,0],[0,1,0],[0,0,0]])).toBe(2)
})
