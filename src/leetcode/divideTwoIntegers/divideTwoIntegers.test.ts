import { expect, test } from 'vitest'
import { divideTwoIntegers } from './typescript.ts'
import { divideTwoIntegers as divideTwoIntegersJs } from './javascript.js'

test(`divideTwoIntegers`, () => {
  expect(divideTwoIntegers(10, 3)).toBe(3)
  expect(divideTwoIntegers(7, -3)).toBe(-2)
})

test(`divideTwoIntegersJs`, () => {
  expect(divideTwoIntegersJs(10, 3)).toBe(3)
  expect(divideTwoIntegersJs(7, -3)).toBe(-2)
})
