import { expect, test } from 'vitest'
import { isPalindrome } from '../../src/leetcode/palindromeNumber/typescript.ts'
import { isPalindrome as isPalindromeJs } from '../../src/leetcode/palindromeNumber/javascript.js'

test(`121`, () => {
  expect(isPalindrome(121)).toEqual(true)
})

test(`121`, () => {
  expect(isPalindromeJs(121)).toEqual(true)
})
