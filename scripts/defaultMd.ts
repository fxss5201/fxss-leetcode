import { codeTypeNeedUrl } from './config'

function getDefaultMd (name: string, type: string, title: string, url: string): string {
  return `# ${title}

${codeTypeNeedUrl.includes(type) ? `[${title}](${url})` : title}

## 代码

::: code-group

<<< ../../src/${type}/${name}/javascript.js{javascript} [javascript]
<<< ../../src/${type}/${name}/typescript.ts{typescript} [typescript]

:::

## 测试代码

::: code-group

<<< ../../src/${type}/${name}/${name}.test.js{ts} [test]

:::
`
}

export default getDefaultMd
