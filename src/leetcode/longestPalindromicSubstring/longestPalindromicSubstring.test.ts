import { expect, test } from 'vitest'
import { longestPalindrome } from './typescript.ts'
import { longestPalindrome as longestPalindromeJs } from './javascript.js'

test(`longestPalindrome`, () => {
  expect(longestPalindrome('aacabdkacaa')).toEqual('aca')
})

test(`longestPalindromeJs`, () => {
  expect(longestPalindromeJs('aacabdkacaa')).toEqual('aca')
})
