import { expect, test } from 'vitest'
import { combinationArrangement } from '../../src/other/combinationArrangement/typescript.ts'
import { combinationArrangement as combinationArrangementJs } from '../../src/other/combinationArrangement/javascript.js'

test(`combinationArrangement`, () => {
  expect(combinationArrangement([[1,2],[3,4],[5,6]])).toEqual([[1,3,5],[1,3,6],[1,4,5],[1,4,6],[2,3,5],[2,3,6],[2,4,5],[2,4,6]])
})

test(`combinationArrangementJs`, () => {
  expect(combinationArrangementJs([[1,2],[3,4],[5,6]])).toEqual([[1,3,5],[1,3,6],[1,4,5],[1,4,6],[2,3,5],[2,3,6],[2,4,5],[2,4,6]])
})
