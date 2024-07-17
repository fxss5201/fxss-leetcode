import { expect, test } from 'vitest'
import { longestCommonPrefix } from '../../src/leetcode/longestCommonPrefix/typescript.ts'
import { longestCommonPrefix as longestCommonPrefixJs } from '../../src/leetcode/longestCommonPrefix/javascript.js'

test(`["flower","flow","flight"] toBe 'fl'`, () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl')
})

test(`["flower","flow","flight"] toBe 'fl'`, () => {
  expect(longestCommonPrefixJs(["flower","flow","flight"])).toBe('fl')
})
