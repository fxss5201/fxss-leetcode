import { expect, test } from 'vitest'
import { removeElement } from './typescript.ts'
import { removeElement as removeElementJs } from './javascript.js'

test(`removeElement`, () => {
  const nums = [3,2,2,3]
  const resNums = [2,2]
  const size = removeElement(nums, 3)
  let flag = true
  for (let i = 0; i < size; i++) {
    if (nums[i] !== resNums[i]) {
      flag = false
    }
  }
  expect(size).toBe(2)
  expect(flag).toBe(true)
})

test(`removeElementJs`, () => {
  const nums = [0,1,2,2,3,0,4,2]
  const resNums = [0,1,4,0,3]
  const size = removeElementJs(nums, 2)
  let flag = true
  for (let i = 0; i < size; i++) {
    if (nums[i] !== resNums[i]) {
      flag = false
    }
  }
  expect(size).toBe(5)
  expect(flag).toBe(true)
})
