import { expect, test } from 'vitest'
import { decimalToBinary } from './typescript.ts'
import { decimalToBinary as decimalToBinaryJs } from './javascript.js'

test(`10 to '1010'`, () => {
  expect(decimalToBinary(10)).toBe('1010')
})

test(`10 to '1010'`, () => {
  expect(decimalToBinaryJs(10)).toBe('1010')
})
