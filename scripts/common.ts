export interface ItemType {
  text: string
  link: string
}

export interface ItemAddSortType extends ItemType {
  sort: number
}

export function listAddSort (list: ItemType[]): ItemAddSortType[] {
  return list.map(item => {
    return {
      ...item,
      sort: parseInt(item.text)
    }
  })
}

export function leetcodeAddItems (list: ItemType[], addItem: ItemAddSortType): ItemType[] {
  const itemsAddSort = listAddSort(list)
  for (let i = 0; i < itemsAddSort.length; i++) {
    const item = itemsAddSort[i]
    if ((i === 0 && addItem.sort < item.sort) || (addItem.sort < item.sort && addItem.sort > itemsAddSort[i - 1].sort)) {
      itemsAddSort.splice(i, 0, addItem)
      break
    }
  }
  return itemsAddSort.map(item => {
    return {
      text: item.text,
      link: item.link
    }
  })
}
