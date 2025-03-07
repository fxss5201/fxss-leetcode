import { expect, test } from 'vitest'
import { removeDuplicatesFromSortedArrayIi } from './typescript.ts'
import { removeDuplicatesFromSortedArrayIi as removeDuplicatesFromSortedArrayIiJs } from './javascript.js'

test(`removeDuplicatesFromSortedArrayIi`, () => {
  const nums = [1,1,1,2,2,3]
  expect(removeDuplicatesFromSortedArrayIi(nums)).toBe(5)
  expect(nums).toEqual([1,1,2,2,3])

  const nums2 = [0,0,1,1,1,1,2,3,3]
  expect(removeDuplicatesFromSortedArrayIi(nums2)).toBe(7)
  expect(nums2).toEqual([0,0,1,1,2,3,3])
})

test(`removeDuplicatesFromSortedArrayIiJs`, () => {
  const nums = [1,1,1,2,2,3]
  expect(removeDuplicatesFromSortedArrayIiJs(nums)).toBe(5)
  expect(nums).toEqual([1,1,2,2,3])

  const nums2 = [0,0,1,1,1,1,2,3,3]
  expect(removeDuplicatesFromSortedArrayIiJs(nums2)).toBe(7)
  expect(nums2).toEqual([0,0,1,1,2,3,3])
})
