import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
