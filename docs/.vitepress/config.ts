import { defineConfig } from 'vitepress'
import leetcodeItems from './leetcodeItems'
import otherItems from './otherItems'
import typeChallengesItems from './typeChallengesItems'

const base = '/fxss-leetcode/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fxss-leetcode",
  titleTemplate: 'fxss',
  description: "fxss-leetcode 算法",
  base,
  lastUpdated: true,
  head: [
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?83fa280fdd82db34539b332fcd3fe07a";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    }
  },
  sitemap: {
    hostname: 'https://fxss5201.github.io',
    transformItems: (items) => {
      return items.map(item => {
        return {
          ...item,
          url: base + item.url
        }
      })
    }
  },
  themeConfig: {
    i18nRouting: false,
    returnToTopLabel: '返回顶部',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '项目简介', link: '/introduction/' },
      { text: 'leetcode', link: '/leetcode/' },
      { text: 'type-challenges', link: '/type-challenges/' },
      { text: '其他', link: '/other/' },
      { text: '泛积木-低代码', link: 'https://www.fxss.work/' },
    ],

    sidebar: {
      'introduction/': [
        {
          text: 'leetcode',
          collapsed: false,
          items: leetcodeItems
        },
        {
          text: 'other',
          collapsed: false,
          items: otherItems
        },
        {
          text: 'type-challenges',
          collapsed: false,
          items: typeChallengesItems
        }
      ],
      '/leetcode/': [
        {
          text: 'leetcode',
          collapsed: false,
          items: leetcodeItems
        }
      ],
      '/other/': [
        {
          text: 'other',
          collapsed: false,
          items: otherItems
        }
      ],
      '/type-challenges/': [
        {
          text: 'type-challenges',
          collapsed: false,
          items: typeChallengesItems
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fxss5201/fxss-leetcode' },
    ],

    editLink: {
      pattern: 'https://github.com/fxss5201/fxss-leetcode/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '最新更新时间',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: 'Released under the <a href="https://github.com/fxss5201/fxss-leetcode/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/fxss5201">fxss5201</a>',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            }
          }
        }
      },
    },
  }
})
