const MODULE_NAME = 'alerts';

const MODULE_STATE = {
  ALERTS: 'alerts',
};

const MODULE_MUTATIONS = {
  SET_ALERTS: 'setAlerts',
};

const MODULE_ACTIONS = {
  ADD_ALERT: 'addAlert',
  REMOVE_ALERT: 'removeAlert',
  SHOW_SUCCESS_ALERT: 'showSuccessAlert',
  SHOW_INFO_ALERT: 'showInfoAlert',
  SHOW_ERROR_ALERT: 'showErrorAlert',
  SHOW_WARNING_ALERT: 'showWarningAlert',
};

export { MODULE_NAME, MODULE_STATE, MODULE_MUTATIONS, MODULE_ACTIONS };
