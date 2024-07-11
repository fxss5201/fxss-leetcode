function getDefaultTest (name: string, type: string): string {
  return `import { expect, test } from 'vitest'
import { ${name} } from '../../src/${type}/${name}/typescript.ts'

test('', () => {
  expect(${name}()).toBe('')
})
`
}

export default getDefaultTest
