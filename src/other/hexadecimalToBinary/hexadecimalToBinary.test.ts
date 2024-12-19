import { expect, test } from 'vitest'
import { hexadecimalToBinary } from './typescript.ts'
import { hexadecimalToBinary as hexadecimalToBinaryJs } from './javascript.js'

test(`hexadecimalToBinary 16`, () => {
  expect(hexadecimalToBinary('16')).toBe('10110')
})

test(`hexadecimalToBinaryJs 16`, () => {
  expect(hexadecimalToBinaryJs('16')).toBe('10110')
})

test(`hexadecimalToBinary 1b`, () => {
  expect(hexadecimalToBinary('1b')).toBe('11011')
})

test(`hexadecimalToBinaryJs 1b`, () => {
  expect(hexadecimalToBinaryJs('1b')).toBe('11011')
})

test(`hexadecimalToBinary 1F`, () => {
  expect(hexadecimalToBinary('1F')).toBe('11111')
})

test(`hexadecimalToBinaryJs 1F`, () => {
  expect(hexadecimalToBinaryJs('1F')).toBe('11111')
})
