import { expect, test } from 'vitest'
import { groupAnagrams } from './typescript.ts'
import { groupAnagrams as groupAnagramsJs } from './javascript.js'

test(`groupAnagrams`, () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]])
})

test(`groupAnagramsJs`, () => {
  expect(groupAnagramsJs(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]])
})
