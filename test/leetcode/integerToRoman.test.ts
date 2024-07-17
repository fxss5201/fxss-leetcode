import { expect, test } from 'vitest'
import { intToRoman } from '../../src/leetcode/integerToRoman/typescript.ts'
import { intToRoman as intToRomanJs } from '../../src/leetcode/integerToRoman/javascript.js'

test(`58`, () => {
  expect(intToRoman(58)).toBe('LVIII')
})

test(`58`, () => {
  expect(intToRomanJs(58)).toBe('LVIII')
})
