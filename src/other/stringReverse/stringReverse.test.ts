import { expect, test } from 'vitest'
import { stringReverse } from './typescript.ts'
import { stringReverse as stringReverseJs } from './javascript.js'

test(`'abcd' toEqual 'dcba'`, () => {
  expect(stringReverse('abcd')).toEqual('dcba')
})

test(`'abcd' toEqual 'dcba'`, () => {
  expect(stringReverseJs('abcd')).toEqual('dcba')
})
