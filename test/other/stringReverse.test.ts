import { expect, test } from 'vitest'
import { stringReverse } from '../../src/other/stringReverse/typescript.ts'
import { stringReverse as stringReverseJs } from '../../src/other/stringReverse/javascript.js'

test(`'abcd' toEqual 'dcba'`, () => {
  expect(stringReverse('abcd')).toEqual('dcba')
})

test(`'abcd' toEqual 'dcba'`, () => {
  expect(stringReverseJs('abcd')).toEqual('dcba')
})
