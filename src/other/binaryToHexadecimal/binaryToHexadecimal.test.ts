import { expect, test } from 'vitest'
import { binaryToHexadecimal } from './typescript.ts'
import { binaryToHexadecimal as binaryToHexadecimalJs } from './javascript.js'

test(`binaryToHexadecimal 11111`, () => {
  expect(binaryToHexadecimal('11111')).toBe('1f')
})

test(`binaryToHexadecimalJs 11111`, () => {
  expect(binaryToHexadecimalJs('11111')).toBe('1f')
})
