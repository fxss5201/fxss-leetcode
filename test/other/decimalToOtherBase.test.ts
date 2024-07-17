import { expect, test } from 'vitest'
import { decimalToOtherBase } from '../../src/other/decimalToOtherBase/typescript.ts'
import { decimalToOtherBase as decimalToOtherBaseJs } from '../../src/other/decimalToOtherBase/javascript.js'

test(`decimalToOtherBase(10, 2)`, () => {
  expect(decimalToOtherBase(10, 2)).toBe('1010')
})

test(`decimalToOtherBaseJs(10, 2)`, () => {
  expect(decimalToOtherBaseJs(10, 2)).toBe('1010')
})

test(`decimalToOtherBase(30, 8)`, () => {
  expect(decimalToOtherBase(30, 8)).toBe('36')
})

test(`decimalToOtherBaseJs(30, 8)`, () => {
  expect(decimalToOtherBaseJs(30, 8)).toBe('36')
})

test(`decimalToOtherBase(30, 16)`, () => {
  expect(decimalToOtherBase(30, 16)).toBe('1e')
})

test(`decimalToOtherBaseJs(30, 16)`, () => {
  expect(decimalToOtherBaseJs(30, 16)).toBe('1e')
})

test(`decimalToOtherBase(10, 32)`, () => {
  expect(decimalToOtherBase(10, 32)).toBe('10')
})

test(`decimalToOtherBaseJs(10, 32)`, () => {
  expect(decimalToOtherBaseJs(10, 32)).toBe('10')
})
