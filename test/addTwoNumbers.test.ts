import { expect, test } from 'vitest'
import { ListNode, addTwoNumbers } from '../src/leetcode/addTwoNumbers/typescript.ts'
import { ListNode as ListNodeJs, addTwoNumbers as addTwoNumbersJs } from '../src/leetcode/addTwoNumbers/javascript.js'

const l1Array = [2, 4, 3]
const l2Array = [5, 6, 4]
const l3Array = [7, 0, 8]

const l4Array = [2, 4, 3]
const l5Array = [5, 6, 4]
const l6Array = [7, 0, 8]

function getListNode(arr: number[]): ListNode | null {
  let res: ListNode | null = null
  let middle: ListNode | null = null
  arr.map(item => {
    if (!res) {
      res = middle = new ListNode(item)
    } else {
      (middle as ListNode).next = new ListNode(item)
      middle = (middle as ListNode).next
    }
  })
  return res
}

function getListNodeJs(arr: number[]): ListNode | null {
  let res: ListNode | null = null
  let middle: ListNode | null = null
  arr.map(item => {
    if (!res) {
      res = middle = new ListNodeJs(item)
    } else {
      (middle as ListNode).next = new ListNodeJs(item)
      middle = (middle as ListNode).next
    }
  })
  return res
}

const l1 = getListNode(l1Array)
const l2 = getListNode(l2Array)
const l3 = getListNode(l3Array)

const l4 = getListNode(l4Array)
const l5 = getListNode(l5Array)
const l6 = getListNode(l6Array)

const l7 = getListNodeJs(l1Array)
const l8 = getListNodeJs(l2Array)
const l9 = getListNodeJs(l3Array)

const l10 = getListNodeJs(l4Array)
const l11 = getListNodeJs(l5Array)
const l12 = getListNodeJs(l6Array)

test(`addTwoNumbers(l1, l2) toEqual l3`, () => {
  expect(addTwoNumbers(l1, l2)).toEqual(l3)
})

test(`addTwoNumbers(l4, l5) toEqual l6`, () => {
  expect(addTwoNumbers(l4, l5)).toEqual(l6)
})

test(`addTwoNumbersJs(l7, l8) toEqual l9`, () => {
  expect(addTwoNumbersJs(l7, l8)).toEqual(l9)
})

test(`addTwoNumbersJs(l10, l11) toEqual l12`, () => {
  expect(addTwoNumbersJs(l10, l11)).toEqual(l12)
})
