import { expect, test } from 'vitest'
import { searchA_2dMatrix } from './typescript.ts'
import { searchA_2dMatrix as searchA_2dMatrixJs } from './javascript.js'

test(`searchA_2dMatrix`, () => {
  expect(searchA_2dMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).toBe(true)
  expect(searchA_2dMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).toBe(false)
})

test(`searchA_2dMatrixJs`, () => {
  expect(searchA_2dMatrixJs([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).toBe(true)
  expect(searchA_2dMatrixJs([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).toBe(false)
})
