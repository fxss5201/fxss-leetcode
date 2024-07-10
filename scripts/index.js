import { consola } from 'consola'
import { access, writeFile, constants, mkdir } from 'fs/promises'
import path from 'path'

async function main () {
  const name = await consola.prompt('请输入代码段名称：')

  const codeType = await consola.prompt('请选择代码段归属：', {
    type: 'select',
    options: [
      'leetcode',
      'other',
    ],
    initial: 'leetcode',
  })

  const filePath = path.resolve(path.resolve(), 'src', codeType, name)
  try {
    await access(filePath, constants.F_OK)
    consola.error('代码段已存在')
  } catch {
    const defaultCode = `// 输入：
// 输出：

export function ${name} () {

}`
    await mkdir(filePath, { recursive: true })
    await writeFile(
      path.resolve(filePath, 'typescript.ts'),
      defaultCode
    )

    await writeFile(
      path.resolve(filePath, 'javascript.ts'),
      defaultCode
    )

    const mdPath = path.resolve(path.resolve(), 'docs', codeType)
    const defaultMd = `# 

[]()

## 代码

::: code-group

<<< ../../src/${codeType}/${name}/javascript.js{javascript} [javascript]
<<< ../../src/${codeType}/${name}/typescript.ts{typescript} [typescript]

:::
    `
    await mkdir(mdPath, { recursive: true })
    await writeFile(
      path.resolve(mdPath, `${name}.md`),
      defaultMd
    )

    const testPath = path.resolve(path.resolve(), 'test', codeType)
    const defaultTest = `import { expect, test } from 'vitest'
import { ${name} } from '../../src/${codeType}/${name}/typescript.ts'

test('', () => {
  expect(${name}()).toBe('')
})
    `
    await mkdir(testPath, { recursive: true })
    await writeFile(
      path.resolve(testPath, `${name}.test.ts`),
      defaultTest
    )

    consola.success(`代码段 ${name} 相关文件已创建成功`)
  }
}

main()
