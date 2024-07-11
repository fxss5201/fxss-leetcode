function getDefaultMd (name: string, type: string, title: string, url: string): string {
  return `# ${title}

${type === 'leetcode' ? `[${title}](${url})` : title}

## 代码

::: code-group

<<< ../../src/${type}/${name}/javascript.js{javascript} [javascript]
<<< ../../src/${type}/${name}/typescript.ts{typescript} [typescript]

:::
`
}

export default getDefaultMd
