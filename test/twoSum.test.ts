import { expect, test } from 'vitest'
import { twoSum, twoSumObj } from '../src/twoSum/typescript.ts'
import { twoSum as twoSumJs, twoSumObj as twoSumObjJs } from '../src/twoSum/javascript.js'

const versionList = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']

test(`twoSum([2, 7, 11, 15], 9) toEqual [0, 1]`, () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test(`twoSum([3, 2, 4], 6) toEqual [1, 2]`, () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
})

test(`twoSum([3, 3], 6) toEqual [0, 1]`, () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1])
})

test(`twoSumJs([2, 7, 11, 15], 9) toEqual [0, 1]`, () => {
  expect(twoSumJs([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test(`twoSumJs([3, 2, 4], 6) toEqual [1, 2]`, () => {
  expect(twoSumJs([3, 2, 4], 6)).toEqual([1, 2])
})

test(`twoSumJs([3, 3], 6) toEqual [0, 1]`, () => {
  expect(twoSumJs([3, 3], 6)).toEqual([0, 1])
})

test(`twoSumObj([2, 7, 11, 15], 9) toEqual [0, 1]`, () => {
  expect(twoSumObj([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test(`twoSumObj([3, 2, 4], 6) toEqual [1, 2]`, () => {
  expect(twoSumObj([3, 2, 4], 6)).toEqual([1, 2])
})

test(`twoSumObj([3, 3], 6) toEqual [0, 1]`, () => {
  expect(twoSumObj([3, 3], 6)).toEqual([0, 1])
})

test(`twoSumObjJs([2, 7, 11, 15], 9) toEqual [0, 1]`, () => {
  expect(twoSumObjJs([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test(`twoSumObjJs([3, 2, 4], 6) toEqual [1, 2]`, () => {
  expect(twoSumObjJs([3, 2, 4], 6)).toEqual([1, 2])
})

test(`twoSumObjJs([3, 3], 6) toEqual [0, 1]`, () => {
  expect(twoSumObjJs([3, 3], 6)).toEqual([0, 1])
})