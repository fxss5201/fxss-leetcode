import { expect, test } from 'vitest'
import { gameOfLife } from './typescript.ts'
import { gameOfLife as gameOfLifeJs } from './javascript.js'

test(`gameOfLife`, () => {
  const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
  gameOfLife(board)
  expect(board).toEqual([[0,0,0],[1,0,1],[0,1,1],[0,1,0]])

  const board1 = [[1,1],[1,0]]
  gameOfLife(board1)
  expect(board1).toEqual([[1,1],[1,1]])
})

test(`gameOfLifeJs`, () => {
  const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
  gameOfLifeJs(board)
  expect(board).toEqual([[0,0,0],[1,0,1],[0,1,1],[0,1,0]])

  const board1 = [[1,1],[1,0]]
  gameOfLifeJs(board1)
  expect(board1).toEqual([[1,1],[1,1]])
})
