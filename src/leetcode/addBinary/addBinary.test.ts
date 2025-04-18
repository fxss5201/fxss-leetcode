import { expect, test } from 'vitest'
import { addBinary } from './typescript.ts'
import { addBinary as addBinaryJs } from './javascript.js'

test(`addBinary`, () => {
  expect(addBinary('11', '1')).toBe('100')
  expect(addBinary('10', '111')).toBe('1001')
})

test(`addBinaryJs`, () => {
  expect(addBinaryJs('11', '1')).toBe('100')
  expect(addBinaryJs('10', '111')).toBe('1001')
})
