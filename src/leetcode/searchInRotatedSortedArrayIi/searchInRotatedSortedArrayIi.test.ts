import { expect, test } from 'vitest'
import { searchInRotatedSortedArrayIi } from './typescript.ts'
import { searchInRotatedSortedArrayIi as searchInRotatedSortedArrayIiJs } from './javascript.js'

test(`searchInRotatedSortedArrayIi`, () => {
  expect(searchInRotatedSortedArrayIi([2,5,6,0,0,1,2], 0)).toBe(true)
  expect(searchInRotatedSortedArrayIi([2,5,6,0,0,1,2], 3)).toBe(false)
})

test(`searchInRotatedSortedArrayIiJs`, () => {
  expect(searchInRotatedSortedArrayIiJs([2,5,6,0,0,1,2], 0)).toBe(true)
  expect(searchInRotatedSortedArrayIiJs([2,5,6,0,0,1,2], 3)).toBe(false)
})
