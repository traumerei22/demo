<template>
  <a-time-picker ref="$aTimePicker" v-model:value="value" v-model:open="open" v-bind="props">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-time-picker>
</template>

<script setup>
import { timePickerBaseProps } from './props/timePickerBaseProps'
const value = defineModel('value')
const open = defineModel('open')

const props = defineProps({
  ...timePickerBaseProps,
})

const $aTimePicker = ref()
const blur = () => {
  $aTimePicker.value.blur()
}
const focus = () => {
  $aTimePicker.value.focus()
}

defineExpose({ blur, focus })
</script>

<style lang="scss" scoped></style>
