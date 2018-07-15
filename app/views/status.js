import React, { Component } from 'react';
import methods from '../lib/methods';
import Zcash from '../lib/zcash';

export default class Status extends Component {
  state = { data: 0 };
  rpc = Zcash.connect('hrofuzcash', '938b35d716ff453a87bfabf24bee3513');

  handleMethod = (method) => {
    if (!method) return;
    this.rpc[method]().then(data => this.setState({ data }));
  }

  render() {
    const renderData = (data) => {
      if (typeof data === Object) { // eslint-disable-line
        return Object.keys(data).map(item => (
          <span key={Math.random()} > {item}: {data[item]} <br /></span>
        ));
      }

      return (<span>{data}</span>);
    };

    return (
      <div className='main-container'>
        {methods.map(method => (
          <button
            key={Math.random()}
            onClick={() => this.handleMethod(method)}
          >
            {method}
          </button>
        ))}
        <br />
        <div style={{ color: '#fff' }}>
          {renderData(this.state.data)}
          <button onClick={() => {
            this.rpc.z_getbalance('zcarspaeTAeJ7vMMKMjSZ1cdYiRj52AJcfgahbTa5s1FHXYLqN1VGSbYMBypfjSLvRjPD8rNGgfjJANSb8EucdvA6mZxYzw').then(data => console.log(data)); // eslint-disable-line
          }}
          >
            click me
          </button>
        </div>
      </div>
    );
  }
}
