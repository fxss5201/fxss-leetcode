import { expect, test } from 'vitest'
import { lengthOfLastWord } from './typescript.ts'
import { lengthOfLastWord as lengthOfLastWordJs } from './javascript.js'

test(`lengthOfLastWord`, () => {
  expect(lengthOfLastWord('Hello World')).toBe(5)
  expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4)
})

test(`lengthOfLastWordJs`, () => {
  expect(lengthOfLastWordJs('Hello World')).toBe(5)
  expect(lengthOfLastWordJs('   fly me   to   the moon  ')).toBe(4)
})
