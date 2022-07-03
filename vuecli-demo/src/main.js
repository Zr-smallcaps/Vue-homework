import Vue from 'vue'

import 'element-plus/dist/index.css';
import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.css"
// 样式引入
import "./assets/styles/base.css"
import "./assets/styles/index.css"

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
