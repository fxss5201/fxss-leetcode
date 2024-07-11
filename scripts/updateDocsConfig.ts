import { writeFile } from 'fs/promises'
import path from 'path'
import leetcodeItems from '../docs/.vitepress/leetcodeItems'
import otherItems from '../docs/.vitepress/otherItems'
import { type ItemType, leetcodeAddItems } from './common'

async function updateDocsConfig (handle: string, name: string, type: string, title: string = ''): Promise<void> {
  let items: ItemType[] = []
  if (handle === 'add') {
    const titleSortNum = parseInt(title)
    if (type === 'leetcode') {
      if (titleSortNum) {
        items = leetcodeAddItems(leetcodeItems, { text: title, link: `/${type}/${name}`, sort: titleSortNum })
      } else {
        items = leetcodeItems
        items.push({ text: title, link: `/${type}/${name}` })
      }
    } else {
      items = otherItems
      items.push({ text: title, link: `/${type}/${name}` })
    }
  } else {
    const rmLink = `/${type}/${name}`
    if (type === 'leetcode') {
      items = leetcodeItems
    } else {
      items = otherItems
    }
    const index = items.findIndex(x => x.link === rmLink)
    items.splice(index, 1)
  }

  const filePath = path.resolve(path.resolve(), 'docs', '.vitepress', `${type}Items.ts`)
  await writeFile(
    filePath,
    `const ${type}Items = ${JSON.stringify(items, null, 2)}
    
export default ${type}Items
`
  )
}

export default updateDocsConfig
