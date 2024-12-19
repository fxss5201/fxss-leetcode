import { expect, test } from 'vitest'
import { uniquePaths } from './typescript.ts'
import { uniquePaths as uniquePathsJs } from './javascript.js'

test(`uniquePaths`, () => {
  expect(uniquePaths(3, 7)).toBe(28)
})

test(`uniquePathsJs`, () => {
  expect(uniquePathsJs(3, 7)).toBe(28)
})
