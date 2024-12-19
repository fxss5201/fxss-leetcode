import { expect, test } from 'vitest'
import { longestCommonPrefix } from './typescript.ts'
import { longestCommonPrefix as longestCommonPrefixJs } from './javascript.js'

test(`["flower","flow","flight"] toBe 'fl'`, () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl')
})

test(`["flower","flow","flight"] toBe 'fl'`, () => {
  expect(longestCommonPrefixJs(["flower","flow","flight"])).toBe('fl')
})
