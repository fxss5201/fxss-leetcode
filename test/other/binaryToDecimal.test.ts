import { expect, test } from 'vitest'
import { binaryToDecimal } from '../../src/other/binaryToDecimal/typescript.ts'
import { binaryToDecimal as binaryToDecimalJs } from '../../src/other/binaryToDecimal/javascript.js'

test(`'1010' to 10`, () => {
  expect(binaryToDecimal('1010')).toBe(10)
})

test(`'1010' to 10`, () => {
  expect(binaryToDecimalJs('1010')).toBe(10)
})
