import Vue from 'vue';
import Vuex from 'vuex';

import action from '@store/action';
import getter from '@store/getter';
import mutation from '@store/mutation';
import state from '@store/state';


Vue.use(Vuex);

new Vuex({
  state,
  getter,
  mutation,
  action,
})