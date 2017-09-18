// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import Mint from 'mint-ui'
import store from './store/vuex'
import {filters} from './filters/filters'
import {directives} from './directives/directives'
import {plugin} from './plugin/plugin'
import { DatePicker } from 'element-ui';
import 'mint-ui/lib/style.css'
import './assets/fonts/iconfont.css'
import 'element-ui/lib/theme-default/index.css'


Vue.use(Mint);
Vue.use(filters);
Vue.use(directives);
Vue.use(plugin);
Vue.use(DatePicker)

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
