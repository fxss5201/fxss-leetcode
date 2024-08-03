import { expect, test } from 'vitest'
import { countAndSay } from '../../src/leetcode/countAndSay/typescript.ts'
import { countAndSay as countAndSayJs } from '../../src/leetcode/countAndSay/javascript.js'

test(`countAndSay`, () => {
  expect(countAndSay(4)).toBe('1211')
})

test(`countAndSayJs`, () => {
  expect(countAndSayJs(4)).toBe('1211')
})
