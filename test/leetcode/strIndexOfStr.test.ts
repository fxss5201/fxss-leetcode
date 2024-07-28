import { expect, test } from 'vitest'
import { strIndexOfStr } from '../../src/leetcode/strIndexOfStr/typescript.ts'
import { strIndexOfStr as strIndexOfStrJs } from '../../src/leetcode/strIndexOfStr/javascript.js'

test(`strIndexOfStr`, () => {
  expect(strIndexOfStr('sadbutsad', 'sad')).toBe(0)
})

test(`strIndexOfStrJs`, () => {
  expect(strIndexOfStrJs('sadbutsad', 'sad')).toBe(0)
})
