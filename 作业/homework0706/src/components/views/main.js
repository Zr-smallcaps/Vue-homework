import Vue from 'vue';
import App from './App.vue';
// 引入第三方包里的bootstrap 的 css文件

Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

// 目标: 请求数据 - 打印
// 1. 下载axios库, main.js - 全局绑定属性 (确保任意.vue文件可以都访问到这个axios方法)

// 2. 基础地址

// 3. axios方法添加到Vue的原型上

new Vue({
  render: (h) => h(App),
}).$mount('#app');
