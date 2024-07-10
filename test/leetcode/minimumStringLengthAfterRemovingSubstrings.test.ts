import { expect, test } from 'vitest'
import {
  minimumStringLengthAfterRemovingABOrCDSubstrings,
  minimumStringLengthAfterRemovingSubstrings,
  minimumStringLengthAfterRemovingSubstringsStack
} from '../../src/leetcode/minimumStringLengthAfterRemovingSubstrings/typescript.js'
import {
  minimumStringLengthAfterRemovingABOrCDSubstrings as minimumStringLengthAfterRemovingABOrCDSubstringsJs,
  minimumStringLengthAfterRemovingSubstrings as minimumStringLengthAfterRemovingSubstringsJs,
  minimumStringLengthAfterRemovingSubstringsStack as minimumStringLengthAfterRemovingSubstringsStackJs
} from '../../src/leetcode/minimumStringLengthAfterRemovingSubstrings/javascript.js'

// 只去除 AB 或 CD
test(`'ABFCACDB' toBe 2`, () => {
  expect(minimumStringLengthAfterRemovingABOrCDSubstrings('ABFCACDB')).toBe(2)
})

test(`'ACBBD' toBe 5`, () => {
  expect(minimumStringLengthAfterRemovingABOrCDSubstrings('ACBBD')).toBe(5)
})

test(`'ABFCJACDBK' toBe 4`, () => {
  expect(minimumStringLengthAfterRemovingABOrCDSubstrings('ABFCJACDBK')).toBe(4)
})

test(`'ABFCACDB' toBe 2`, () => {
  expect(minimumStringLengthAfterRemovingABOrCDSubstringsJs('ABFCACDB')).toBe(2)
})

test(`'ACBBD' toBe 5`, () => {
  expect(minimumStringLengthAfterRemovingABOrCDSubstringsJs('ACBBD')).toBe(5)
})

test(`'ABFCJACDBK' toBe 4`, () => {
  expect(minimumStringLengthAfterRemovingABOrCDSubstringsJs('ABFCJACDBK')).toBe(4)
})

// 去除 AB / CD / BC 等所有的两个子串
test(`'ABFCACDB' toBe 2`, () => {
  expect(minimumStringLengthAfterRemovingSubstrings('ABFCACDB')).toBe(2)
})

test(`'ACBBD' toBe 5`, () => {
  expect(minimumStringLengthAfterRemovingSubstrings('ACBBD')).toBe(5)
})

test(`'ABFCJACDBK' toBe 2`, () => {
  expect(minimumStringLengthAfterRemovingSubstrings('ABFCJACDBK')).toBe(2)
})

test(`'ABFCACDB' toBe 2`, () => {
  expect(minimumStringLengthAfterRemovingSubstringsJs('ABFCACDB')).toBe(2)
})

test(`'ACBBD' toBe 5`, () => {
  expect(minimumStringLengthAfterRemovingSubstringsJs('ACBBD')).toBe(5)
})

test(`'ABFCJACDBK' toBe 2`, () => {
  expect(minimumStringLengthAfterRemovingSubstringsJs('ABFCJACDBK')).toBe(2)
})

// 去除 AB / CD / BC 等所有的两个子串，栈实现
test(`'ABFCACDB' toBe 2`, () => {
  expect(minimumStringLengthAfterRemovingSubstringsStack('ABFCACDB')).toBe(2)
})

test(`'ACBBD' toBe 5`, () => {
  expect(minimumStringLengthAfterRemovingSubstringsStack('ACBBD')).toBe(5)
})

test(`'ABFCJACDBK' toBe 2`, () => {
  expect(minimumStringLengthAfterRemovingSubstringsStack('ABFCJACDBK')).toBe(2)
})

test(`'ABFCACDB' toBe 2`, () => {
  expect(minimumStringLengthAfterRemovingSubstringsStackJs('ABFCACDB')).toBe(2)
})

test(`'ACBBD' toBe 5`, () => {
  expect(minimumStringLengthAfterRemovingSubstringsStackJs('ACBBD')).toBe(5)
})

test(`'ABFCJACDBK' toBe 2`, () => {
  expect(minimumStringLengthAfterRemovingSubstringsStackJs('ABFCJACDBK')).toBe(2)
})

