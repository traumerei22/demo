<template>
  <a-space direction="vertical">
    <a-input v-model:value="value" placeholder="Basic usage" />
    <a-input v-model:value.lazy="value1" autofocus placeholder="Lazy usage" />
  </a-space>
</template>
<script setup>
import { watch, ref } from 'vue'
const value = ref('')
const value1 = ref('')
</script>
