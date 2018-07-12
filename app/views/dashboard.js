// @flow

import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/header';

type Props = {
  fetchListAddresses: Function,
  wallet: any,
}

export default class Dashboard extends PureComponent<Props> {
  componentDidMount() {
    const { fetchListAddresses } = this.props;
    fetchListAddresses();
  }

  render() {
    const { wallet: { addresses } } = this.props;

    return (
      <div className='main'>
        <Header title='Dashboard' />
        <b className='text-color'>All Available Addresses</b>
        <br />
        <br />
        {addresses.map(addr => (
          <div className='text-color'>{addr}</div>
        ))}
      </div>
    );
  }
}
