import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/header';
import Table from '../components/table';

export default () => (
  <div className='main'>
    <Header title='Transactions' />
    <Table />
  </div>
);
