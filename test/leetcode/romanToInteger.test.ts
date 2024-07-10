import { expect, test } from 'vitest'
import { romanToInt } from '../../src/leetcode/romanToInteger/typescript.ts'


test(`MMMDCCXLIX`, () => {
  expect(romanToInt('MMMDCCXLIX')).toBe(3749)
})
