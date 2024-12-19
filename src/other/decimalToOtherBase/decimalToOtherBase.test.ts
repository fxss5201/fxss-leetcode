import { expect, test } from 'vitest'
import { decimalToOtherBase } from './typescript.ts'
import { decimalToOtherBase as decimalToOtherBaseJs } from './javascript.js'

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

test(`decimalToOtherBase(34, 12)`, () => {
  expect(decimalToOtherBase(34, 12)).toBe('2a')
})

test(`decimalToOtherBaseJs(34, 12)`, () => {
  expect(decimalToOtherBaseJs(34, 12)).toBe('2a')
})

test(`decimalToOtherBase(100, 36)`, () => {
  expect(decimalToOtherBase(100, 36)).toBe('2s')
})

test(`decimalToOtherBaseJs(100, 36)`, () => {
  expect(decimalToOtherBaseJs(100, 36)).toBe('2s')
})

test(`decimalToOtherBase(10, 38)`, () => {
  expect(decimalToOtherBase(10, 38)).toBe('10')
})

test(`decimalToOtherBaseJs(10, 38)`, () => {
  expect(decimalToOtherBaseJs(10, 38)).toBe('10')
})
