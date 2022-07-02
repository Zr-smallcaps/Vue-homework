import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
// import moment from 'moment';

new Vue({
  render: h => h(App),
}).$mount('#app');
