import { expect, test } from 'vitest'
import { sqrtx } from '../../src/leetcode/sqrtx/typescript.ts'
import { sqrtx as sqrtxJs } from '../../src/leetcode/sqrtx/javascript.js'

test(`sqrtx`, () => {
  expect(sqrtx(4)).toBe(2)
  expect(sqrtx(8)).toBe(2)
})

test(`sqrtxJs`, () => {
  expect(sqrtxJs(4)).toBe(2)
  expect(sqrtxJs(8)).toBe(2)
})
