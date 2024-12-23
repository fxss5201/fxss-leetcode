import { expect, test } from 'vitest'
import { versionListSort } from './typescript.ts'
import { versionListSort as versionListSortJs } from './javascript.js'

const versionList = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
const versionListRes = ['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1']

test(`['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] toEqual ['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1']`, () => {
  expect(versionListSort(versionList)).toEqual(versionListRes)
})

test(`['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] toEqual ['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1']`, () => {
  expect(versionListSortJs(versionList)).toEqual(versionListRes)
})

const versionList1 = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5', '4.2.3']
const versionList1Res = ['4.3.5', '4.3.4.5', '4.2.3', '4.2', '2.3.3', '0.302.1', '0.1.1']

test(`['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5', '4.2.3'] toEqual ['4.3.5', '4.3.4.5', '4.2.3', '4.2', '2.3.3', '0.302.1', '0.1.1']`, () => {
  expect(versionListSort(versionList1)).toEqual(versionList1Res)
})

test(`['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5', '4.2.3'] toEqual ['4.3.5', '4.3.4.5', '4.2.3', '4.2', '2.3.3', '0.302.1', '0.1.1']`, () => {
  expect(versionListSortJs(versionList1)).toEqual(versionList1Res)
})
