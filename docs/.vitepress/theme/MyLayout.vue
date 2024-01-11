<script setup>
import DefaultTheme from 'vitepress/theme'
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { isDark } = useData()
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <div style="margin-bottom: 10px;">
        <Giscus
          id="comments"
          repo="fxss5201/fxss-leetcode-comment"
          repoId="R_kgDOLDXsjA"
          category="Announcements"
          categoryId="DIC_kwDOLDXsjM4CcVyB"
          mapping="pathname"
          term="Welcome to @giscus/vue component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          :theme="isDark ? 'dark' : 'light'"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </template>
  </Layout>
</template>