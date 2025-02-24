import { expect, test } from 'vitest'
import { minCostClimbingStairs } from './typescript.ts'
import { minCostClimbingStairs as minCostClimbingStairsJs } from './javascript.js'

test(`minCostClimbingStairs`, () => {
  expect(minCostClimbingStairs([10, 15, 20])).toBe(15)
  expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
})

test(`minCostClimbingStairsJs`, () => {
  expect(minCostClimbingStairsJs([10, 15, 20])).toBe(15)
  expect(minCostClimbingStairsJs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
})
