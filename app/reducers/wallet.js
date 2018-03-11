import {
  FETCH_WALLET_BALANCE_SUCCESS,
} from '../constants/actions';

const initialState = {
  balance: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WALLET_BALANCE_SUCCESS: {
      return {
        ...state,
        balance: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};