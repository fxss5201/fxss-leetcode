import { expect, test } from 'vitest'
import { setMatrixZeroes } from './typescript.ts'
import { setMatrixZeroes as setMatrixZeroesJs } from './javascript.js'

test(`setMatrixZeroes`, () => {
  const matrix = [[1,1,1],[1,0,1],[1,1,1]]
  setMatrixZeroes(matrix)
  expect(matrix).toEqual([[1,0,1],[0,0,0],[1,0,1]])

  const matrix1 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
  setMatrixZeroes(matrix1)
  expect(matrix1).toEqual([[0,0,0,0],[0,4,5,0],[0,3,1,0]])
})

test(`setMatrixZeroesJs`, () => {
  const matrix = [[1,1,1],[1,0,1],[1,1,1]]
  setMatrixZeroesJs(matrix)
  expect(matrix).toEqual([[1,0,1],[0,0,0],[1,0,1]])

  const matrix1 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
  setMatrixZeroesJs(matrix1)
  expect(matrix1).toEqual([[0,0,0,0],[0,4,5,0],[0,3,1,0]])
})
