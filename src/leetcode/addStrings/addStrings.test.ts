import { expect, test } from 'vitest'
import { addStrings } from './typescript.ts'
import { addStrings as addStringsJs } from './javascript.js'

test(`addStrings`, () => {
  expect(addStrings('11', '123')).toBe('134')
  expect(addStrings('456', '77')).toBe('533')
  expect(addStrings('0', '0')).toBe('0')
})

test(`addStringsJs`, () => {
  expect(addStringsJs('11', '123')).toBe('134')
  expect(addStringsJs('456', '77')).toBe('533')
  expect(addStringsJs('0', '0')).toBe('0')
})
