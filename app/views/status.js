import React, { Component } from 'react';
import decamelize from 'decamelize';
import stdrpc from 'stdrpc';
import methods from '../lib/methods';

export default class Status extends Component {
  state = { data: 0 };
  rpc = stdrpc({
    url: 'http://127.0.0.1:8232/',
    username: 'hrofu',
    password: 'testing123456',
    methodTransform: decamelize,
  });

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
        </div>
      </div>
    );
  }
}
