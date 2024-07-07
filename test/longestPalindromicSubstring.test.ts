import { expect, test } from 'vitest'
import { longestPalindrome } from '../src/leetcode/longestPalindromicSubstring/typescript.ts'


test(`PAYPALISHIRING`, () => {
  expect(longestPalindrome('aacabdkacaa')).toEqual('aca')
})