import { expect, test } from 'vitest'
import { isPalindrome } from '../../src/leetcode/palindromeNumber/typescript.ts'


test(`121`, () => {
  expect(isPalindrome(121)).toEqual(true)
})