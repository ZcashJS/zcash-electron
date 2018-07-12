import React from 'react';
import ReactTable from 'react-table';
import '../styles/vendor/react-table.scss';

const data = [
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
  {
    date: '07/21/2018 at 12:15pm',
    from: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    to: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
    amount: '500 ZEC',
  },
];

const columns = [
  {
    Header: 'Date & Time',
    accessor: 'date',
  }, {
    Header: 'From',
    accessor: 'from',
  },
  {
    Header: 'To',
    accessor: 'to',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
];

export default () => (
  <ReactTable
    data={data}
    columns={columns}
    defaultPageSize={10}
    className='-highlight table'
    resizable={false}
  />
);
