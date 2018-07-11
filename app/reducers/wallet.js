import {
  FETCH_WALLET_BALANCE_SUCCESS,
  FETCH_LIST_ADDRESSES_SUCCESS,
} from '../constants/actions';

const initialState = {
  balance: 0,
  addresses: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WALLET_BALANCE_SUCCESS: {
      return {
        ...state,
        balance: action.payload.data,
      };
    }
    case FETCH_LIST_ADDRESSES_SUCCESS: {
      return {
        ...state,
        addresses: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};