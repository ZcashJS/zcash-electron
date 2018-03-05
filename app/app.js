import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Zcash from '../lib/zcash';
import methods from '../lib/methods';
import Header from './components/header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.rpc = Zcash.connect(
      'hrofuzcash',
      '938b35d716ff453a87bfabf24bee3513'
    );

    this.state = {
      data: '',
    }

    this._handleMethod = this._handleMethod.bind(this);
  }

  componentDidMount() {
    console.log('this', this.rpc);
  }

  _handleMethod(method) {
    if (!method) return;
    this.rpc[method]().then((data) => this.setState({ data }));
  }

  render() {
    const renderData = (data) => {
      if (typeof data === Object) {
        return Object.keys(data).map((item) => (
          <span key={Math.random()}>{item}: {data[item]}<br /></span>
        ));
      }

      return (<span>{data}</span>);
    }

    return (
      <div className='zcash'>
        <Header zcash={this.rpc} />
        <h1>Actions:</h1>
        {methods.map((method) => (
          <button
            key={Math.random()}
            onClick={() => this._handleMethod(method)}
          >
            {method}
          </button>
        ))}
        <br />
        <div>
          <h1>Data Results from ZCash Node:</h1>
          {renderData(this.state.data)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
