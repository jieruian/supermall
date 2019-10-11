import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import 'vant/lib/index.css';

import {
  Swipe,
  SwipeItem,
  Lazyload,
  Toast,
} from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Toast);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
