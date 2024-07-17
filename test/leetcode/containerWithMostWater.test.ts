import { expect, test } from 'vitest'
import { maxArea } from '../../src/leetcode/containerWithMostWater/typescript.ts'
import { maxArea as maxAreaJs } from '../../src/leetcode/containerWithMostWater/javascript.js'

test(`[1,8,6,2,5,4,8,3,7]`, () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49)
})

test(`[1,8,6,2,5,4,8,3,7]`, () => {
  expect(maxAreaJs([1,8,6,2,5,4,8,3,7])).toBe(49)
})
