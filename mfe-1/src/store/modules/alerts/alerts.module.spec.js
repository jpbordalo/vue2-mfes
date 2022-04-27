import { v4 as uuidv4 } from 'uuid';
import alerts from './alerts.module';

jest.mock('uuid');

describe('Store Alerts Module:', () => {
  describe('Mutations:', () => {
    it('Should update the alert state', () => {
      const messages = [{ type: 'info', message: 'Message' }];
      const state = { alerts: [] };
      alerts.mutations.setAlerts(state, messages);
      expect(state.alerts).toEqual(messages);
    });
  });

  describe('Actions:', () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    const uuid = 'fake-uuid';

    beforeEach(() => {
      jest.clearAllMocks();
      uuidv4.mockImplementation(() => uuid);
    });

    it('Should add an Alert', () => {
      const state = { alerts: [] };
      const message = { type: 'info', message: 'Message', id: 'uuid' };
      state.alerts = [];
      alerts.actions.addAlert({ commit, state }, message);

      expect(commit).toBeCalledWith('setAlerts', [message]);
    });

    it('Should remove a given alert', () => {
      const state = { alerts: [] };
      const messages = [
        { type: 'info', message: 'Message 0', id: 'randId_0' },
        { type: 'success', message: 'Message 1', id: 'randId_1' },
        { type: 'warning', message: 'Message 2', id: 'randId_2' },
      ];

      const updatedList = [
        { type: 'info', message: 'Message 0', id: 'randId_0' },
        { type: 'warning', message: 'Message 2', id: 'randId_2' },
      ];

      state.alerts = messages;
      alerts.actions.removeAlert({ commit, state }, messages[1].id);

      expect(commit).toBeCalledWith('setAlerts', updatedList);
    });

    it('Should display success alert', () => {
      const state = { alerts: [] };
      const successMessage = 'success message';

      alerts.actions.showSuccessAlert({ dispatch, state }, successMessage);
      const expectedMessage = { id: 'fake-uuid', message: 'success message', type: 'success' };

      expect(dispatch).toBeCalledWith('addAlert', expectedMessage);
    });

    it('Should display info alert', () => {
      const state = { alerts: [] };
      const infoMessage = 'info message';

      alerts.actions.showInfoAlert({ dispatch, state }, infoMessage);
      const expectedMessage = { id: 'fake-uuid', message: 'info message', type: 'info' };

      expect(dispatch).toBeCalledWith('addAlert', expectedMessage);
    });

    it('Should display error alert', () => {
      const state = { alerts: [] };
      const errorMessage = 'error message';

      alerts.actions.showErrorAlert({ dispatch, state }, errorMessage);
      const expectedMessage = { id: 'fake-uuid', message: 'error message', type: 'error' };

      expect(dispatch).toBeCalledWith('addAlert', expectedMessage);
    });

    it('Should display warning alert', () => {
      const state = { alerts: [] };
      const warningMessage = 'warning message';

      alerts.actions.showWarningAlert({ dispatch, state }, warningMessage);
      const expectedMessage = { id: 'fake-uuid', message: 'warning message', type: 'warning' };

      expect(dispatch).toBeCalledWith('addAlert', expectedMessage);
    });
  });
});
