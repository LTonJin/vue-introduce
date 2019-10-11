import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Header from "./components/Header";

Vue.config.productionTip = false;

// 全局注册组件
Vue.component('Header', Header);
// 全局注册过滤器
Vue.filter('getEvenNumber', function (value) {
    return value.filter( val => val % 2 === 0);
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
