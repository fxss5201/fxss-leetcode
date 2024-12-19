import { expect, test } from 'vitest'
import { removeNthFromEnd } from './typescript.ts'
import { removeNthFromEnd as removeNthFromEndJs } from './javascript.js'
import { getListNode } from '../../../src/utils/ListNode.ts'

const arr = [1,2,3,4,5]
const arrListNode = getListNode(arr)
const arrRes = [1,2,3,5]
const arrResListNode = getListNode(arrRes)
test(`removeNthFromEnd(arrListNode, 2)`, () => {
  expect(removeNthFromEnd(arrListNode, 2)).toEqual(arrResListNode)
})

const arrJs = [1]
const arrJsListNode = getListNode(arrJs)
const arrJsRes = []
const arrJsResListNode = getListNode(arrJsRes)
test(`removeNthFromEndJs(arrJsListNode, 2)`, () => {
  expect(removeNthFromEndJs(arrJsListNode, 2)).toEqual(arrJsResListNode)
})
