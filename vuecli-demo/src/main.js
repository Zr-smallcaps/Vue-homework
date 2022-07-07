import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";

Vue.config.productionTip = false;
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
// 全局指令
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});
// 全局自定义指令
Vue.directive("has", {
    inserted(el, binding, vnode) {
        el.style.display = binding.value == 1 ? 'block' : 'none';
      },
})

new Vue({
  render: (h) => h(App),
}).$mount("#app");
