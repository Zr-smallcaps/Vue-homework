import Vue from "vue";
// import 'element-plus/dist/index.css';
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/base.css";
import "./assets/styles/index.css";

Vue.config.productionTip = false;
// axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// Vue.prototype.$axios = axios
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
new Vue({
    render: (h) => h(App),
}).$mount("#app");
