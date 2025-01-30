import { createI18n, useI18n } from 'vue-i18n'

export default {
  install: (app, options) => {
    const i18n = createI18n({
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
      /* 다국어 메시지 객체 바꿔주기 */
      messages: {
        en: {
          message: {
            hello: 'hello world',
          },
        },
        ja: {
          message: {
            hello: 'こんにちは、世界',
          },
        },
      },
    })

    const { t } = i18n.global
    app.config.globalProperties.$t = t
    app.provide('$t', t)

    return i18n
  },
}
