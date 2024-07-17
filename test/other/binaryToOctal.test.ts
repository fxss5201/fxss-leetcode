import { expect, test } from 'vitest'
import { binaryToOctal } from '../../src/other/binaryToOctal/typescript.ts'
import { binaryToOctal as binaryToOctalJs } from '../../src/other/binaryToOctal/javascript.js'

test(`binaryToOctal 1101`, () => {
  expect(binaryToOctal('1101')).toBe('15')
})

test(`binaryToOctalJs 1101`, () => {
  expect(binaryToOctalJs('1101')).toBe('15')
})

test(`binaryToOctal 1001`, () => {
  expect(binaryToOctal('1001')).toBe('11')
})

test(`binaryToOctalJs 1001`, () => {
  expect(binaryToOctalJs('1001')).toBe('11')
})
