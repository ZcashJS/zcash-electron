import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import { fetchBlockHeight } from '../actions/network-info/block-height';
import { fetchNetworkHashRate } from '../actions/network-info/hash-rate';
import { fetchMarketCap } from '../actions/network-info/market-cap';
import { fetchWalletBalance } from '../actions/wallet/balance';

const mapStateToProps = state => ({
  network: state.network,
  wallet: state.wallet,
});

const mapDispatchToProps = dispatch => ({
  fetchBlockHeight: () => dispatch(fetchBlockHeight()),
  fetchNetworkHashRate: () => dispatch(fetchNetworkHashRate()),
  fetchMarketCap: () => dispatch(fetchMarketCap()),
  fetchWalletBalance: () => dispatch(fetchWalletBalance()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar));
