<template>
  <a-select ref="$aSelect" v-model:value="value" v-bind="props">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-select>
</template>

<script setup>
const value = defineModel('value')

const props = defineProps({
  allowClear: {
    type: Boolean,
    default: false,
  },
  autoClearSearchValue: {
    // Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags.
    type: Boolean,
    default: true,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  defaultActiveFirstOption: {
    // Whether active first option by default
    type: Boolean,
    default: true,
  },
  defaultOpen: {
    // Initial open state of dropdown
    type: Boolean,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  popupClassName: {
    // className of dropdown menu
    type: String,
  },
  dropdownMatchSelectWidth: {
    // Determine whether the dropdown menu and the select input are the same width. Default set min-width same as input.
    // Will ignore when value less than select width. false will disable virtual scroll
    type: [Boolean, Number],
    default: true,
  },
  dropdownMenuStyle: {
    // additional style applied to dropdown menu
    type: Object,
  },
  dropdownStyle: {
    // style of dropdown menu
    type: Object,
  },
  fieldNames: {
    // Customize node label, value, options field name
    type: Object,
    //default: { label: label, value: value, options: options },
  },
  filterOption: {
    // If true, filter options by input, if function, filter options against it.
    // The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.
    type: [Boolean, Function], // function(inputValue, option)
    default: false,
  },
  filterSort: {
    // Sort function for search options sorting, see Array.sort's compareFunction
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    type: Function, // (optionA: Option, optionB: Option) => number
  },
  firstActiveValue: {
    // Value of action option by default
    type: [String, Array],
  },
  getPopupContainer: {
    // Parent Node which the selector should be rendered to. Default to body.
    // When position issues happen, try to modify it into scrollable content and position it relative.
    type: Function,
    default: () => document.body,
  },
  labelInValue: {
    // whether to embed label in value, turn the format of value from string to {key: string, label: vNodes, originLabel: any}, originLabel (3.1) maintains the original type.
    // If the node is constructed through a-select-option children, the value is a function (the default slot of a-select-option)
    type: Boolean,
    default: false,
  },
  listHeight: {
    // Config popup height
    type: Number,
    default: 256,
  },
  loading: {
    // indicate loading state
    type: Boolean,
    default: false,
  },
  maxTagCount: {
    // Max tag count to show
    type: Number,
  },
  maxTagPlaceholder: {
    // slot | function(omittedValues)
    type: Function,
  },
  maxTagTextLength: {
    // Max text length to show
    type: Number,
  },
  mode: {
    // Set mode of Select
    type: String,
    required: false,
    validator(value, props) {
      return ['multiple', 'tags'].includes(value)
    },
  },
  notFoundContent: {
    // Specify content to show when no result matches..
    // string|slot
    type: String,
    default: 'Not Found',
  },
  open: {
    // Controlled open state of dropdown
    type: [Boolean],
    default: undefined,
  },
  optionFilterProp: {
    // Which prop value of option will be used for filter if filterOption is true
    type: String,
    default: 'value',
  },
  optionLabelProp: {
    // (when use options) Which prop value of option will render as content of select.
    type: String,
    required: false,
    validator(value, props) {
      return ['children', 'label'].includes(value)
    },
  },
  options: {
    // Data of the selectOption, manual construction work is no longer needed if this property has been set
    // Array<{value, label, [disabled, key, title]}>
    type: Array,
  },
  placeholder: {
    type: String, // or slot
  },
  placement: {
    // The position where the selection box pops up
    type: String,
    default: 'bottomLeft',
    validator(value, props) {
      return ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'].includes(value)
    },
  },
  searchValue: {
    type: String,
  },
  showArrow: {
    // Whether to show the drop-down arrow
    // default: single:true, multiple:false
    type: Boolean,
    default: true,
  },
  showSearch: {
    // Whether select is searchable
    // default: single:false, multiple:true
    type: Boolean,
  },
  size: {
    // Size of Select input.
    type: String,
    default: 'default',
    validator(value, props) {
      return ['default', 'large', 'small'].includes(value)
    },
  },
  status: {
    // Set validation status
    type: String,
    required: false,
    validator(value, props) {
      return ['error', 'warning'].includes(value)
    },
  },
  tagRender: {
    // Customize tag render, only applies when mode is set to multiple or tags
    type: Function, // (props) => any
  },
  tokenSeparators: {
    // Separator used to tokenize, only applies when mode="tags"
    type: Array,
  },
  virtual: {
    // Disable virtual scroll when set to false
    type: Boolean,
    default: true,
  },
})

const $aSelect = ref()

const blur = () => {
  $aSelect.value.blur()
}

const focus = () => {
  $aSelect.value.focus()
}

defineExpose({ blur, focus })
</script>

<style lang="scss" scoped></style>
