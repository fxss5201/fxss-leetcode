import { expect, test } from 'vitest'
import { convert } from './typescript.ts'
import { convert as convertJs } from './javascript.js'

test(`PAYPALISHIRING`, () => {
  expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR')
})

test(`PAYPALISHIRING`, () => {
  expect(convertJs('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR')
})
