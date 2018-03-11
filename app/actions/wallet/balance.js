import { getWalletBalance } from '../../services/api';
import {
  FETCH_WALLET_BALANCE_REQUEST,
  FETCH_WALLET_BALANCE_ERROR,
  FETCH_WALLET_BALANCE_SUCCESS,
} from '../../constants/actions';

export const fetchWalletBalanceRequest = () => ({
  type: FETCH_WALLET_BALANCE_REQUEST,
  payload: {},
});

export const fetchWalletBalanceError = (error) => ({
  type: FETCH_WALLET_BALANCE_ERROR,
  payload: { error },
});

export const fetchWalletBalanceSuccess = (data) => ({
  type: FETCH_WALLET_BALANCE_SUCCESS,
  payload: { data },
});

export const fetchWalletBalance = () => (dispatch, getState) => {
  dispatch(fetchWalletBalanceRequest());

  return getWalletBalance()
    .then((data) => dispatch(fetchWalletBalanceSuccess(data)))
    .catch((err) => dispatch(fetchWalletBalanceError(err)));
};
