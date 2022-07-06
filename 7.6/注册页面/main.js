import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
import { Tab, Tabs } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Cell, CellGroup } from 'vant';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Radio);
Vue.use(RadioGroup);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
