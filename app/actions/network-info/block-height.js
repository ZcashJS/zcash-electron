import { getNetworkBlockHeight } from '../../services/api';
import {
  FETCH_BLOCK_HEIGHT_REQUEST,
  FETCH_BLOCK_HEIGHT_ERROR,
  FETCH_BLOCK_HEIGHT_SUCCESS,
} from '../../constants/actions';

export const fetchBlockHeightRequest = () => ({
  type: FETCH_BLOCK_HEIGHT_REQUEST,
  payload: {},
});

export const fetchBlockHeightError = (error) => ({
  type: FETCH_BLOCK_HEIGHT_ERROR,
  payload: { error },
});

export const fetchBlockHeightSuccess = (data) => ({
  type: FETCH_BLOCK_HEIGHT_SUCCESS,
  payload: { data },
});

export const fetchBlockHeight = () => (dispatch, getState) => {
  dispatch(fetchBlockHeightRequest());

  return getNetworkBlockHeight()
    .then((data) => dispatch(fetchBlockHeightSuccess(data)))
    .catch((err) => dispatch(fetchBlockHeightError(err)));
};
