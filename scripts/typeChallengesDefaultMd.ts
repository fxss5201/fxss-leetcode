import { codeTypeNeedUrl } from './config'

function getTypeChallengesDefaultMd (name: string, type: string, title: string, url: string): string {
  return `# ${title}

${codeTypeNeedUrl.includes(type) ? `[${title}](${url})` : title}

## 代码

::: code-group

<<< ../../src/${type}/${name}/index.ts{typescript} [typescript]

:::
`
}

export default getTypeChallengesDefaultMd
