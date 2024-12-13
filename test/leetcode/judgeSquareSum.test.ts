import { expect, test } from 'vitest'
import { judgeSquareSum, judgeSquareSum1 } from '../../src/leetcode/judgeSquareSum/typescript.ts'
import { judgeSquareSum as judgeSquareSumJs, judgeSquareSum1 as judgeSquareSum1Js } from '../../src/leetcode/judgeSquareSum/javascript.js'

test(`judgeSquareSum`, () => {
  expect(judgeSquareSum(5)).toBe(true)
  expect(judgeSquareSum(3)).toBe(false)
})

test(`judgeSquareSum1`, () => {
  expect(judgeSquareSum1(5)).toBe(true)
  expect(judgeSquareSum1(3)).toBe(false)
})

test(`judgeSquareSumJs`, () => {
  expect(judgeSquareSumJs(5)).toBe(true)
  expect(judgeSquareSumJs(3)).toBe(false)
})

test(`judgeSquareSum1Js`, () => {
  expect(judgeSquareSum1Js(5)).toBe(true)
  expect(judgeSquareSum1Js(3)).toBe(false)
})
