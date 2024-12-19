import { expect, test } from 'vitest'
import { isPalindrome } from './typescript.ts'
import { isPalindrome as isPalindromeJs } from './javascript.js'

test(`121`, () => {
  expect(isPalindrome(121)).toEqual(true)
})

test(`121`, () => {
  expect(isPalindromeJs(121)).toEqual(true)
})
