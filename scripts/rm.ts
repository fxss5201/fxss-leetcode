import { consola } from 'consola'
import { access, constants, rm } from 'fs/promises'
import path from 'path'
import updateDocsConfig from './updateDocsConfig'
import updateDocsMd from './updateDocsMd'

async function main () {
  const codeNamePrompt = '请输入代码段名称（字符串key，用于生产文件名，建议使用小驼峰字符串）：'
  let codeName = await consola.prompt(codeNamePrompt, {
    type: 'text'
  })
  while (!codeName) {
    consola.error('请输入代码段名称')
    codeName = await consola.prompt(codeNamePrompt, {
      type: 'text'
    })
  }

  const codeType = await consola.prompt('请选择代码段类型：', {
    type: 'select',
    options: [
      'leetcode',
      'other',
    ],
    initial: 'leetcode',
  })

  const filePath = path.resolve(path.resolve(), 'src', codeType, codeName)
  try {
    await access(filePath, constants.F_OK)

    await rm(path.resolve(filePath, 'typescript.ts'))
    await rm(path.resolve(filePath, 'javascript.js'))
    await rm(filePath)

    const mdPath = path.resolve(path.resolve(), 'docs', codeType)
    await rm(path.resolve(mdPath, `${codeName}.md`))

    const testPath = path.resolve(path.resolve(), 'test', codeType)
    await rm(path.resolve(testPath, `${codeName}.test.ts`))

    await updateDocsConfig('rm', codeName, codeType)
    await updateDocsMd('rm', codeName, codeType)

    consola.success(`代码段 ${codeName} 相关文件已创建成功`)
  } catch {
    consola.error('代码段不存在')
  }
}

main()
