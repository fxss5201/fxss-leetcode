import { expect, test } from 'vitest'
import { threeSumClosest } from './typescript.ts'
import { threeSumClosest as threeSumClosestJs } from './javascript.js'

test('nums = [-1,2,1,-4], target = 1', () => {
  expect(threeSumClosest([-1,2,1,-4], 1)).toBe(2)
})

test('nums = [-1,2,1,-4], target = 1', () => {
  expect(threeSumClosestJs([-1,2,1,-4], 1)).toBe(2)
})

test('nums = [-1,2,1,1,-4], target = 1', () => {
  expect(threeSumClosest([-1,2,1,1,-4], 1)).toBe(1)
})

test('nums = [-1,2,1,1,-4], target = 1', () => {
  expect(threeSumClosestJs([-1,2,1,1,-4], 1)).toBe(1)
})

test('nums = [-4,-2,-1,-1,1,1,2,1,-4,4], target = 1', () => {
  expect(threeSumClosest([-4,-2,-1,-1,1,1,2,1,-4,4], 1)).toBe(1)
})

test('nums = [-4,-2,-1,-1,1,1,2,1,-4,4], target = 1', () => {
  expect(threeSumClosestJs([-4,-2,-1,-1,1,1,2,1,-4,4], 1)).toBe(1)
})
