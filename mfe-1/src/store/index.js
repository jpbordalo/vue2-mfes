import Vue from "vue";
import Vuex from "vuex";
/* import digitalTwin from '../../digital-twin/src/store/modules/digitalTwin/digitalTwin.module';
import lionConfiguration from '../../digital-twin/src/store/modules/lionConfiguration/lionConfiguration.module';
import workflowModule from '../../workflow/src/store/workflow.module';
import alerts from './modules/alerts/alerts.module'; */

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  modules: {},
});
