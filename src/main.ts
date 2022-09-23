import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router';
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/themify/themify.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

 // 创建vue实例
const app = createApp(App)

// 挂载pinia
app.use(store)
app.use(router);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})

// 挂载实例
app.mount('#app');
