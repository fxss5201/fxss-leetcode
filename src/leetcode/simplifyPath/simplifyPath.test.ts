import { expect, test } from 'vitest'
import { simplifyPath } from './typescript.ts'
import { simplifyPath as simplifyPathJs } from './javascript.js'

test(`simplifyPath`, () => {
  expect(simplifyPath('/home/')).toBe('/home')
  expect(simplifyPath('/home//foo/')).toBe('/home/foo')
  expect(simplifyPath('/home/user/Documents/../Pictures')).toBe('/home/user/Pictures')
  expect(simplifyPath('/../')).toBe('/')
  expect(simplifyPath('/.../a/../b/c/../d/./')).toBe('/.../b/d')
})

test(`simplifyPathJs`, () => {
  expect(simplifyPathJs('/home/')).toBe('/home')
  expect(simplifyPathJs('/home//foo/')).toBe('/home/foo')
  expect(simplifyPathJs('/home/user/Documents/../Pictures')).toBe('/home/user/Pictures')
  expect(simplifyPathJs('/../')).toBe('/')
  expect(simplifyPathJs('/.../a/../b/c/../d/./')).toBe('/.../b/d')
})
