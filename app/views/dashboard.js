import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';

export default class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchListAddresses();
  }

  render() {
    const { wallet: { addresses } } = this.props;

    return (
      <div className='main'>
        <Header title='Dashboard' />
        <b className='text-color'>All Available Addresses</b>
        <br />
        <br />
        {addresses.map((addr) => (
          <div className='text-color'>{addr}</div>
        ))}
      </div>
    );
  }
}
