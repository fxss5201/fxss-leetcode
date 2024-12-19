import { expect, test } from 'vitest'
import { strIndexOfStr } from './typescript.ts'
import { strIndexOfStr as strIndexOfStrJs } from './javascript.js'

test(`strIndexOfStr`, () => {
  expect(strIndexOfStr('sadbutsad', 'sad')).toBe(0)
})

test(`strIndexOfStrJs`, () => {
  expect(strIndexOfStrJs('sadbutsad', 'sad')).toBe(0)
})
