import { getNetworkMarketCap } from '../../services/api';
import {
  FETCH_MARKET_CAP_REQUEST,
  FETCH_MARKET_CAP_ERROR,
  FETCH_MARKET_CAP_SUCCESS,
} from '../../constants/actions';

export const fetchMarketCapRequest = () => ({
  type: FETCH_MARKET_CAP_REQUEST,
  payload: {},
});

export const fetchMarketCapError = error => ({
  type: FETCH_MARKET_CAP_ERROR,
  payload: { error },
});

export const fetchMarketCapSuccess = data => ({
  type: FETCH_MARKET_CAP_SUCCESS,
  payload: { data },
});

export const fetchMarketCap = () => (dispatch) => {
  dispatch(fetchMarketCapRequest());

  return getNetworkMarketCap()
    .then(data => dispatch(fetchMarketCapSuccess(data)))
    .catch(err => dispatch(fetchMarketCapError(err)));
};
