import * as actionTypes from './actionTypes';

const initialState = {
  author: {
    name: '',
    lastname: '',
  },
  item: {
    id: '',
    title: '',
    price: {
      currency: 'ARS',
      amount: 0,
      decimals: 0,
    },
    picture: '',
    condition: '',
    free_shipping: false,
    sold_quantity: 0,
    description: '',
  },
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
        ...action.detail,
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
