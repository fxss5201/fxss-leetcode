import { describe, expect, test } from 'vitest'
import { rotateList } from './typescript.ts'
import { rotateList as rotateListJs } from './javascript.js'
import { getListNode } from '../../../src/utils/ListNode.ts'
import { getListNodeJs } from '../../../src/utilsJs/ListNode.js'

describe('rotateList', () => {
  test(`rotateList`, () => {
    const headArr = [1,2,3,4,5]
    const resArr = [4,5,1,2,3]
    expect(rotateList(getListNode(headArr), 2)).toEqual(getListNode(resArr))
  })

  test(`rotateList`, () => {
    const headArr = [1,2,3,4,5]
    const resArr = [1,2,3,4,5]
    expect(rotateList(getListNode(headArr), 0)).toEqual(getListNode(resArr))
  })

  test(`rotateList`, () => {
    const headArr = [1,2,3]
    const resArr = [1,2,3]
    expect(rotateList(getListNode(headArr), 3)).toEqual(getListNode(resArr))
  })
})

describe('rotateListJs', () => {
  test(`rotateListJs`, () => {
    const headArr = [1,2,3,4,5]
    const resArr = [4,5,1,2,3]
    expect(rotateListJs(getListNodeJs(headArr), 2)).toEqual(getListNodeJs(resArr))
  })

  test(`rotateListJs`, () => {
    const headArr = []
    const resArr = []
    expect(rotateListJs(getListNodeJs(headArr), 2)).toEqual(getListNodeJs(resArr))
  })

  test(`rotateListJs`, () => {
    const headArr = [1,2,3]
    const resArr = [1,2,3]
    expect(rotateListJs(getListNodeJs(headArr), 3)).toEqual(getListNodeJs(resArr))
  })
})
