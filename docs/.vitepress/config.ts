import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fxss-leetcode",
  titleTemplate: 'fxss',
  description: "fxss-leetcode 算法",
  base: '/fxss-leetcode/',
  lastUpdated: true,
  themeConfig: {
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
    },
  }
})
