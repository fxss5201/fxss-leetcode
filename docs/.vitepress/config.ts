import { defineConfig } from 'vitepress'

const base = '/fxss-leetcode/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fxss-leetcode",
  titleTemplate: 'fxss',
  description: "fxss-leetcode 算法",
  base,
  lastUpdated: true,
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
      { text: '列表', link: '/list/' },
      { text: '泛积木-低代码', link: 'https://www.fxss.work/' },
    ],

    sidebar: [
      {
        text: '列表',
        items: [
          { text: '语义化版本倒序', link: '/list/versionSort' },
          { text: '1. 两数之和', link: '/list/twoSum' },
          { text: '2696. 删除子串后的字符串最小长度', link: '/list/minimumStringLengthAfterRemovingSubstrings' }
        ]
      },
    ],

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
