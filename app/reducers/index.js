import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import networkReducer from './network';
import walletReducer from './wallet';
import headerReducer from './header';

export default combineReducers({
  routing: routerReducer,
  network: networkReducer,
  wallet: walletReducer,
  header: headerReducer,
});
