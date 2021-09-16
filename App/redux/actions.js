import {SET_NUMBER} from './types';

export const setNumberSuccess = num => ({
  type: SET_NUMBER,
  payload: {num},
});
