import Vue from "vue";
import Vuex from "vuex";
import counter from "mfe1/Store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 0,
  },
  mutations: {
    incrementStep(state) {
      state.step++;
    },
  },
  modules: {
    counter,
  },
});
