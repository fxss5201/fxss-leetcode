import { expect, test } from 'vitest'
import { versionListSort as versionListSortjs } from '../src/versionSort/versionSort.js'
import { versionListSort } from '../src/versionSort/versionSort.ts'

const versionList = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']

test(`['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] to ['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]`, () => {
  expect(versionListSortjs(versionList)).toEqual(['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ])
})

test(`['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] to ['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]`, () => {
  expect(versionListSort(versionList)).toEqual(['4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ])
})
