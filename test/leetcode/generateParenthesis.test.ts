import { expect, test } from 'vitest'
import { generateParenthesis } from '../../src/leetcode/generateParenthesis/typescript.ts'
import { generateParenthesis as generateParenthesisJs } from '../../src/leetcode/generateParenthesis/javascript.js'

test(`generateParenthesis`, () => {
  expect(generateParenthesis(3)).toEqual(['()()()', '(())()', '()(())', '(()())', '((()))'])
})

test(`generateParenthesisJs`, () => {
  expect(generateParenthesisJs(2)).toEqual(['()()', '(())'])
})
