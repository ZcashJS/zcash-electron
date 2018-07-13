import {
  FETCH_BLOCK_HEIGHT_SUCCESS,
  FETCH_NETWORK_HASH_SUCCESS,
  FETCH_MARKET_CAP_SUCCESS,
} from '../constants/actions';

const initialState = {
  blockHeight: 0,
  hashRate: 0,
  asset: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOCK_HEIGHT_SUCCESS: {
      return {
        ...state,
        blockHeight: action.payload.data,
      };
    }
    case FETCH_NETWORK_HASH_SUCCESS: {
      return {
        ...state,
        hashRate: action.payload.data,
      };
    }
    case FETCH_MARKET_CAP_SUCCESS: {
      return {
        ...state,
        asset: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};
