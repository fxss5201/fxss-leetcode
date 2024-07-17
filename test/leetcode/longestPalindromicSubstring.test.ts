import { expect, test } from 'vitest'
import { longestPalindrome } from '../../src/leetcode/longestPalindromicSubstring/typescript.ts'
import { longestPalindrome as longestPalindromeJs } from '../../src/leetcode/longestPalindromicSubstring/javascript.js'

test(`longestPalindrome`, () => {
  expect(longestPalindrome('aacabdkacaa')).toEqual('aca')
})

test(`longestPalindromeJs`, () => {
  expect(longestPalindromeJs('aacabdkacaa')).toEqual('aca')
})
