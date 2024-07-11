import { writeFile } from 'fs/promises'
import path from 'path'
import leetcodeItems from '../docs/.vitepress/leetcodeItems'
import otherItems from '../docs/.vitepress/otherItems'
import { type ItemType, leetcodeAddItems } from './common'

async function updateDocsConfig (name: string, type: string, title: string): Promise<void> {
  let items: ItemType[] = []
  const titleSortNum = parseInt(title)
  if (type === 'leetcode' && titleSortNum) {
    items = leetcodeAddItems(leetcodeItems, { text: title, link: `/${type}/${name}`, sort: titleSortNum })
  } else {
    items = otherItems
    items.push({ text: title, link: `/${type}/${name}` })
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
