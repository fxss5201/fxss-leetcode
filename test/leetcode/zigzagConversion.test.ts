import { expect, test } from 'vitest'
import { convert } from '../../src/leetcode/zigzagConversion/typescript.ts'
import { convert as convertJs } from '../../src/leetcode/zigzagConversion/javascript.js'

test(`PAYPALISHIRING`, () => {
  expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR')
})

test(`PAYPALISHIRING`, () => {
  expect(convertJs('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR')
})
