import Zcash from '../lib/zcash';

const CMC_API = 'https://api.coinmarketcap.com/v1/ticker/zcash/';
export const zcash = Zcash.connect(
  'hrofuzcash',
  '938b35d716ff453a87bfabf24bee3513',
);

// Network Info
export const getNetworkBlockHeight = () => zcash.getblockcount();
export const getNetworkHashRate = () => zcash.getnetworkhashps();
export const getNetworkMarketCap = () => fetch(CMC_API)
  .then(res => res.json())
  .then(array => array && array[0]);

// Wallet
export const getWalletBalance = () => zcash.z_gettotalbalance();
export const getListAddresses = () => zcash.z_listaddresses();
export const getFeeEstimate = () => zcash.estimatefee();
export const getTransactions = () => zcash.listtransactions();
export const getListOfAccounts = () => zcash.listaccounts();
