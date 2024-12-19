import { expect, test } from 'vitest'
import { intToRoman } from './typescript.ts'
import { intToRoman as intToRomanJs } from './javascript.js'

test(`58`, () => {
  expect(intToRoman(58)).toBe('LVIII')
})

test(`58`, () => {
  expect(intToRomanJs(58)).toBe('LVIII')
})
