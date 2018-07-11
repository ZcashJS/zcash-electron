import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import methods from '../lib/methods';
import Zcash from '../lib/zcash';

export default class Status extends Component {
  state = { data: 0 };
  rpc = Zcash.connect('hrofuzcash', '938b35d716ff453a87bfabf24bee3513');

  _handleMethod = (method) => {
    if (!method) return;
    this.rpc[method]().then((data) => this.setState({ data }));
  }

  render() {
    const renderData = (data) => {
      if (typeof data === Object) {
        return Object.keys(data).map((item) => (
          <span key= {Math.random()} > {item}: {data[item]} <br /></span>
        ));
      }

      return (<span>{data}</span>);
    }

    return (
      <div className='main'>
        <Header  title='Status' />
        {methods.map((method) => (
          <button
            key={Math.random()}
            onClick={() => this._handleMethod(method)}
          >
            {method}
          </button>
        ))}
        <br />
        <div style={{ color: '#fff' }}>
          {renderData(this.state.data)}
          <button onClick={() => {
            this.rpc.z_getbalance('zcarspaeTAeJ7vMMKMjSZ1cdYiRj52AJcfgahbTa5s1FHXYLqN1VGSbYMBypfjSLvRjPD8rNGgfjJANSb8EucdvA6mZxYzw').then((data) => console.log(data));
          }}>
            click me
          </button>
        </div>
      </div>
    );
  }
}