import { expect, test } from 'vitest'
import { arrayReverse } from '../../src/other/arrayReverse/typescript.ts'
import { arrayReverse as arrayReverseJs } from '../../src/other/arrayReverse/javascript.js'

test(`[1, 2, 3] toEqual [3, 2, 1]`, () => {
  expect(arrayReverse([1, 2, 3])).toEqual([3, 2, 1])
})

test(`[1, 2, 3] toEqual [3, 2, 1]`, () => {
  expect(arrayReverseJs([1, 2, 3])).toEqual([3, 2, 1])
})
