import { expect, test } from 'vitest'
import { insertInterval } from './typescript.ts'
import { insertInterval as insertIntervalJs } from './javascript.js'

test(`insertInterval`, () => {
  expect(insertInterval([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]])
})

test(`insertIntervalJs`, () => {
  expect(insertIntervalJs([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]])
})
