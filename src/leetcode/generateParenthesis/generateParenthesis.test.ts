import { expect, test } from 'vitest'
import { generateParenthesis } from './typescript.ts'
import { generateParenthesis as generateParenthesisJs } from './javascript.js'

test(`generateParenthesis`, () => {
  expect(generateParenthesis(3)).toEqual(['()()()', '(())()', '()(())', '(()())', '((()))'])
})

test(`generateParenthesisJs`, () => {
  expect(generateParenthesisJs(2)).toEqual(['()()', '(())'])
})
