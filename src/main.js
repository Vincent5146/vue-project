import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import 'bootstrap'

import App from './App.vue'
import router from './router'
import emitter from './methods/emitter'
import { currency, date } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'

import AOS from 'aos'
import 'aos/dist/aos.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

AOS.init({
  duration: 400,
  offset: 150
})

const app = createApp(App)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.config.globalProperties.emitter = emitter
app.config.globalProperties.$filters = {
  currency,
  date
}
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.mount('#app')
