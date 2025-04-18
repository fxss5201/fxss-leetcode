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

export function listAddItems (list: ItemType[], addItem: ItemAddSortType): ItemType[] {
  if (list.length === 0) {
    return [{
      text: addItem.text,
      link: addItem.link
    }]
  }
  const itemsAddSort = listAddSort(list)
  itemsAddSort.push(addItem)
  return itemsAddSort.sort((a, b) => a.sort - b.sort).map(item => {
    return {
      text: item.text,
      link: item.link
    }
  })
}
