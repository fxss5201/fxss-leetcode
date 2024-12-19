import { expect, test } from 'vitest'
import { permutationsIi } from './typescript.ts'
import { permutationsIi as permutationsIiJs } from './javascript.js'

test(`permutationsIi`, () => {
  expect(permutationsIi([1,1,2])).toEqual([[1,1,2],[1,2,1],[2,1,1]])
})

test(`permutationsIiJs`, () => {
  expect(permutationsIiJs([1,1,2])).toEqual([[1,1,2],[1,2,1],[2,1,1]])
})
