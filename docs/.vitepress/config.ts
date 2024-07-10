import { defineConfig } from 'vitepress'

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
      { text: 'leetcode', link: '/leetcode/' },
      { text: '其他', link: '/other/' },
      { text: '泛积木-低代码', link: 'https://www.fxss.work/' },
    ],

    sidebar: [
      {
        text: 'leetcode',
        items: [
          { text: '1. 两数之和', link: '/leetcode/twoSum' },
          { text: '2. 两数相加', link: '/leetcode/addTwoNumbers' },
          { text: '3. 无重复字符的最长子串', link: '/leetcode/longestSubstringWithoutRepeatingCharacters' },
          { text: '5. 最长回文子串', link: '/leetcode/longestPalindromicSubstring' },
          { text: '6. Z 字形变换', link: '/leetcode/zigzagConversion' },
          { text: '7. 整数反转', link: '/leetcode/reverseInteger' },
          { text: '9. 回文数', link: '/leetcode/palindromeNumber' },
          { text: '11. 盛最多水的容器', link: '/leetcode/containerWithMostWater' },
          { text: '12. 整数转罗马数字', link: '/leetcode/integerToRoman' },
          { text: '13. 罗马数字转整数', link: '/leetcode/romanToInteger' },
          { text: '14. 最长公共前缀', link: '/leetcode/longestCommonPrefix' },
          { text: '15. 三数之和', link: '/leetcode/threeSum' },
          { text: '83. 删除排序链表中的重复元素', link: '/leetcode/removeDuplicatesFromSortedList' },
          { text: '2085. 统计出现过一次的公共字符串', link: '/leetcode/countCommonWordsWithOneOccurrence' },
          { text: '2182. 构造限制重复的字符串', link: '/leetcode/constructStringWithRepeatLimit' },
          { text: '2645. 构造有效字符串的最少插入数', link: '/leetcode/addMinimum' },
          { text: '2696. 删除子串后的字符串最小长度', link: '/leetcode/minimumStringLengthAfterRemovingSubstrings' },
        ]
      },
      {
        text: 'other',
        items: [
          { text: '语义化版本倒序', link: '/other/versionSort' },
          { text: 'n个数值是否可以组成n边形', link: '/other/nNumberCanNPolygon' },
          { text: '数组反转', link: '/other/arrayReverse' },
          { text: '字符串反转', link: '/other/stringReverse' },
          { text: '链表反转', link: '/other/listNodeReverse' },
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
