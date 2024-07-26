import { expect, test } from 'vitest'
import { generateParenthesis } from '../../src/leetcode/generateParenthesis/typescript.ts'
import { generateParenthesis as generateParenthesisJs } from '../../src/leetcode/generateParenthesis/javascript.js'

console.log(JSON.stringify(generateParenthesis(3)))
test(`generateParenthesis`, () => {
  expect(generateParenthesis(3)).toEqual(['()()()', '(())()', '()(())', '(()())', '((()))'])
})

test(`generateParenthesisJs`, () => {
  expect(generateParenthesisJs(2)).toEqual(['()()', '(())'])
})
