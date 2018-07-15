// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderComponent from '../components/header';

export default withRouter(connect(
  null,
  null,
)(HeaderComponent));
