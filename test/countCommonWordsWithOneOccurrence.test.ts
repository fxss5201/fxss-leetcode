import { expect, test } from 'vitest'
import { countWords } from '../src/countCommonWordsWithOneOccurrence/typescript.ts'
import { countWords as countWordsJs } from '../src/countCommonWordsWithOneOccurrence/javascript.js'

const words1 = ["leetcode","is","amazing","as","is"]
const words2 = ["amazing","leetcode","is"]

const words3 = ["b","bb","bbb"]
const words4 = ["a","aa","aaa"]

const words5 = ["a","ab"]
const words6 = ["a","a","a","ab"]

test(`countWords(words1, words2) toBe 2`, () => {
  expect(countWords(words1, words2)).toBe(2)
})

test(`countWords(words1, words2) toBe 2`, () => {
  expect(countWordsJs(words1, words2)).toBe(2)
})


test(`countWords(words3, words4) toBe 0`, () => {
  expect(countWords(words3, words4)).toBe(0)
})

test(`countWords(words3, words4) toBe 0`, () => {
  expect(countWordsJs(words3, words4)).toBe(0)
})


test(`countWords(words5, words6) toBe 1`, () => {
  expect(countWords(words5, words6)).toBe(1)
})

test(`countWords(words5, words6) toBe 1`, () => {
  expect(countWordsJs(words5, words6)).toBe(1)
})