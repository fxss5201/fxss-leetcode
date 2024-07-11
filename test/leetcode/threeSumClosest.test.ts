import { expect, test } from 'vitest'
import { threeSumClosest } from '../../src/leetcode/threeSumClosest/typescript.ts'

test('nums = [-1,2,1,-4], target = 1', () => {
  expect(threeSumClosest([-1,2,1,-4], 1)).toBe(2)
})
