import { expect, test } from 'vitest'
import { binaryToDecimal } from './typescript.ts'
import { binaryToDecimal as binaryToDecimalJs } from './javascript.js'

test(`'1010' to 10`, () => {
  expect(binaryToDecimal('1010')).toBe(10)
})

test(`'1010' to 10`, () => {
  expect(binaryToDecimalJs('1010')).toBe(10)
})
