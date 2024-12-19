import { expect, test } from 'vitest'
import { reverse } from './typescript.ts'
import { reverse as reverseJs } from './javascript.js'

test(`123`, () => {
  expect(reverse(123)).toBe(321)
})

test(`123`, () => {
  expect(reverseJs(123)).toBe(321)
})
