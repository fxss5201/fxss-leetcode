import { expect, test } from 'vitest'
import { groupAnagrams } from '../../src/leetcode/groupAnagrams/typescript.ts'
import { groupAnagrams as groupAnagramsJs } from '../../src/leetcode/groupAnagrams/javascript.js'

test(`groupAnagrams`, () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]])
})

test(`groupAnagramsJs`, () => {
  expect(groupAnagramsJs(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]])
})
