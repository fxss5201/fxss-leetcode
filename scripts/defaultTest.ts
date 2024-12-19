function getDefaultTest (name: string, type: string): string {
  return `import { expect, test } from 'vitest'
import { ${name} } from './typescript.ts'
import { ${name} as ${name}Js } from './javascript.js'

test(\`${name}\`, () => {
  expect(${name}()).toBe('')
})

test(\`${name}Js\`, () => {
  expect(${name}Js()).toBe('')
})
`
}

export default getDefaultTest
