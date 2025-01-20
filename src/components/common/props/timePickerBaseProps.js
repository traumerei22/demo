export const timePickerBaseProps = {
  allowClear: {
    type: Boolean,
    default: true,
  },
  autofocus: {
    // If get focus when component mounted
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: true,
  },

  clearText: {
    // The clear tooltip of icon
    type: String,
    default: 'clear',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledTime: {
    // 	To specify the time that cannot be selected	DisabledTime
    // https://antdv.com/components/time-picker#disabledtime
    type: Function,
  },
  format: {
    type: String,
    // default: 'HH:mm:ss'
  },
  getPopupContainer: {
    // To set the container of the floating layer, while the default is to create a div element in body
    type: Function,
  },
  hideDisabledOptions: {
    // Whether hide the options that can not be selected
    type: Boolean,
    default: false,
  },
  hourStep: {
    // Interval between hours in picker
    type: Number,
    default: 1,
  },
  inputReadOnly: {
    // Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)
    type: Boolean,
    default: false,
  },
  minuteStep: {
    // Interval between minutes in picker
    type: Number,
    default: 1,
  },

  placeholder: {
    // 	Display when there's no value
    type: [String, Array],
    default: 'Select a time',
  },
  placement: {
    type: String,
    default: 'bottomLeft',
    validator(value, props) {
      return ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'].includes(value)
    },
  },
  popupClassName: {
    type: String,
  },
  popupStyle: {
    // CSSProperties { '--bg-color': 'blue' }
    type: String,
  },
  secondStep: {
    // Interval between seconds in picker
    type: Number,
    default: 1,
  },
  showNow: {
    type: Boolean,
  },
  use12Hours: {
    // Display as 12 hours format, with default format h:mm:ss a
    type: Boolean,
    default: false,
  },
  valueFormat: {
    type: String,
  },
}
