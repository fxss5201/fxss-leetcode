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
  return `# ${type === 'other' ? '其他' : type}

${fileLine.join('\n')}
`
}

export default updateDocsMd
