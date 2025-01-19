<template>
  <a-select-opt-group v-bind="props">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-select-opt-group>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  key: {
    type: String,
  },
  test: {
    type: Object,
    default(rawProps) {
      console.log('rawProps', rawProps)
      return rawProps.label
    },
  },
})
</script>

<style lang="scss" scoped></style>
