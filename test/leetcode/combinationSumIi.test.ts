import { expect, test } from 'vitest'
import { combinationSumIi } from '../../src/leetcode/combinationSumIi/typescript.ts'
import { combinationSumIi as combinationSumIiJs } from '../../src/leetcode/combinationSumIi/javascript.js'

test(`combinationSumIi`, () => {
  expect(combinationSumIi([10,1,2,2,7,6,1,5], 8)).toEqual([[1,1,6],[1,2,5],[1,7],[2,6]])
})

test(`combinationSumIiJs`, () => {
  expect(combinationSumIiJs([10,1,2,2,7,6,1,5], 8)).toEqual([[1,1,6],[1,2,5],[1,7],[2,6]])
})
