<template>
  <a-time-range-picker
    ref="$aTimeRangePicker"
    v-model:value="value"
    v-model:open="open"
    v-bind="props"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-time-range-picker>
</template>

<script setup>
import { timePickerBaseProps } from './props/timePickerBaseProps'

const value = defineModel('value')
const open = defineModel('open')

const props = defineProps({
  ...timePickerBaseProps,
  placeholder: {
    type: Array,
    default: ['Start time', 'End time'],
  },
  order: {
    type: Boolean,
    default: true,
  },
  disabledTime: {
    // https://antdv.com/components/time-picker#rangedisabledtime
    type: Function,
  },
  allowEmpty: {
    type: Array,
    default: [false, false],
  },
  defaultPickerValue: {
    // [dayjs, dayjs]
    type: Array,
  },
  disabled: {
    // [boolean, boolean]
    type: [Boolean, Array],
  },
  disabledTime: {
    // To specify the time that cannot be selected
    // function(date: dayjs, partial: start | end) => {}
    type: Function,
  },
  format: {
    type: String,
    default: 'HH:mm:ss',
  },
  presets: {
    // The preset ranges for quick selection
    // { label: slot, value: dayjs[] }[]
    type: Array,
  },
  ranges: {
    // The preseted ranges for quick selection
    // { [range: string]: dayjs[] } | { [range: string]: () => dayjs[] }
    type: Array,
    Function,
  },
  separator: {
    // Set separator between inputs
    type: String,
  },
})

const $aTimeRangePicker = ref()
const blur = () => {
  $aTimeRangePicker.value.blur()
}
const focus = () => {
  $aTimeRangePicker.value.focus()
}

defineExpose({ blur, focus })
</script>

<style lang="scss" scoped></style>
