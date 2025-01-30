// import './assets/main.css'
import 'ant-design-vue/dist/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import commPlugin from './plugins/commPlugin'
import i18n from './plugins/i18n'

import Antd from 'ant-design-vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(i18n)
app.use(Antd)
app.use(commPlugin)

app.mount('#app')
