import { expect, test } from 'vitest'
import { octalToBinary } from '../../src/other/octalToBinary/typescript.ts'

test(`'15' to '1101'`, () => {
  expect(octalToBinary('15')).toBe('1101')
})
