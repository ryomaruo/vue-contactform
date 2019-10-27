import Vue from 'vue';

import PrettyCheckbox from 'pretty-checkbox-vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(PrettyCheckbox);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
