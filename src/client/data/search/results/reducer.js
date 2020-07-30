import * as actionTypes from './actionTypes';

const initialState = {
  categories: [],
  items: [],
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET:
      return state;
    case actionTypes.GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_SUCCESS:
      return {
        categories: [
          ...action.data.categories
        ],
        items: [
          ...action.data.items
        ],
        isLoading: false,
      };
    case actionTypes.GET_ERROR:
      return initialState;
    case actionTypes.EMPTY:
      return state;
    case actionTypes.EMPTY_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
