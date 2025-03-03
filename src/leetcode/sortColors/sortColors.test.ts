import { expect, test } from 'vitest'
import { sortColors } from './typescript.ts'
import { sortColors as sortColorsJs } from './javascript.js'

test(`sortColors`, () => {
  const nums = [2,0,2,1,1,0]
  sortColors(nums)
  expect(nums).toEqual([0,0,1,1,2,2])

  const nums1 = [2,0,1]
  sortColors(nums1)
  expect(nums1).toEqual([0,1,2])
})

test(`sortColorsJs`, () => {
  const nums = [2,0,2,1,1,0]
  sortColorsJs(nums)
  expect(nums).toEqual([0,0,1,1,2,2])

  const nums1 = [2,0,1]
  sortColorsJs(nums1)
  expect(nums1).toEqual([0,1,2])
})
