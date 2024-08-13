import { expect, test } from 'vitest'
import { mergeIntervals } from '../../src/leetcode/mergeIntervals/typescript.ts'
import { mergeIntervals as mergeIntervalsJs } from '../../src/leetcode/mergeIntervals/javascript.js'

test(`mergeIntervals`, () => {
  expect(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]])
  expect(mergeIntervals([])).toEqual([[]])
})

test(`mergeIntervalsJs`, () => {
  expect(mergeIntervalsJs([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]])
  expect(mergeIntervalsJs([])).toEqual([[]])
})
