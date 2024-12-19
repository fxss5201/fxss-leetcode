import { expect, test } from 'vitest'
import { getListNode } from '../../../src/utils'
import { listNodeReverse } from './typescript.ts'
import { getListNodeJs } from "../../../src/utilsJs"
import { listNodeReverse as listNodeReverseJs } from './javascript.js'

const a1 = [1, 2, 3]
const a2 = [3, 2, 1]
const aL1 = getListNode(a1)
const aL2 = getListNode(a2)

test(`listNodeReverse(aL1) toEqual aL2`, () => {
  expect(listNodeReverse(aL1)).toEqual(aL2)
})

const a3 = [1, 2, 3]
const a4 = [3, 2, 1]
const aL3 = getListNodeJs(a3)
const aL4 = getListNodeJs(a4)

test(`listNodeReverseJs(aL3) toEqual aL4`, () => {
  expect(listNodeReverseJs(aL3)).toEqual(aL4)
})
