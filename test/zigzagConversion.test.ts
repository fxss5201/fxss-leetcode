import { expect, test } from 'vitest'
import { convert } from '../src/leetcode/zigzagConversion/typescript.ts'


test(`PAYPALISHIRING`, () => {
  expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR')
})