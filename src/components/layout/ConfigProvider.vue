<template>
  <a-config-provider :locale="locale">
    <template #default="data">
      <slot v-bind="data || {}"></slot>
    </template>
  </a-config-provider>
</template>

<script setup>
import enUS from 'ant-design-vue/es/locale/en_US'
import koKR from 'ant-design-vue/es/locale/ko_KR'

const locale = ref(enUS)
</script>

<style lang="scss" scoped></style>
