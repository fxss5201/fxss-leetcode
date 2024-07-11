function getDefaultTest (name, type) {
  return `import { expect, test } from 'vitest'
import { ${name} } from '../../src/${type}/${name}/typescript.ts'

test('', () => {
  expect(${name}()).toBe('')
})
`
}

export default getDefaultTest
