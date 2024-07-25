import { expect, test } from 'vitest'
import { isValidParentheses } from '../../src/leetcode/isValidParentheses/typescript.ts'
import { isValidParentheses as isValidParenthesesJs } from '../../src/leetcode/isValidParentheses/javascript.js'

test(`isValidParentheses('([])')`, () => {
  expect(isValidParentheses('([])')).toBe(true)
})

test(`isValidParenthesesJs('(}')`, () => {
  expect(isValidParenthesesJs('(}')).toBe(false)
})
