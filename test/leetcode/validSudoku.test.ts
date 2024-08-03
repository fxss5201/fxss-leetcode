import { expect, test } from 'vitest'
import { validSudoku } from '../../src/leetcode/validSudoku/typescript.ts'
import { validSudoku as validSudokuJs } from '../../src/leetcode/validSudoku/javascript.js'

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const nboard = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

test(`validSudoku`, () => {
  expect(validSudoku(board)).toBe(true)
  expect(validSudoku(nboard)).toBe(false)
})

test(`validSudokuJs`, () => {
  expect(validSudokuJs(board)).toBe(true)
  expect(validSudokuJs(nboard)).toBe(false)
})
