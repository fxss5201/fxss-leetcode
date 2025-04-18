import { expect, test } from 'vitest'
import { repeatLimitedString } from './typescript.ts'
import { repeatLimitedString as repeatLimitedStringJs } from './javascript.js'

test(`repeatLimitedString('cczazcc', 3) toBe 'zzcccac'`, () => {
  expect(repeatLimitedString('cczazcc', 3)).toBe('zzcccac')
})

test(`repeatLimitedString('aababab', 2) toBe 'bbabaa'`, () => {
  expect(repeatLimitedString('aababab', 2)).toBe('bbabaa')
})


test(`repeatLimitedStringJs('cczazcc', 3) toBe 'zzcccac'`, () => {
  expect(repeatLimitedStringJs('cczazcc', 3)).toBe('zzcccac')
})

test(`repeatLimitedStringJs('aababab', 2) toBe 'bbabaa'`, () => {
  expect(repeatLimitedStringJs('aababab', 2)).toBe('bbabaa')
})
