<template>
  <div>
    <CommSelect ref="$select1" v-model:value="selectValue" @change="changeEvent" @blur="blurEvent">
      <!-- event는 comm에 등록하지 않는다! 2번 반복되는 것 방지-->
      <CommSelectOption value="lucy">Lucy</CommSelectOption>
      <CommSelectOption value="disabled" disabled>Disabled</CommSelectOption>
      <CommSelectOption value="Yiminghe">yiminghe</CommSelectOption>
    </CommSelect>
    <CommSelect v-model:value="selectValue2" style="width: 120px" disabled size="small">
      <CommSelectOption value="lucy">Lucy</CommSelectOption>
    </CommSelect>
    <!-- options 사용을 권장 recommend-->
    <CommSelect
      v-model:value="selectValue3"
      style="width: 120px"
      :options="options1"
      @focus="focus"
      @change="changeEvent"
      size="large"
    ></CommSelect>
    <CommSelect
      v-model:value="selectValue4"
      style="width: 120px"
      :options="options1"
      @focus="focus"
      @change="changeEvent"
      loading
    ></CommSelect>
  </div>
  <div>
    <!-- Select with tags, transform input to tag (scroll the menu)  / add new tag 이걸 사용하려나??-->
    <CommSelect
      v-model:value="selectValue5"
      mode="tags"
      style="width: 100%"
      placeholder="Tags Mode"
      :options="options2"
      @change="changeEvent"
    ></CommSelect>
    <CommSelect
      v-model:value="selectValue6"
      mode="multiple"
      :max-tag-count="2"
      style="width: 100%"
      placeholder="multi select"
      :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
      @change="changeEvent"
    ></CommSelect>
    <CommSelect
      v-model:value="selectValue7"
      show-search
      placeholder="show search"
      style="width: 200px"
      :options="options1"
      :filter-option="filterOption"
      @focus="focus"
      @blur="blurEvent"
      @change="changeEvent"
    ></CommSelect>
  </div>
  <div>
    <CommSelect
      v-model:value="province"
      style="width: 120px"
      :options="provinceData.map((pro) => ({ value: pro }))"
    ></CommSelect>
    <CommSelect
      v-model:value="secondCity"
      style="width: 120px"
      :options="cities.map((city) => ({ value: city }))"
    ></CommSelect>
  </div>
  <div>
    <CommSelect status="error" style="width: 100%" />
    <CommSelect status="warning" style="width: 100%" />
  </div>
  <div>
    <!-- <CommSelect v-model:value="selectValue9" style="width: 200px" @change="changeEvent">
      <CommSelectOptionGroup key="group">
        <template #label>
          <span>
            <user-outlined />
            Manager
          </span>
        </template>
        <CommSelectOption key="jack" value="jack">Jack</CommSelectOption>
        <CommSelectOption key="lucy" value="lucy">Lucy</CommSelectOption>
      </CommSelectOptionGroup>
      <CommSelectOptionGroup label="Engineer">
        <CommSelectOption value="Yiminghe">yiminghe</CommSelectOption>
        <CommSelectOption value="Yiminghe1">yiminghe1</CommSelectOption>
      </CommSelectOptionGroup>
    </CommSelect> -->
    <CommSelect
      v-model:value="selectValue9"
      :options="options3"
      style="width: 200px"
      @change="changeEvent"
    ></CommSelect>
  </div>
</template>

<script setup>
import CommSelectOption from '@/components/common/CommSelectOption.vue'

const selectValue = ref('lucy')
const selectValue2 = ref('lucy')
const selectValue3 = ref('lucy')
const selectValue4 = ref('lucy')
const selectValue7 = ref('')

const options1 = ref([
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe',
  },
])

const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

const selectValue5 = ref([])
const selectValue6 = ref([])
const options2 = [...Array(25)].map((_, i) => ({
  value: (i + 10).toString(36) + (i + 1),
}))

const provinceData = ['Zhejiang', 'Jiangsu']
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
}
const province = ref(provinceData[0])
const secondCity = ref(cityData[province.value][0])

const cities = computed(() => {
  return cityData[province.value]
})

watch(province, (val) => {
  secondCity.value = cityData[val][0]
})

const selectValue9 = ref('')
const options3 = ref([
  {
    label: 'Manager',
    options: [
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
    ],
  },
  {
    label: 'Engineer',
    options: [
      {
        value: 'yiminghe',
        label: 'Yiminghe',
      },
    ],
  },
])

const focus = (event) => {
  console.log('focus event: ' + event)
}

const $select1 = ref()
const changeEvent = (value, option) => {
  console.log('change event: ' + value)
  $select1.value.blur()
}

const blurEvent = (event) => {
  console.log('blur event: ' + event)
}
</script>

<style lang="scss" scoped>
div {
  margin: 10px 20px 10px 20px;
}
</style>
