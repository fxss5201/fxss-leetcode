import { expect, test } from 'vitest'
import { fourSum } from './typescript.ts'
import { fourSum as fourSumJs } from './javascript.js'

test(`fourSum([1,0,-1,0,-2,2], 0)`, () => {
  expect(fourSum([1,0,-1,0,-2,2], 0)).toEqual([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]])
})

test(`fourSumJs([2,2,2,2,2], 8)`, () => {
  expect(fourSumJs([2,2,2,2,2], 8)).toEqual([[2,2,2,2]])
})
