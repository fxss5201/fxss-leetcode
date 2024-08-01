import { consola } from 'consola'
import { access, writeFile, constants, mkdir } from 'fs/promises'
import path from 'path'
import { camelCase } from 'change-case'
import getDefaultCode from './defaultCode'
import getDefaultMd from './defaultMd'
import getDefaultTest from './defaultTest'
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
  codeName = camelCase(codeName)

  const codeTitlePrompt = '请输入代码段标题（中文名称，用于菜单展示）：'
  let codeTitle = await consola.prompt(codeTitlePrompt, {
    type: 'text'
  })
  while (!codeTitle) {
    consola.error('请输入代码段标题')
    codeTitle = await consola.prompt(codeTitlePrompt, {
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

  let codeUrl = ''
  if (codeType === 'leetcode') {
    codeUrl = await consola.prompt('请输入代码段 leetcode 链接：', {
      type: 'text'
    })
  }

  const filePath = path.resolve(path.resolve(), 'src', codeType, codeName)
  try {
    await access(filePath, constants.F_OK)
    consola.error('代码段已存在')
  } catch {
    const defaultCode = getDefaultCode(codeName, codeTitle, codeUrl)
    await mkdir(filePath, { recursive: true })
    await writeFile(
      path.resolve(filePath, 'typescript.ts'),
      defaultCode
    )
    await writeFile(
      path.resolve(filePath, 'javascript.js'),
      defaultCode
    )

    const defaultMd = getDefaultMd(codeName, codeType, codeTitle, codeUrl)
    await writeFile(
      path.resolve(path.resolve(), 'docs', codeType, `${codeName}.md`),
      defaultMd
    )

    const defaultTest = getDefaultTest(codeName, codeType)
    await writeFile(
      path.resolve(path.resolve(), 'test', codeType, `${codeName}.test.ts`),
      defaultTest
    )

    await updateDocsConfig('add', codeName, codeType, codeTitle)
    await updateDocsMd('add', codeName, codeType, codeTitle)

    consola.success(`代码段 ${codeName} 相关文件已创建成功`)
  }
}

main()
