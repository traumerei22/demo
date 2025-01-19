<template>
  <a-select-option v-bind="props">
    <template #default>
      <slot></slot>
    </template>
  </a-select-option>
</template>

<script setup>
const props = defineProps({
  class: {
    // additional class to option
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  key: {
    // Same usage as value. If Vue request you to set this property, you can set it to value of option, and then omit value property.
    type: String,
    default(rawProps) {
      return rawProps.value
    },
  },
  title: {
    type: String,
  },
  value: {
    //default to filter with this property
    type: [String, Number],
  },
})
</script>

<style lang="scss" scoped></style>
