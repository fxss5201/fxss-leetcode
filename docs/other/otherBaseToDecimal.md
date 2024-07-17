# 其他进制转十进制

其他进制转十进制

## 代码

::: code-group

``` javascript
export function getMapStringToNumber (base) {
  const res = {}
  if (base < 10) return res
  const strList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let curIndex = 10
  while (curIndex < base) {
    res[strList[curIndex - 10]] = String(curIndex)
    curIndex++
  }
  return res
}
```

``` typescript
export function getMapStringToNumber (base: number) {
  const res: { [key: string]: string } = {}
  if (base < 10) return res
  const strList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let curIndex = 10
  while (curIndex < base) {
    res[strList[curIndex - 10]] = String(curIndex)
    curIndex++
  }
  return res
}
```

:::

::: code-group

<<< ../../src/other/otherBaseToDecimal/javascript.js{javascript} [javascript]
<<< ../../src/other/otherBaseToDecimal/typescript.ts{typescript} [typescript]

:::
