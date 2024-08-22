import { expect, test } from 'vitest'
import { uniquePaths } from '../../src/leetcode/uniquePaths/typescript.ts'
import { uniquePaths as uniquePathsJs } from '../../src/leetcode/uniquePaths/javascript.js'

test(`uniquePaths`, () => {
  expect(uniquePaths(3, 7)).toBe(28)
})

test(`uniquePathsJs`, () => {
  expect(uniquePathsJs(3, 7)).toBe(28)
})
