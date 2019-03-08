import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import { Input, Button, DatePicker, Message } from 'element-ui'
import Print from './utils/print'

Vue.use(Input)
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(Message)
Vue.use(Print)

Vue.prototype.$message = Message
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
