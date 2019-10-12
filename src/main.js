import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import 'vant/lib/index.css';

import toastSelf from 'components/common/toast/index'

// import Swipe from 'vant/lib/swipe';
// import 'vant/lib/swipe/style';
// import SwipeItem from 'vant/lib/SwipeItem';
// import 'vant/lib/SwipeItem/style';
// import Lazyload from 'vant/lib/Lazyload';
// import 'vant/lib/Lazyload/style';
// import Toast from 'vant/lib/toast';
// import 'vant/lib/toast/style';

import {
  Swipe,
  SwipeItem,
  Lazyload,
  Toast,
} from 'vant';

Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(toastSelf).use(Toast);

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
