<template>
  <div id="basic" style="margin: 50px 20px 20px 50px">
    <SuppTimePicker
      ref="$defaultTimePicker"
      v-model:value="timeValue"
      v-model:open="openValue"
      @change="changeEvent"
      @openChange="openChangeEvent"
    />
    <SuppTimePicker v-model:value="hourMinuteValue" format="HH:mm" @change="changeEvent" />
    <SuppTimePicker :value="$dayjs('12:08:23', 'HH:mm:ss')" disabled />
    <SuppTimePicker :bordered="false"></SuppTimePicker>
    <!-- app.config.globalProperties.$dayjs = dayjs -->
  </div>
  <div id="sizeAndStatus" style="margin: 50px 20px 20px 50px">
    <SuppTimePicker v-model:value="hourMinuteValue" placeholder="small" size="small" />
    <SuppTimePicker v-model:value="hourMinuteValue" placeholder="large" size="large" />
    <SuppTimePicker status="error" />
    <SuppTimePicker status="warning" />
  </div>
  <div id="12hours" style="margin: 50px 20px 20px 50px">
    <SuppTimePicker v-model:value="amPmValue" use12-hours />
    <SuppTimePicker v-model:value="amPmValue" use12-hours format="h:mm:ss A" style="width: 140px" />
    <SuppTimePicker v-model:value="amPmValue" use12-hours format="h:mm a" />
  </div>
  <div id="interval" style="margin: 50px 20px 20px 50px">
    <SuppTimePicker
      ref="$intervalPicker"
      v-model:value="intervalValue"
      :minute-step="15"
      :second-step="10"
    />
  </div>
  <div id="suffix" style="margin: 50px 20px 20px 50px">
    <SuppTimePicker v-model:value="intervalValue" :default-value="$dayjs('00:00:00', 'HH:mm:ss')">
      <template #suffixIcon><smile-outlined /></template>
    </SuppTimePicker>
    <SuppTimePicker v-model:value="intervalValue" placement="topLeft" />
  </div>
</template>

<script setup>
const timeValue = ref()
const openValue = ref(false)
const hourMinuteValue = ref(dayjs('12:08', 'HH:mm'))
const amPmValue = ref()
const intervalValue = ref()

const $defaultTimePicker = ref()
const changeEvent = (time, timeString) => {
  console.log('change event - time : ', time)
  console.log('change event - timeString : ', timeString)
  $defaultTimePicker.value.blur()
}

const openChangeEvent = (open) => {
  console.log('open value: ', openValue.value)
  console.log('openChange event : ', open)
}

const $intervalPicker = ref()
onMounted(() => {
  $intervalPicker.value.focus()
})
</script>

<style lang="scss" scoped></style>
