<template>
  <div>
    <SuppTree :treeData="treeData" :defaultExpandAll="true"> </SuppTree>
  </div>
</template>

<script setup>
import { Input } from 'ant-design-vue'
const render = {
  components: {
    Input,
  },
  template: {},
}

const treeData = [
  {
    title: h(Input), // h(<a-input v-model:value="'parent 1'" />),
    key: '0-0',
    children: [
      {
        title: h(Input),
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            key: '0-0-1-0',
            title: 'sss',
          },
        ],
      },
    ],
  },
]
</script>

<style lang="scss">
.ant-tree-switcher {
  pointer-events: none;
}
</style>
