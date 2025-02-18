<template>
  <a-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    v-bind="props"
  >
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-tree>
</template>

<script setup>
const expandedKeys = defineModel('expandedKeys') // string[] | number[]
const selectedKeys = defineModel('selectedKeys') // string[] | number[]
const checkedKeys = defineModel('checkedKeys') // string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}

const props = defineProps({
  allowDrop: {
    type: Function,
    // ({ dropNode, dropPosition }) => boolean
  },
  autoExpandParent: {
    type: Boolean,
    default: false,
  },
  blockNode: {
    type: Boolean,
    default: false,
  },
  checkable: {
    type: Boolean,
    default: false,
  },
  checkStrictly: {
    type: Boolean,
    default: false,
  },
  defaultExpandAll: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  draggable: {
    // Specifies whether this Tree is draggable (IE > 8)
    type: Boolean,
    default: false,
  },
  treeData: {
    type: Array, // TreeNode[]
  },
  fieldNames: {
    // Replace the title,key and children fields in treeNode with the corresponding fields in treeData
    type: Object,
    // defaul: { children:'children', title:'title', key:'key' }
  },
  filterTreeNode: {
    type: Function,
    // (node) =>
  },
  height: {
    type: Number,
  },
  loadData: {
    // Load data asynchronously
    type: Function,
    // function(node)	=>
  },
  loadedKeys: {
    // 	(Controlled) Set loaded tree nodes. Need work with loadData
    type: Array,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  selectable: {
    type: Boolean,
    default: true,
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  showLine: {
    type: [Boolean, Object], // {showLeafIcon: boolean}
    default: false,
  },
  virtual: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss" scoped></style>
