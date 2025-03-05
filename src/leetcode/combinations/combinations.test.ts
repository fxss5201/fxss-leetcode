import { expect, test } from 'vitest'
import { combinations } from './typescript.ts'
import { combinations as combinationsJs } from './javascript.js'

test(`combinations`, () => {
  expect(combinations(4, 2)).toEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
  expect(combinations(1, 1)).toEqual([[1]])
})

test(`combinationsJs`, () => {
  expect(combinationsJs(4, 2)).toEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
  expect(combinationsJs(1, 1)).toEqual([[1]])
})
