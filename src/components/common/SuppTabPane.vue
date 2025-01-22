<template>
  <a-tab-pane v-bind="props">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-tab-pane>
</template>

<script setup>
const props = defineProps({
  forceRender: {
    // Forced render of content in tabs, not lazy render after clicking on tabs
    type: Boolean,
    default: false,
  },
  // Invalid prop name: "key" is a reserved property. -> 주석 처리
  // key: {
  //   // TabPane's key
  //   type: String,
  //   default(rawProps) {
  //     return rawProps.tab
  //   },
  // },
  tab: {
    // Show text in TabPane's head
    type: String,
  },
})
</script>

<style lang="scss" scoped></style>
