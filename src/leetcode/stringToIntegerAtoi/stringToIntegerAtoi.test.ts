import { expect, test } from 'vitest'
import { stringToIntegerAtoi } from './typescript.ts'
import { stringToIntegerAtoi as stringToIntegerAtoiJs } from './javascript.js'

test(`stringToIntegerAtoi`, () => {
  expect(stringToIntegerAtoi('42')).toBe(42)
  expect(stringToIntegerAtoi(' -042')).toBe(-42)
  expect(stringToIntegerAtoi('1337c0d3')).toBe(1337)
  expect(stringToIntegerAtoi('0-1')).toBe(0)
  expect(stringToIntegerAtoi('words and 987')).toBe(0)
  expect(stringToIntegerAtoi('-+12')).toBe(0)
  expect(stringToIntegerAtoi('+12')).toBe(12)
})

test(`stringToIntegerAtoiJs`, () => {
  expect(stringToIntegerAtoiJs('42')).toBe(42)
  expect(stringToIntegerAtoiJs(' -042')).toBe(-42)
  expect(stringToIntegerAtoiJs('1337c0d3')).toBe(1337)
  expect(stringToIntegerAtoiJs('0-1')).toBe(0)
  expect(stringToIntegerAtoiJs('words and 987')).toBe(0)
  expect(stringToIntegerAtoiJs('-+12')).toBe(0)
  expect(stringToIntegerAtoiJs('+12')).toBe(12)
})
