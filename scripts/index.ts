import { consola } from 'consola'
import { access, writeFile, constants, mkdir } from 'fs/promises'
import path from 'path'
import getDefaultCode from './defaultCode.js'
import getDefaultMd from './defaultMd.js'
import getDefaultTest from './defaultTest.js'

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

  const filePath = path.resolve(path.resolve(), 'src', codeType, name as string)
  try {
    await access(filePath, constants.F_OK)
    consola.error('代码段已存在')
  } catch {
    const defaultCode = getDefaultCode(name)
    await mkdir(filePath, { recursive: true })
    await writeFile(
      path.resolve(filePath, 'typescript.ts'),
      defaultCode
    )
    await writeFile(
      path.resolve(filePath, 'javascript.js'),
      defaultCode
    )

    const mdPath = path.resolve(path.resolve(), 'docs', codeType)
    const defaultMd = getDefaultMd(name, codeType)
    await mkdir(mdPath, { recursive: true })
    await writeFile(
      path.resolve(mdPath, `${name}.md`),
      defaultMd
    )

    const testPath = path.resolve(path.resolve(), 'test', codeType)
    const defaultTest = getDefaultTest(name, codeType)
    await mkdir(testPath, { recursive: true })
    await writeFile(
      path.resolve(testPath, `${name}.test.ts`),
      defaultTest
    )

    consola.success(`代码段 ${name} 相关文件已创建成功`)
  }
}

main()
