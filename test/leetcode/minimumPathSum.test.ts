import { expect, test } from 'vitest'
import { minimumPathSum } from '../../src/leetcode/minimumPathSum/typescript.ts'
import { minimumPathSum as minimumPathSumJs } from '../../src/leetcode/minimumPathSum/javascript.js'

test(`minimumPathSum`, () => {
  expect(minimumPathSum([])).toBe(0)
  expect(minimumPathSum([[1,3,1],[1,5,1],[4,2,1]])).toBe(7)
})

test(`minimumPathSumJs`, () => {
  expect(minimumPathSumJs([])).toBe(0)
  expect(minimumPathSumJs([[1,3,1],[1,5,1],[4,2,1]])).toBe(7)
})
