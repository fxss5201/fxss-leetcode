// #region ListNodeJs
export function ListNodeJs(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// #endregion ListNodeJs

export function getListNodeJs(arr) {
  let res = null
  let middle = null
  arr.map(item => {
    if (!res) {
      res = middle = new ListNodeJs(item)
    } else {
      middle.next = new ListNodeJs(item)
      middle = middle.next
    }
  })
  return res
}
