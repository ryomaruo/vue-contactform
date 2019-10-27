import Vue from 'vue';
import Vuex from 'vuex';

import contactform from './contactform';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contactform,
  },
});
