import { expect, test } from 'vitest'
import { decimalToBinary } from '../../src/other/decimalToBinary/typescript.ts'
import { decimalToBinary as decimalToBinaryJs } from '../../src/other/decimalToBinary/javascript.js'

test(`10 to '1010'`, () => {
  expect(decimalToBinary(10)).toBe('1010')
})

test(`10 to '1010'`, () => {
  expect(decimalToBinaryJs(10)).toBe('1010')
})
