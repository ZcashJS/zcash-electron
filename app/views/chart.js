import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Chart from '../components/chart';

export default class ChartView extends Component {
  render() {
    return (
      <div className='main'>
        <Header title='Chart' />
        <div className='main__no-scroller'>
          <Chart />
        </div>
      </div>
    );
  }
}
