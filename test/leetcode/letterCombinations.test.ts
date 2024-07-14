import { expect, test } from 'vitest'
import { letterCombinations } from '../../src/leetcode/letterCombinations/typescript.ts'

test(`letterCombinations('23')`, () => {
  expect(letterCombinations('23')).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
})
