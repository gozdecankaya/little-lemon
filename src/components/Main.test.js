import { initializeTimes, updateTimes } from './Main';
import * as api from '../api';

test('initializeTimes returns a non-empty array of available times from API', () => {
  const fetchSpy = jest.spyOn(api, 'fetchAPI');

  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);
  fetchSpy.mockRestore();
});

test('updateTimes returns the correct updated times based on the selected date', () => {
  const fetchSpy = jest.spyOn(api, 'fetchAPI');
  const currentState = ['17:00', '18:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-05-20' };

  const result = updateTimes(currentState, action);

  expect(fetchSpy).toHaveBeenCalledWith('2026-05-20');
  fetchSpy.mockRestore();
});
