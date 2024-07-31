import { expect, test } from 'vitest'
import { searchInRotatedSortedArray } from '../../src/leetcode/searchInRotatedSortedArray/typescript.ts'
import { searchInRotatedSortedArray as searchInRotatedSortedArrayJs } from '../../src/leetcode/searchInRotatedSortedArray/javascript.js'

test(`searchInRotatedSortedArray`, () => {
  expect(searchInRotatedSortedArray([4,5,6,7,0,1,2], 0)).toBe(4)
})

test(`searchInRotatedSortedArrayJs`, () => {
  expect(searchInRotatedSortedArrayJs([4,5,6,7,0,1,2], 0)).toBe(4)
})
