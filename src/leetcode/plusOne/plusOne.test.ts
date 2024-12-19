import { expect, test } from 'vitest'
import { plusOne } from './typescript.ts'
import { plusOne as plusOneJs } from './javascript.js'

test(`plusOne`, () => {
  expect(plusOne([1,2,3])).toEqual([1,2,4])
  expect(plusOne([1,2,9])).toEqual([1,3,0])
  expect(plusOne([9])).toEqual([1,0])
})

test(`plusOneJs`, () => {
  expect(plusOneJs([1,2,3])).toEqual([1,2,4])
  expect(plusOneJs([1,2,9])).toEqual([1,3,0])
  expect(plusOneJs([9])).toEqual([1,0])
})
