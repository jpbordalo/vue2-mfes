import ALERT_TYPE from '@/common/maps/alert.map';
import AlertBuilder from '@/models/factories/alert.builder';

export default {
  namespaced: true,

  state: {
    alerts: [],
  },

  mutations: {
    setAlerts: (state, alerts) => {
      state.alerts = [...alerts];
    },
  },

  actions: {
    addAlert: ({ commit, state }, alert) => {
      const alertsUpdated = [...state.alerts, alert];
      commit('setAlerts', alertsUpdated);
    },

    removeAlert: ({ commit, state }, id) => {
      const alertsUpdated = state.alerts.filter((alert) => alert.id !== id);
      commit('setAlerts', alertsUpdated);
    },

    showSuccessAlert: ({ dispatch }, message) => {
      const alert = new AlertBuilder().setType(ALERT_TYPE.SUCCESS).setMessage(message).getAlert();
      dispatch('addAlert', alert);
    },

    showInfoAlert: ({ dispatch }, message) => {
      const alert = new AlertBuilder().setType(ALERT_TYPE.INFO).setMessage(message).getAlert();
      dispatch('addAlert', alert);
    },

    showErrorAlert: ({ dispatch }, message) => {
      const alert = new AlertBuilder().setType(ALERT_TYPE.ERROR).setMessage(message).getAlert();
      dispatch('addAlert', alert);
    },

    showWarningAlert: ({ dispatch }, message) => {
      const alert = new AlertBuilder().setType(ALERT_TYPE.WARNING).setMessage(message).getAlert();
      dispatch('addAlert', alert);
    },
  },
};
