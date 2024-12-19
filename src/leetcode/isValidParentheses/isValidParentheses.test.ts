import { expect, test } from 'vitest'
import { isValidParentheses } from './typescript.ts'
import { isValidParentheses as isValidParenthesesJs } from './javascript.js'

test(`isValidParentheses('([])')`, () => {
  expect(isValidParentheses('([])')).toBe(true)
})

test(`isValidParenthesesJs('(}')`, () => {
  expect(isValidParenthesesJs('(}')).toBe(false)
})
