export default {
  namespaced: true,

  state: {
    count: 1,
  },

  mutations: {
    increment(state) {
      state.count++;
    },
  },
};
