<template>
  <div>
    <a-rate v-model:value="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(2)
</script>

<style lang="scss" scoped></style>
