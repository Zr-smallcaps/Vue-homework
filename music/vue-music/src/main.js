import Vue from "vue";
import App from "./App.vue";
import "@/assets/styles/reset.css";
import "@/assets/mobile/flexible.js";
import router from "@/router";

import {
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Image as VanImage,
} from "vant";

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);

Vue.config.productionTip = false;

// 网络请求
// 对于axios封装 request.js
// 放在 src 目录下的  utils文件夹/request.js

// 对于 接口
// 放在 src 目录下的  apis文件夹下
// 每个组价的接口 放在对应的js文件里 Home.vue ==> home.js
// 接口的导出 home.js 里的接口导入到 通过 apis 下的index.js 导出

// 演示接口的用法
// import { getRecommendListApi } from "@/apis";
// // console.log(getRecommendListApi());
// async function fn() {
//   try {
//     const res = await getRecommendListApi();
//     console.log(res);
//     console.log(aa);
//   } catch (e) {
//     console.log("错了");
//   }
// }

// fn();

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
