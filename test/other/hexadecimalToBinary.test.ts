import { expect, test } from 'vitest'
import { hexadecimalToBinary } from '../../src/other/hexadecimalToBinary/typescript.ts'
import { hexadecimalToBinary as hexadecimalToBinaryJs } from '../../src/other/hexadecimalToBinary/javascript.js'

test(`hexadecimalToBinary`, () => {
  expect(hexadecimalToBinary('16')).toBe('10110')
})

test(`hexadecimalToBinaryJs`, () => {
  expect(hexadecimalToBinaryJs('16')).toBe('10110')
})

test(`hexadecimalToBinary`, () => {
  expect(hexadecimalToBinary('1b')).toBe('11011')
})

test(`hexadecimalToBinaryJs`, () => {
  expect(hexadecimalToBinaryJs('1b')).toBe('11011')
})
