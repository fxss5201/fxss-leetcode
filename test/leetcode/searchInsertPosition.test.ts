import { expect, test } from 'vitest'
import { searchInsertPosition } from '../../src/leetcode/searchInsertPosition/typescript.ts'
import { searchInsertPosition as searchInsertPositionJs } from '../../src/leetcode/searchInsertPosition/javascript.js'

test(`searchInsertPosition`, () => {
  expect(searchInsertPosition([1,3,5,6], 5)).toBe(2)
  expect(searchInsertPosition([1,3,5,6], 2)).toBe(1)
  expect(searchInsertPosition([1,3,5,6], 7)).toBe(4)
  expect(searchInsertPosition([1,3,5,6], 4)).toBe(2)
})

test(`searchInsertPositionJs`, () => {
  expect(searchInsertPositionJs([1,3,5,6], 5)).toBe(2)
  expect(searchInsertPositionJs([1,3,5,6], 2)).toBe(1)
  expect(searchInsertPositionJs([1,3,5,6], 7)).toBe(4)
  expect(searchInsertPositionJs([1,3,5,6], 4)).toBe(2)
})
