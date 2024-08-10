import { expect, test } from 'vitest'
import { maximumSubarray } from '../../src/leetcode/maximumSubarray/typescript.ts'
import { maximumSubarray as maximumSubarrayJs } from '../../src/leetcode/maximumSubarray/javascript.js'

test(`maximumSubarray`, () => {
  expect(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})

test(`maximumSubarrayJs`, () => {
  expect(maximumSubarrayJs([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})
