<template>
  <div id="basic" style="margin: 50px 20px 20px 50px">
    <SuppTimeRangePicker
      ref="$defaultTimeRangePicker"
      v-model:value="timeRangeValue"
      v-model:open="rangeOpenValue"
      @change="changeEvent"
      @openChange="openChangeEvent"
      separator="~"
    />
    <SuppTimeRangePicker v-model:value="amPmRangeValue" use12-hours format="h:mm:ss A">
      <template #separator>
        <DoubleRightOutlined />
      </template>
    </SuppTimeRangePicker>
    <SuppTimeRangePicker v-model:value="intervalRangeValue" :minute-step="15" :second-step="10" />
    <a-time-range-picker status="error" />
  </div>
  <div id="status" style="margin: 50px 20px 20px 50px">
    <SuppTimeRangePicker status="error" />
    <SuppTimeRangePicker status="warning" />
    <SuppTimeRangePicker :bordered="false" />
  </div>
  <div id="size" style="margin: 50px 20px 20px 50px">
    <SuppTimeRangePicker size="small" />
    <SuppTimeRangePicker size="large" />
  </div>
  <div id="disabled" style="margin: 50px 20px 20px 50px">
    <SuppTimeRangePicker disabled />
    <SuppTimeRangePicker
      :value="[$dayjs('12:08:23', 'HH:mm:ss'), null]"
      :disabled="[true, false]"
    />
  </div>
</template>

<script setup>
const timeRangeValue = ref()
const rangeOpenValue = ref(false)
const amPmRangeValue = ref()
const intervalRangeValue = ref()

const $defaultTimeRangePicker = ref()
const changeEvent = (time, timeString) => {
  console.log('change event - time : ', time)
  console.log('change event - timeString : ', timeString)
  $defaultTimeRangePicker.value.blur()
}
const openChangeEvent = (open) => {
  console.log('open value: ', rangeOpenValue.value)
  console.log('openChange event : ', open)
}
</script>

<style lang="scss" scoped></style>
