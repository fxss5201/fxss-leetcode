import { expect, test } from 'vitest'
import { powxN } from './typescript.ts'
import { powxN as powxNJs } from './javascript.js'

test(`powxN`, () => {
  expect(powxN(2, 10)).toBe(1024)
  expect(powxN(2, -2)).toBe(0.25)
})

test(`powxNJs`, () => {
  expect(powxNJs(2, 10)).toBe(1024)
  expect(powxNJs(2, -2)).toBe(0.25)
})
