import { expect, test } from 'vitest'
import { letterCombinations } from './typescript.ts'
import { letterCombinations as letterCombinationsJs } from './javascript.js'

test(`letterCombinations('23')`, () => {
  expect(letterCombinations('23')).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
})

test(`letterCombinationsJs('23')`, () => {
  expect(letterCombinationsJs('23')).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
})
