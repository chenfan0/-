import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.less'
import 'element-plus/dist/index.css'
import router from '@/router'
import store from '@/store'
import registerElement from './element-plus'
import { initialLoginStore } from '@/store'
import { registerGlobalProps } from '@/golbal'

import App from './App.vue'

const app = createApp(App)
app.use(registerGlobalProps)
app.use(registerElement) // 注册element-plus组件
app.use(store)

initialLoginStore(store)
app.use(router)
app.mount('#app')
