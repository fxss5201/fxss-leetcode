import { writeFile, readFile } from 'fs/promises'
import path from 'path'
import { type ItemType, listAddItems } from './common'

async function updateDocsMd (handle: string, name: string, type: string, title: string = ''): Promise<void> {
  const filePath = path.resolve(path.resolve(), 'docs', type, 'index.md')
  let fileMd = await readFile(filePath, { encoding: 'utf-8' })
  
  let items: ItemType[] = fileMdToArray(fileMd)

  if (handle === 'add') {
    const titleSortNum = parseInt(title)
    if (type === 'leetcode' && titleSortNum) {
      items = listAddItems(items, { text: title, link: name, sort: titleSortNum })
    } else if (type === 'type-challenges' && titleSortNum) {
      items = listAddItems(items, { text: title, link: name, sort: titleSortNum })
    } else {
      items.push({ text: title, link: name })
    }
  } else {
    const rmLink = name
    const index = items.findIndex(x => x.link === rmLink)
    items.splice(index, 1)
  }
  
  fileMd = arrayToFileMd(items, type)
  await writeFile(
    filePath,
    fileMd
  )
}

function fileMdToArray (fileMd: string): ItemType[] {
  const fileLine = fileMd.split('\n').filter(x => x.startsWith('- '))
  return fileLine.map(line => {
    const res = /^\-\s\[(.*)\]\(\.\/(.*)\)/gi.exec(line)
    return {
      text: res ? res[1] : '',
      link: res ? res[2] : '',
    }
  })
}

function arrayToFileMd (list: ItemType[], type: string): string {
  const fileLine: string[] = []
  list.forEach(item => {
    fileLine.push(`- [${item.text}](./${item.link})`)
  })
  if (type === 'type-challenges') {
    return `# ${type}

[type-challenges](https://github.com/type-challenges/type-challenges) 是一个学习 TypeScript 的项目，包含了很多类型挑战，通过这些挑战可以更好地理解 TypeScript 的类型系统。type-challenges 不用跑 \`npm run test\`。

## 目录
  
${fileLine.join('\n')}
`
  } else {
    return `# ${type === 'other' ? '其他' : type}

## 目录

${fileLine.join('\n')}
`
  }
}

export default updateDocsMd
