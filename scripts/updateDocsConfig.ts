import { writeFile } from 'fs/promises'
import path from 'path'
import leetcodeItems from '../docs/.vitepress/leetcodeItems'
import otherItems from '../docs/.vitepress/otherItems'
import typeChallengesItems from '../docs/.vitepress/typeChallengesItems'
import { type ItemType, listAddItems } from './common'
import { camelCase } from 'change-case'

async function updateDocsConfig (handle: string, name: string, type: string, title: string = ''): Promise<void> {
  let items: ItemType[] = []
  if (handle === 'add') {
    const titleSortNum = parseInt(title)
    if (type === 'leetcode') {
      if (titleSortNum) {
        items = listAddItems(leetcodeItems, { text: title, link: `/${type}/${name}`, sort: titleSortNum })
      } else {
        items = leetcodeItems
        items.push({ text: title, link: `/${type}/${name}` })
      }
    } else if (type === 'type-challenges') {
      if (titleSortNum) {
        items = listAddItems(typeChallengesItems, { text: title, link: `/${type}/${name}`, sort: titleSortNum })
      } else {
        items = typeChallengesItems
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
    } else if (type === 'type-challenges') {
      items = typeChallengesItems
    } else {
      items = otherItems
    }
    const index = items.findIndex(x => x.link === rmLink)
    items.splice(index, 1)
  }

  const typeName = camelCase(type)

  const filePath = path.resolve(path.resolve(), 'docs', '.vitepress', `${typeName}Items.ts`)
  await writeFile(
    filePath,
    `const ${typeName}Items = ${JSON.stringify(items, null, 2)}
    
export default ${typeName}Items
`
  )
}

export default updateDocsConfig
