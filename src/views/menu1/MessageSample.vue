<template>
  <div>{{ $t('message.hello') }}</div>
</template>

<script setup>
const $t = inject('$t')
onMounted(() => {
  console.log($t('message.hello'))
})
</script>

<style lang="scss" scoped></style>
