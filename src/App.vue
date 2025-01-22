<script setup>
const value1 = ref()

let holidays = []
const getCurrentStyle = (current, today) => {
  // debugger
  // console.log(current)
  // console.log(today)
  const style = {}
  const isHoliday = holidays.filter(
    (holiday) => holiday.locdate.toString() === current.format('YYYYMMDD'),
  )
  if (isHoliday.length > 0) {
    style.border = '1px solid #1890ff'
    style.borderRadius = '50%'
  }
  return style
}

const instance = axios.create({
  baseURL: 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService',
  timeout: 1000,
  params: {
    serviceKey:
      'mymJbeGxZm5f2sc0sw2KrPxtUE1fz1quH09W/vf3YW2LGhi8nB5HCMc6FpoFJZVOFXOJ23cjch56+mw4CiMk1w==',
    _type: 'json',
  },
  // headers: {'X-Custom-Header': 'foobar'}
})

const getHolidayInfo = () => {
  instance
    .get('/getRestDeInfo', {
      params: {
        pageNo: 1,
        numOfRows: 10,
        solYear: dayjs().year(),
        solMonth: dayjs().format('MM'),
      },
    })
    .then(({ data }) => {
      console.log(data.response.body.items) // name에 접근하는 것은 안전합니다.
      holidays = data.response.body.items.item
    })
    .catch((error) => {
      console.error('Error fetching user:', error)
    })
}

onMounted(() => {
  // console.log(dayjs())
  getHolidayInfo()
})
</script>

<template>
  <ConfigProvider>
    <a-date-picker v-model:value="value1">
      <template #dateRender="{ current, today }">
        <div class="ant-picker-cell-inner" :style="getCurrentStyle(current, today)">
          {{ current.date() }}
        </div>
      </template>
    </a-date-picker>
  </ConfigProvider>
</template>

<style scoped></style>
