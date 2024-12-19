import { expect, test } from 'vitest'
import { octalToBinary } from './typescript.ts'
import { octalToBinary as octalToBinaryJs } from './javascript.js'

test(`'15' to '1101'`, () => {
  expect(octalToBinary('15')).toBe('1101')
})

test(`'15' to '1101'`, () => {
  expect(octalToBinaryJs('15')).toBe('1101')
})

test(`'11' to '1001'`, () => {
  expect(octalToBinary('11')).toBe('1001')
})

test(`'11' to '1001'`, () => {
  expect(octalToBinaryJs('11')).toBe('1001')
})
