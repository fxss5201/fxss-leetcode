import { expect, test } from 'vitest'
import { octalToBinary } from '../../src/other/octalToBinary/typescript.ts'
import { octalToBinary as octalToBinaryJs } from '../../src/other/octalToBinary/javascript.js'

test(`'15' to '1101'`, () => {
  expect(octalToBinary('15')).toBe('1101')
})

test(`'15' to '1101'`, () => {
  expect(octalToBinaryJs('15')).toBe('1101')
})
