import { expect, test } from 'vitest'
import { permutations } from './typescript.ts'
import { permutations as permutationsJs } from './javascript.js'

test(`permutations`, () => {
  expect(permutations([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])
})

test(`permutationsJs`, () => {
  expect(permutationsJs([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])
})
