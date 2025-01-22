<template>
  <a-tabs v-model:activeKey="activeKey" v-bind="props">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-tabs>
</template>

<script setup>
const activeKey = defineModel('activeKey')

const props = defineProps({
  animated: {
    // Whether to change tabs with animation. Only works while tabPosition="top" | "bottom"
    // Object: {inkBar:boolean, tabPane:boolean}
    type: [Boolean, Object],
    default(rawProps) {
      // true, false when type="card"
      return rawProps.type === 'card' ? false : true
    },
  },
  destroyInactiveTabPane: {
    // Whether destroy inactive TabPane when change tab
    type: Boolean,
    default: false,
  },
  hideAdd: {
    // Hide plus icon or not. Only works while type="editable-card"
    type: Boolean,
    default: false,
  },
  size: {
    // preset tab bar size
    type: String,
    default: 'middle',
    validator(value, props) {
      return ['large', 'middle', 'small'].includes(value)
    },
  },
  tabBarGutter: {
    // The gap between tabs
    type: Number,
  },
  tabBarStyle: {
    // CSSProperties
    type: Object,
  },
  tabPosition: {
    // Position of tabs
    type: String,
    default: 'top',
    validator(value, props) {
      return ['top', 'right', 'bottom', 'left'].includes(value)
    },
  },
  type: {
    // Basic style of tabs
    type: String,
    default: 'line',
    validator(value, props) {
      return ['line', 'card', 'editable-card'].includes(value)
    },
  },
})
</script>

<style lang="scss" scoped></style>
