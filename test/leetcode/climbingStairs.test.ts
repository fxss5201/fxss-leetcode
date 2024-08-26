import { expect, test } from 'vitest'
import { climbingStairs } from '../../src/leetcode/climbingStairs/typescript.ts'
import { climbingStairs as climbingStairsJs } from '../../src/leetcode/climbingStairs/javascript.js'

test(`climbingStairs`, () => {
  expect(climbingStairs(1)).toBe(1)
  expect(climbingStairs(2)).toBe(2)
  expect(climbingStairs(3)).toBe(3)
  expect(climbingStairs(4)).toBe(5)
})

test(`climbingStairsJs`, () => {
  expect(climbingStairsJs(1)).toBe(1)
  expect(climbingStairsJs(2)).toBe(2)
  expect(climbingStairsJs(3)).toBe(3)
  expect(climbingStairsJs(4)).toBe(5)
})
