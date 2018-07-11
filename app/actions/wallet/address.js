import { getListAddresses } from '../../services/api';
import {
  FETCH_LIST_ADDRESSES_REQUEST,
  FETCH_LIST_ADDRESSES_ERROR,
  FETCH_LIST_ADDRESSES_SUCCESS,
} from '../../constants/actions';

export const fetchListAddressesRequest = () => ({
  type: FETCH_LIST_ADDRESSES_REQUEST,
  payload: {},
});

export const fetchListAddressesError = (error) => ({
  type: FETCH_LIST_ADDRESSES_ERROR,
  payload: { error },
});

export const fetchListAddressesSuccess = (data) => ({
  type: FETCH_LIST_ADDRESSES_SUCCESS,
  payload: { data },
});

export const fetchListAddresses = () => (dispatch, getState) => {
  dispatch(fetchListAddressesRequest());

  return getListAddresses()
    .then((data) => dispatch(fetchListAddressesSuccess(data)))
    .catch((err) => dispatch(fetchListAddressesError(err)));
};
