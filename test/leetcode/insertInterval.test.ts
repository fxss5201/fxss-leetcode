import { expect, test } from 'vitest'
import { insertInterval } from '../../src/leetcode/insertInterval/typescript.ts'
import { insertInterval as insertIntervalJs } from '../../src/leetcode/insertInterval/javascript.js'

test(`insertInterval`, () => {
  expect(insertInterval([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]])
})

test(`insertIntervalJs`, () => {
  expect(insertIntervalJs([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]])
})
