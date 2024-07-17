import { expect, test } from 'vitest'
import { romanToInt } from '../../src/leetcode/romanToInteger/typescript.ts'
import { romanToInt as romanToIntJs } from '../../src/leetcode/romanToInteger/javascript.js'

test(`MMMDCCXLIX`, () => {
  expect(romanToInt('MMMDCCXLIX')).toBe(3749)
})

test(`MMMDCCXLIX`, () => {
  expect(romanToIntJs('MMMDCCXLIX')).toBe(3749)
})
