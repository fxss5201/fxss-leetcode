import { expect, test } from 'vitest'
import { wordSearch } from './typescript.ts'
import { wordSearch as wordSearchJs } from './javascript.js'

test(`wordSearch`, () => {
  expect(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBe(true)
  expect(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")).toBe(true)
  expect(wordSearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")).toBe(false)
})

test(`wordSearchJs`, () => {
  expect(wordSearchJs([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBe(true)
  expect(wordSearchJs([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")).toBe(true)
  expect(wordSearchJs([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")).toBe(false)
})
