import { expect, test } from 'vitest'
import { subsets } from './typescript.ts'
import { subsets as subsetsJs } from './javascript.js'

test(`subsets`, () => {
  expect(subsets([1,2,3])).toEqual([[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]])
  expect(subsets([0])).toEqual([[],[0]])
})

test(`subsetsJs`, () => {
  expect(subsetsJs([1,2,3])).toEqual([[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]])
  expect(subsetsJs([0])).toEqual([[],[0]])
})
