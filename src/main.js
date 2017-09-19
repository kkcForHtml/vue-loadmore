// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import Mint from 'mint-ui'
import store from './store/vuex'
import { filters } from './filters/filters'
import { directives } from './directives/directives'
import { plugin } from './plugin/plugin'
import { components } from './components';
import 'mint-ui/lib/style.css'
import './assets/fonts/iconfont.css'


Vue.use(Mint);
Vue.use(filters);     //自定义全局过滤器
Vue.use(directives);  //自定义全局指令
Vue.use(plugin);      //自定义全局插件
Vue.use(components);  //自定义全局组件

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
