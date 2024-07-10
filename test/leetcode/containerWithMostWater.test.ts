import { expect, test } from 'vitest'
import { maxArea } from '../../src/leetcode/containerWithMostWater/typescript.ts'


test(`[1,8,6,2,5,4,8,3,7]`, () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49)
})