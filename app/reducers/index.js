import { combineReducers } from 'redux';
import networkReducer from './network';
import walletReducer from './wallet';

export default combineReducers({
  network: networkReducer,
  wallet: walletReducer,
});
