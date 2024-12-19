import { expect, test } from 'vitest'
import { combinationSum } from './typescript.ts'
import { combinationSum as combinationSumJs } from './javascript.js'

test(`combinationSum`, () => {
  expect(combinationSum([2,3,6,7], 7)).toEqual([[7],[2,2,3]])
})

test(`combinationSumJs`, () => {
  expect(combinationSumJs([2,3,6,7], 7)).toEqual([[7],[2,2,3]])
})
