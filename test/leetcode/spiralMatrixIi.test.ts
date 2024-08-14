import { expect, test } from 'vitest'
import { spiralMatrixIi } from '../../src/leetcode/spiralMatrixIi/typescript.ts'
import { spiralMatrixIi as spiralMatrixIiJs } from '../../src/leetcode/spiralMatrixIi/javascript.js'

test(`spiralMatrixIi`, () => {
  expect(spiralMatrixIi(3)).toEqual([[1,2,3],[8,9,4],[7,6,5]])
})

test(`spiralMatrixIiJs`, () => {
  expect(spiralMatrixIiJs(3)).toEqual([[1,2,3],[8,9,4],[7,6,5]])
})
