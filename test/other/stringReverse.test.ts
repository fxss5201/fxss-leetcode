import { expect, test } from 'vitest'
import { stringReverse } from '../../src/other/stringReverse/typescript.ts'

test(`'abcd' toEqual 'dcba'`, () => {
  expect(stringReverse('abcd')).toEqual('dcba')
})

