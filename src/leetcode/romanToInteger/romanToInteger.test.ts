import { expect, test } from 'vitest'
import { romanToInt } from './typescript.ts'
import { romanToInt as romanToIntJs } from './javascript.js'

test(`MMMDCCXLIX`, () => {
  expect(romanToInt('MMMDCCXLIX')).toBe(3749)
})

test(`MMMDCCXLIX`, () => {
  expect(romanToIntJs('MMMDCCXLIX')).toBe(3749)
})
