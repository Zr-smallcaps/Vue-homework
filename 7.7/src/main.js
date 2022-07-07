import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';
import axios from 'axios';
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.config.productionTip = false;
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});

Vue.prototype.$axios = axios;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
