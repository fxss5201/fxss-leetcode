import { expect, test } from 'vitest'
import { binaryToDecimal } from '../../src/other/binaryToDecimal/typescript.ts'

test(`'1010' to 10`, () => {
  expect(binaryToDecimal('1010')).toBe(10)
})
