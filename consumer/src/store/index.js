import Vue from "vue";
import Vuex from "vuex";
import counter from "mfe1/Store";
import serviceRegister from "./modules/serviceRegister/serviceRegister.module";

Vue.use(Vuex);

// export default new Vuex.Store({
const store = new Vuex.Store({
  state: {
    step: 0,
  },
  mutations: {
    incrementStep(state) {
      state.step++;
    },
  },
  modules: {
    // counter,
  },
});

store.registerModule("counter", counter);
store.registerModule("serviceRegister", serviceRegister);

export default store;
