import { expect, test } from 'vitest'
import { permutationsIi } from '../../src/leetcode/permutationsIi/typescript.ts'
import { permutationsIi as permutationsIiJs } from '../../src/leetcode/permutationsIi/javascript.js'

test(`permutationsIi`, () => {
  expect(permutationsIi([1,1,2])).toEqual([[1,1,2],[1,2,1],[2,1,1]])
})

test(`permutationsIiJs`, () => {
  expect(permutationsIiJs([1,1,2])).toEqual([[1,1,2],[1,2,1],[2,1,1]])
})
