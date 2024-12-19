import { expect, test } from 'vitest'
import { mergeTwoLists } from './typescript.ts'
import { mergeTwoLists as mergeTwoListsJs } from './javascript.js'
import { getListNode } from '../../../src/utils/ListNode.ts'

const l1 = [1,2,4]
const l2 = [1,3,4]
const l3 = [1,1,2,3,4,4]
const l1ListNode = getListNode(l1)
const l2ListNode = getListNode(l2)
const l3ListNode = getListNode(l3)

test(`mergeTwoLists`, () => {
  expect(mergeTwoLists(l1ListNode, l2ListNode)).toEqual(l3ListNode)
})

const l4 = []
const l5 = [0]
const l6 = [0]
const l4ListNode = getListNode(l4)
const l5ListNode = getListNode(l5)
const l6ListNode = getListNode(l6)

test(`mergeTwoListsJs`, () => {
  expect(mergeTwoListsJs(l4ListNode, l5ListNode)).toEqual(l6ListNode)
})
