import { expect, test } from 'vitest'
import { spiralMatrix } from './typescript.ts'
import { spiralMatrix as spiralMatrixJs } from './javascript.js'

test(`spiralMatrix`, () => {
  expect(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]])).toEqual([1,2,3,4,8,12,11,10,9,5,6,7])
  expect(spiralMatrix([])).toEqual([])
})

test(`spiralMatrixJs`, () => {
  expect(spiralMatrixJs([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5])
  expect(spiralMatrixJs([[]])).toEqual([])
})
