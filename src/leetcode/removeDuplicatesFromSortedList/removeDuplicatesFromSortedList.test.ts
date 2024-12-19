import { expect, test } from 'vitest'
import { getListNode } from "../../../src/utils"
import { deleteDuplicates } from './typescript.ts'
import { getListNodeJs } from "../../../src/utilsJs"
import { deleteDuplicates as deleteDuplicatesJs } from './javascript.js'

const a1 = [1, 1, 2]
const a2 = [1, 2]
const aL1 = getListNode(a1)
const aL2 = getListNode(a2)

test(`deleteDuplicates(aL1) toEqual aL2`, () => {
  expect(deleteDuplicates(aL1)).toEqual(aL2)
})

const a3 = [1, 1, 2, 3, 3]
const a4 = [1, 2, 3]
const aL3 = getListNode(a3)
const aL4 = getListNode(a4)

test(`deleteDuplicates(aL3) toEqual aL4`, () => {
  expect(deleteDuplicates(aL3)).toEqual(aL4)
})

const a5 = [1, 1, 2]
const a6 = [1, 2]
const aL5 = getListNodeJs(a5)
const aL6 = getListNodeJs(a6)

test(`deleteDuplicatesJs(aL5) toEqual aL6`, () => {
  expect(deleteDuplicatesJs(aL5)).toEqual(aL6)
})

const a7 = [1, 1, 2, 3, 3]
const a8 = [1, 2, 3]
const aL7 = getListNodeJs(a7)
const aL8 = getListNodeJs(a8)

test(`deleteDuplicatesJs(aL7) toEqual aL8`, () => {
  expect(deleteDuplicatesJs(aL7)).toEqual(aL8)
})
