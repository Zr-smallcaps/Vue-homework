import Vue from 'vue'
import App from './App.vue'
// 
import '@/assets/styles/reset.css'
import '@/assets/mobile/flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入路由router
import router from '@/router'

Vue.config.productionTip = false

Vue.use(Vant);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
