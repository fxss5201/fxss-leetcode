import { expect, test } from 'vitest'
import { versionListSort } from '../src/leetcode/versionSort/typescript.ts'
import { versionListSort as versionListSortJs } from '../src/leetcode/versionSort/javascript.js'

const versionList = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']

test(`['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] toEqual ['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1']`, () => {
  expect(versionListSort(versionList)).toEqual(['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1'])
})

test(`['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] toEqual ['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1']`, () => {
  expect(versionListSortJs(versionList)).toEqual(['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1'])
})
