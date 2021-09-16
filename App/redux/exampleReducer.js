import {SET_NUMBER} from './types';

const initialState = {
  number: 0,
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER:
      return {
        number: action.payload.num,
      };

    default:
      return state;
  }
};

export default exampleReducer;
