import { expect, test } from 'vitest'
import { arrayReverse } from '../../src/other/arrayReverse/typescript.ts'

test(`[1, 2, 3] toEqual [3, 2, 1]`, () => {
  expect(arrayReverse([1, 2, 3])).toEqual([3, 2, 1])
})

