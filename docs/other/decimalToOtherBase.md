# 十进制转其他进制

十进制转其他进制

## 代码

::: code-group

``` javascript
export function getMapNumberToString (base) {
  const res = {}
  if (base < 10) return res
  const strList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let curIndex = 10
  while (curIndex < base) {
    res[curIndex] = strList[curIndex - 10]
    curIndex++
  }
  return res
}
```

``` typescript
export function getMapNumberToString (base: number) {
  const res: { [key: string]: string } = {}
  if (base < 10) return res
  const strList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let curIndex = 10
  while (curIndex < base) {
    res[curIndex] = strList[curIndex - 10]
    curIndex++
  }
  return res
}
```

:::

::: code-group

<<< ../../src/other/decimalToOtherBase/javascript.js{javascript} [javascript]
<<< ../../src/other/decimalToOtherBase/typescript.ts{typescript} [typescript]

:::
