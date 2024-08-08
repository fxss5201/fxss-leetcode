import { expect, test } from 'vitest'
import { rotateImage } from '../../src/leetcode/rotateImage/typescript.ts'
import { rotateImage as rotateImageJs } from '../../src/leetcode/rotateImage/javascript.js'

test(`rotateImage`, () => {
  const matrix = [[1,2,3],[4,5,6],[7,8,9]]
  rotateImage(matrix)
  expect(matrix).toEqual([[7,4,1],[8,5,2],[9,6,3]])
})

test(`rotateImageJs`, () => {
  const matrix = [[1,2,3],[4,5,6],[7,8,9]]
  rotateImageJs(matrix)
  expect(matrix).toEqual([[7,4,1],[8,5,2],[9,6,3]])
})
