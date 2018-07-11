import { connect } from 'react-redux';
import Dashboard from '../views/dashboard';
import { fetchListAddresses } from '../actions/wallet/address';

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  fetchListAddresses: () => dispatch(fetchListAddresses()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);