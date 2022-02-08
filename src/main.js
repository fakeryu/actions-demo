import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';

import store from './store'
import router from './router'

// 按需引入
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
// Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
