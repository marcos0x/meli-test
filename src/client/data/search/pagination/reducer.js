import * as actionTypes from './actionTypes';

const initialState = {
  items: [],
  pagination: {
    loading: false,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PAGE:
      return state;
    case actionTypes.GET_PAGE_REQUEST:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          loading: true
        }
      };
    case actionTypes.GET_PAGE_SUCCESS: {
      const { items = [], pagination } = action.data;
      return {
        ...state,
        items: pagination.page === 1 ? [...items] : [...state.items, ...items],
        pagination: {
          ...pagination,
          loading: false
        }
      };
    }
    case actionTypes.GET_PAGE_ERROR:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          loading: false
        }
      };
    default:
      return state;
  }
};
