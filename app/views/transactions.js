import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Table from '../components/table';

export default class Transactions extends Component {
  render() {
    return (
      <div className='main'>
        <Header title='Transactions' />
        <Table />
      </div>
    );
  }
}