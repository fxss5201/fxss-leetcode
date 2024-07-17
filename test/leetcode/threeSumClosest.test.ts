import { expect, test } from 'vitest'
import { threeSumClosest } from '../../src/leetcode/threeSumClosest/typescript.ts'
import { threeSumClosest as threeSumClosestJs } from '../../src/leetcode/threeSumClosest/javascript.js'

test('nums = [-1,2,1,-4], target = 1', () => {
  expect(threeSumClosest([-1,2,1,-4], 1)).toBe(2)
})

test('nums = [-1,2,1,-4], target = 1', () => {
  expect(threeSumClosestJs([-1,2,1,-4], 1)).toBe(2)
})
