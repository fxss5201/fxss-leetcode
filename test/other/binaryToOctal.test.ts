import { expect, test } from 'vitest'
import { binaryToOctal } from '../../src/other/binaryToOctal/typescript.ts'
import { binaryToOctal as binaryToOctalJs } from '../../src/other/binaryToOctal/javascript.js'

test(`binaryToOctal`, () => {
  expect(binaryToOctal('1101')).toBe('15')
})

test(`binaryToOctalJs`, () => {
  expect(binaryToOctalJs('1101')).toBe('15')
})
