import { expect, test } from 'vitest'
import { threeSum } from '../../src/leetcode/threeSum/typescript.ts'
import { threeSum as threeSumJs } from '../../src/leetcode/threeSum/javascript.js'

test(`[-1,0,1,2,-1,-4]`, () => {
  expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]])
})

test(`[-1,0,1,2,-1,-4]`, () => {
  expect(threeSumJs([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]])
})
