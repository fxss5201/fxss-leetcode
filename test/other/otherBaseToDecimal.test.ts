import { expect, test } from 'vitest'
import { otherBaseToDecimal } from '../../src/other/otherBaseToDecimal/typescript.ts'
import { otherBaseToDecimal as otherBaseToDecimalJs } from '../../src/other/otherBaseToDecimal/javascript.js'

test(`otherBaseToDecimal('1010', 2)`, () => {
  expect(otherBaseToDecimal('1010', 2)).toBe(10)
})

test(`otherBaseToDecimalJs('1010', 2)`, () => {
  expect(otherBaseToDecimalJs('1010', 2)).toBe(10)
})

test(`otherBaseToDecimal('36', 8)`, () => {
  expect(otherBaseToDecimal('36', 8)).toBe(30)
})

test(`otherBaseToDecimalJs('36', 8)`, () => {
  expect(otherBaseToDecimalJs('36', 8)).toBe(30)
})

test(`otherBaseToDecimal('1e', 16)`, () => {
  expect(otherBaseToDecimal('1e', 16)).toBe(30)
})

test(`otherBaseToDecimalJs('1e', 16)`, () => {
  expect(otherBaseToDecimalJs('1e', 16)).toBe(30)
})

test(`otherBaseToDecimal('2a', 12)`, () => {
  expect(otherBaseToDecimal('2a', 12)).toBe(34)
})

test(`otherBaseToDecimalJs('2a', 12)`, () => {
  expect(otherBaseToDecimalJs('2a', 12)).toBe(34)
})

test(`otherBaseToDecimal('2s', 36)`, () => {
  expect(otherBaseToDecimal('2s', 36)).toBe(100)
})

test(`otherBaseToDecimalJs('2s', 36)`, () => {
  expect(otherBaseToDecimalJs('2s', 36)).toBe(100)
})

test(`otherBaseToDecimal('2a', 38)`, () => {
  expect(otherBaseToDecimal('2a', 38)).toBe(NaN)
})

test(`otherBaseToDecimalJs('2a', 38)`, () => {
  expect(otherBaseToDecimalJs('2a', 38)).toBe(NaN)
})