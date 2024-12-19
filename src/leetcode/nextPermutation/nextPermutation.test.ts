import { expect, test } from 'vitest'
import { nextPermutation } from './typescript.ts'
import { nextPermutation as nextPermutationJs } from './javascript.js'

test(`nextPermutation`, () => {
  const nums = [1,2,4,3]
  nextPermutation(nums)
  expect(nums).toEqual([1,3,2,4])
})

test(`nextPermutationJs`, () => {
  const nums = [1,2,4,3]
  nextPermutationJs(nums)
  expect(nums).toEqual([1,3,2,4])
})
