import { expect, test } from 'vitest'
import { countWords, countWordsMap } from './typescript.ts'
import { countWords as countWordsJs, countWordsMap as countWordsMapJs } from './javascript.js'

const words1 = ["leetcode","is","amazing","as","is"]
const words2 = ["amazing","leetcode","is"]

const words3 = ["b","bb","bbb"]
const words4 = ["a","aa","aaa"]

const words5 = ["a","ab"]
const words6 = ["a","a","a","ab"]

test(`countWords(words1, words2) toBe 2`, () => {
  expect(countWords(words1, words2)).toBe(2)
})

test(`countWordsJs(words1, words2) toBe 2`, () => {
  expect(countWordsJs(words1, words2)).toBe(2)
})


test(`countWords(words3, words4) toBe 0`, () => {
  expect(countWords(words3, words4)).toBe(0)
})

test(`countWordsJs(words3, words4) toBe 0`, () => {
  expect(countWordsJs(words3, words4)).toBe(0)
})


test(`countWords(words5, words6) toBe 1`, () => {
  expect(countWords(words5, words6)).toBe(1)
})

test(`countWordsJs(words5, words6) toBe 1`, () => {
  expect(countWordsJs(words5, words6)).toBe(1)
})


test(`countWordsMap(words1, words2) toBe 2`, () => {
  expect(countWordsMap(words1, words2)).toBe(2)
})

test(`countWordsMapJs(words1, words2) toBe 2`, () => {
  expect(countWordsMapJs(words1, words2)).toBe(2)
})


test(`countWordsMap(words3, words4) toBe 0`, () => {
  expect(countWordsMap(words3, words4)).toBe(0)
})

test(`countWordsMapJs(words3, words4) toBe 0`, () => {
  expect(countWordsMapJs(words3, words4)).toBe(0)
})


test(`countWordsMap(words5, words6) toBe 1`, () => {
  expect(countWordsMap(words5, words6)).toBe(1)
})

test(`countWordsMapJs(words5, words6) toBe 1`, () => {
  expect(countWordsMapJs(words5, words6)).toBe(1)
})
