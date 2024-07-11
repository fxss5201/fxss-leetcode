import { writeFile, readFile } from 'fs/promises'
import path from 'path'
import { type ItemType, leetcodeAddItems } from './common'

async function updateDocsMd (name: string, type: string, title: string): Promise<void> {
  const filePath = path.resolve(path.resolve(), 'docs', type, 'index.md')
  let fileMd = await readFile(filePath, { encoding: 'utf-8' })
  
  let items: ItemType[] = fileMdToArray(fileMd)
  const titleSortNum = parseInt(title)
  if (type === 'leetcode' && titleSortNum) {
    items = leetcodeAddItems(items, { text: title, link: name, sort: titleSortNum })
  } else {
    items.push({ text: title, link: name })
  }
  
  fileMd = arrayToFileMd(items, type)
  await writeFile(
    filePath,
    fileMd
  )
}

function fileMdToArray (fileMd: string): ItemType[] {
  const fileLine = fileMd.split('\r\n').filter(x => x.startsWith('- '))
  return fileLine.map(line => {
    const res = /^\-\s\[(.*)\]\(\.\/(.*)\)$/gi.exec(line)
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
  return `# ${type}
  
${fileLine.join('\r\n')}
`
}

export default updateDocsMd
