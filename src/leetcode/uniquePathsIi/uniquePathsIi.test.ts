import { expect, test } from 'vitest'
import { uniquePathsIi } from './typescript.ts'
import { uniquePathsIi as uniquePathsIiJs } from './javascript.js'

test(`uniquePathsIi`, () => {
  expect(uniquePathsIi([])).toBe(0)
  expect(uniquePathsIi([[0,0,0],[0,1,0],[0,0,0]])).toBe(2)
})

test(`uniquePathsIiJs`, () => {
  expect(uniquePathsIiJs([])).toBe(0)
  expect(uniquePathsIiJs([[0,0,0],[0,1,0],[0,0,0]])).toBe(2)
})
