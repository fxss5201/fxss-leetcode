import { expect, test } from 'vitest'
import { decimalToBinary } from '../../src/other/decimalToBinary/typescript.ts'

test(`10 to '1010'`, () => {
  expect(decimalToBinary(10)).toBe('1010')
})
