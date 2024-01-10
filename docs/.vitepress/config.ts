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
    ],

    sidebar: [
      {
        text: '列表',
        items: [
          { text: '语义化版本倒序', link: '/list/versionSort' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fxss5201/fxss-leetcode' }
    ],
  }
})
