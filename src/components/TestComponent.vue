<script setup lang="ts">
import { ref } from 'vue'
import { repeatLimitedString } from './../leetcode/constructStringWithRepeatLimit/typescript'

const res = ref('')
res.value = repeatLimitedString('xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt', 1)
</script>

<template>
  <div>{{ res }}</div>
</template>