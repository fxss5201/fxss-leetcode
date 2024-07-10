import { expect, test } from 'vitest'
import { intToRoman } from '../../src/leetcode/integerToRoman/typescript.ts'


test(`58`, () => {
  expect(intToRoman(58)).toBe('LVIII')
})
