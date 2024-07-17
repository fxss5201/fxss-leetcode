/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { coverageConfigDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      enabled: true,
      exclude: [
        '**/scripts/**',
        '**/src/App.vue',
        '**/src/main.ts',
        '**/src/components/**',
        ...coverageConfigDefaults.exclude
      ]
    },
  },
})
