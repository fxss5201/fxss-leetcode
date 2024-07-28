import { expect, test } from 'vitest'
import { removeDuplicates } from '../../src/leetcode/removeDuplicates/typescript.ts'
import { removeDuplicates as removeDuplicatesJs } from '../../src/leetcode/removeDuplicates/javascript.js'

test(`removeDuplicates`, () => {
  const nums = [1,1,2]
  const resNums = [1, 2]
  const size = removeDuplicates(nums)
  let flag = true
  for (let i = 0; i < size; i++) {
    if (nums[i] !== resNums[i]) {
      flag = false
    }
  }
  expect(size).toBe(2)
  expect(flag).toBe(true)
})

test(`removeDuplicatesJs`, () => {
  const nums = [0,0,1,1,1,2,2,3,3,4]
  const resNums = [0,1,2,3,4]
  const size = removeDuplicatesJs(nums)
  let flag = true
  for (let i = 0; i < size; i++) {
    if (nums[i] !== resNums[i]) {
      flag = false
    }
  }
  expect(size).toBe(5)
  expect(flag).toBe(true)
})
