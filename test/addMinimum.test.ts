import { expect, test } from 'vitest'
import { addMinimum1, addMinimum2, addMinimum3 } from '../src/leetcode/addMinimum/typescript.ts'
import { addMinimum1 as addMinimum1Js, addMinimum2 as addMinimum2Js, addMinimum3 as addMinimum3Js } from '../src/leetcode/addMinimum/javascript.js'

test(`addMinimum1('a') toBe 2`, () => {
  expect(addMinimum1('a')).toBe(2)
})

test(`addMinimum1('aaa') toBe 6`, () => {
  expect(addMinimum1('aaa')).toBe(6)
})

test(`addMinimum1('abc') toBe 0`, () => {
  expect(addMinimum1('abc')).toBe(0)
})


test(`addMinimum2('a') toBe 2`, () => {
  expect(addMinimum2('a')).toBe(2)
})

test(`addMinimum2('aaa') toBe 6`, () => {
  expect(addMinimum2('aaa')).toBe(6)
})

test(`addMinimum2('abc') toBe 0`, () => {
  expect(addMinimum2('abc')).toBe(0)
})


test(`addMinimum3('a') toBe 2`, () => {
  expect(addMinimum3('a')).toBe(2)
})

test(`addMinimum3('aaa') toBe 6`, () => {
  expect(addMinimum3('aaa')).toBe(6)
})

test(`addMinimum3('abc') toBe 0`, () => {
  expect(addMinimum3('abc')).toBe(0)
})


test(`addMinimum1Js('a') toBe 2`, () => {
  expect(addMinimum1Js('a')).toBe(2)
})

test(`addMinimum1Js('aaa') toBe 6`, () => {
  expect(addMinimum1Js('aaa')).toBe(6)
})

test(`addMinimum1Js('abc') toBe 0`, () => {
  expect(addMinimum1Js('abc')).toBe(0)
})


test(`addMinimum2Js('a') toBe 2`, () => {
  expect(addMinimum2Js('a')).toBe(2)
})

test(`addMinimum2Js('aaa') toBe 6`, () => {
  expect(addMinimum2Js('aaa')).toBe(6)
})

test(`addMinimum2Js('abc') toBe 0`, () => {
  expect(addMinimum2Js('abc')).toBe(0)
})


test(`addMinimum3Js('a') toBe 2`, () => {
  expect(addMinimum3Js('a')).toBe(2)
})

test(`addMinimum3Js('aaa') toBe 6`, () => {
  expect(addMinimum3Js('aaa')).toBe(6)
})

test(`addMinimum3Js('abc') toBe 0`, () => {
  expect(addMinimum3Js('abc')).toBe(0)
})