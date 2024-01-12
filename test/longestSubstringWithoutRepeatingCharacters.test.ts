import { expect, test } from 'vitest'
import { lengthOfLongestSubstring } from '../src/longestSubstringWithoutRepeatingCharacters/typescript.ts'
import { lengthOfLongestSubstring as lengthOfLongestSubstringJs } from '../src/longestSubstringWithoutRepeatingCharacters/javascript.js'

test(`lengthOfLongestSubstring('abcabcbb') toBe 3`, () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
})

test(`lengthOfLongestSubstring('bbbbb') toBe 1`, () => {
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
})

test(`lengthOfLongestSubstring('pwwkew') toBe 3`, () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})


test(`lengthOfLongestSubstringJs('abcabcbb') toBe 3`, () => {
  expect(lengthOfLongestSubstringJs('abcabcbb')).toBe(3)
})

test(`lengthOfLongestSubstringJs('bbbbb') toBe 1`, () => {
  expect(lengthOfLongestSubstringJs('bbbbb')).toBe(1)
})

test(`lengthOfLongestSubstringJs('pwwkew') toBe 3`, () => {
  expect(lengthOfLongestSubstringJs('pwwkew')).toBe(3)
})