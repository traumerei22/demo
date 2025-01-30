export default {
  install: (app, options) => {
    app.config.globalProperties.$_ = $_
    app.config.globalProperties.$dayjs = dayjs
  },
}
