import { expect, test } from 'vitest'
import { swapNodesInPairs } from './typescript.ts'
import { swapNodesInPairs as swapNodesInPairsJs } from './javascript.js'
import { getListNode } from '../../../src/utils/ListNode.ts'

const arr = [1,2,3,4]
const arrListNode = getListNode(arr)
const arr1 = [2,1,4,3]
const arr1ListNode = getListNode(arr1)

test(`swapNodesInPairs`, () => {
  expect(swapNodesInPairs(arrListNode)).toEqual(arr1ListNode)
})

const arrJs = [1,2]
const arrJsListNode = getListNode(arrJs)
const arr1Js = [2,1]
const arr1JsListNode = getListNode(arr1Js)
test(`swapNodesInPairsJs`, () => {
  expect(swapNodesInPairsJs(arrJsListNode)).toEqual(arr1JsListNode)
})
