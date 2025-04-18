import { consola } from 'consola'
import { access, constants, unlink, rmdir } from 'fs/promises'
import path from 'path'
import { camelCase } from 'change-case'
import updateDocsConfig from './updateDocsConfig'
import updateDocsMd from './updateDocsMd'
import { codeTypeList, codeTypeDefault } from './config'

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

  const codeType = await consola.prompt('请选择代码段类型：', {
    type: 'select',
    options: codeTypeList,
    initial: codeTypeDefault,
  })

  const filePath = path.resolve(path.resolve(), 'src', codeType, codeName)
  try {
    await access(filePath, constants.F_OK)

    const confirmed = await consola.prompt('删除之后不可恢复，是否确认删除？', {
      type: "confirm",
      initial: false,
    })

    if (!confirmed) {
      consola.success(`已取消删除`)
      return
    }

    if (codeType === 'type-challenges') {
      await unlink(path.resolve(filePath, 'index.ts'))
    } else {
      await unlink(path.resolve(filePath, 'typescript.ts'))
      await unlink(path.resolve(filePath, 'javascript.js'))

      await unlink(path.resolve(filePath, `${codeName}.test.ts`))
    }

    await rmdir(filePath)

    await unlink(path.resolve(path.resolve(), 'docs', codeType, `${codeName}.md`))

    await updateDocsConfig('rm', codeName, codeType)
    await updateDocsMd('rm', codeName, codeType)

    consola.success(`代码段 ${codeName} 相关文件已删除成功`)
  } catch {
    consola.error('代码段不存在')
  }
}

main()
