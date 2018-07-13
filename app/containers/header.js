// @flow

import { connect } from 'react-redux';
import HeaderComponent from '../components/header';

const mapStateToProps = state => ({
  routing: state.routing,
});

export default connect(
  mapStateToProps,
  null,
)(HeaderComponent);
