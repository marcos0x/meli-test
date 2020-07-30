import * as actionTypes from './actionTypes';

export const initialState = {
  query: '',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET:
      return { ...state };
    case actionTypes.SET_SUCCESS:
      return {
        query: action.query
      };
    default:
      return state;
  }
}
