import _ from 'lodash-es'

export default {
  install: (app, options) => {
    app.config.globalProperties.$_ = _
  },
}
