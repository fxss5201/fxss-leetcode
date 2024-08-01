import { expect, test } from 'vitest'
import { findFirstAndLastPositionOfElementInSortedArray } from '../../src/leetcode/findFirstAndLastPositionOfElementInSortedArray/typescript.ts'
import { findFirstAndLastPositionOfElementInSortedArray as findFirstAndLastPositionOfElementInSortedArrayJs } from '../../src/leetcode/findFirstAndLastPositionOfElementInSortedArray/javascript.js'

test(`findFirstAndLastPositionOfElementInSortedArray`, () => {
  expect(findFirstAndLastPositionOfElementInSortedArray([1,2,3,4,5,7,7,8,8,8,8,10], 8)).toEqual([7,10])
  expect(findFirstAndLastPositionOfElementInSortedArray([1,2,2,2,2,3,4,5,7,7,8,8,8,8,10], 2)).toEqual([1,4])
  expect(findFirstAndLastPositionOfElementInSortedArray([1,2,2,2,2,3,4,5,7,7,8,8,8,8,10], 6)).toEqual([-1,-1])
  expect(findFirstAndLastPositionOfElementInSortedArray([], 8)).toEqual([-1,-1])
})

test(`findFirstAndLastPositionOfElementInSortedArrayJs`, () => {
  expect(findFirstAndLastPositionOfElementInSortedArrayJs([1,2,3,4,5,7,7,8,8,8,8,10], 8)).toEqual([7,10])
  expect(findFirstAndLastPositionOfElementInSortedArrayJs([1,2,2,2,2,3,4,5,7,7,8,8,8,8,10], 2)).toEqual([1,4])
  expect(findFirstAndLastPositionOfElementInSortedArrayJs([1,2,2,2,2,3,4,5,7,7,8,8,8,8,10], 6)).toEqual([-1,-1])
  expect(findFirstAndLastPositionOfElementInSortedArrayJs([], 8)).toEqual([-1,-1])
})
