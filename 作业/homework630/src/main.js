import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.filter('toReverse', val => {
  return val.split('').reverse().join('');
});
new Vue({
  render: h => h(App),
}).$mount('#app');
