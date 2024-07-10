import { expect, test } from 'vitest'
import { reverse } from '../../src/leetcode/reverseInteger/typescript.ts'


test(`123`, () => {
  expect(reverse(123)).toBe(321)
})