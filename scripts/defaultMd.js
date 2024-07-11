function getDefaultMd (name, type) {
  return `# 

[]()

## 代码

::: code-group

<<< ../../src/${type}/${name}/javascript.js{javascript} [javascript]
<<< ../../src/${type}/${name}/typescript.ts{typescript} [typescript]

:::
`
}

export default getDefaultMd
