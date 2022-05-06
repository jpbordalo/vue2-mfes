export default {
  namespaced: true,

  state: {
    services: {},
  },

  mutations: {
    setService: (state, services) => {
      state.services = { ...services };
    },
  },

  actions: {
    addService: ({ commit, state }, service) => {
      const servicesUpdated = { ...state.services, [service.type]: service };
      commit("setService", servicesUpdated);
    },

    /* removeService: ({ commit, state }, id) => {
      const servicesUpdated = state.services.filter((alert) => alert.id !== id);
      commit("setService", servicesUpdated);
    }, */
  },
};
