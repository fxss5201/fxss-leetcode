import { expect, test } from 'vitest'
import { nNumberCanNPolygon } from '../../src/other/nNumberCanNPolygon/typescript.ts'
import { nNumberCanNPolygon as nNumberCanNPolygonJs } from '../../src/other/nNumberCanNPolygon/javascript.js'

test(`[1, 1, 2] toBe false`, () => {
  expect(nNumberCanNPolygon([1, 1, 2])).toBe(false)
})

test(`[1, 2, 2] toBe true`, () => {
  expect(nNumberCanNPolygon([1, 2, 2])).toBe(true)
})

test(`[1, 1, 1, 4] toBe false`, () => {
  expect(nNumberCanNPolygon([1, 1, 1, 4])).toBe(false)
})

test(`[1, 2, 3, 4] toBe true`, () => {
  expect(nNumberCanNPolygon([1, 2, 3, 4])).toBe(true)
})


test(`[1, 1, 2] toBe false`, () => {
  expect(nNumberCanNPolygonJs([1, 1, 2])).toBe(false)
})

test(`[1, 2, 2] toBe true`, () => {
  expect(nNumberCanNPolygonJs([1, 2, 2])).toBe(true)
})

test(`[1, 1, 1, 4] toBe false`, () => {
  expect(nNumberCanNPolygonJs([1, 1, 1, 4])).toBe(false)
})

test(`[1, 2, 3, 4] toBe true`, () => {
  expect(nNumberCanNPolygonJs([1, 2, 3, 4])).toBe(true)
})
