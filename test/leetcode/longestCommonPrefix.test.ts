import { expect, test } from 'vitest'
import { longestCommonPrefix } from '../../src/leetcode/longestCommonPrefix/typescript.ts'

test(`["flower","flow","flight"] toBe 'fl'`, () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl')
})
