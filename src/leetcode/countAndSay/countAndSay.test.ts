import { expect, test } from 'vitest'
import { countAndSay } from './typescript.ts'
import { countAndSay as countAndSayJs } from './javascript.js'

test(`countAndSay`, () => {
  expect(countAndSay(4)).toBe('1211')
})

test(`countAndSayJs`, () => {
  expect(countAndSayJs(4)).toBe('1211')
})
