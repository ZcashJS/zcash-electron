import { getNetworkHashRate } from '../../services/api';
import {
  FETCH_NETWORK_HASH_REQUEST,
  FETCH_NETWORK_HASH_ERROR,
  FETCH_NETWORK_HASH_SUCCESS,
} from '../../constants/actions';

export const fetchNetworkHashRateRequest = () => ({
  type: FETCH_NETWORK_HASH_REQUEST,
  payload: {},
});

export const fetchNetworkHashRateError = error => ({
  type: FETCH_NETWORK_HASH_ERROR,
  payload: { error },
});

export const fetchNetworkHashRateSuccess = data => ({
  type: FETCH_NETWORK_HASH_SUCCESS,
  payload: { data },
});

export const fetchNetworkHashRate = () => (dispatch) => {
  dispatch(fetchNetworkHashRateRequest());

  return getNetworkHashRate()
    .then(data => dispatch(fetchNetworkHashRateSuccess(data)))
    .catch(err => dispatch(fetchNetworkHashRateError(err)));
};
