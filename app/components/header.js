import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blockHeight: null,
      networkHash: null,
    };
  }

  componentDidMount() {
    this.props.zcash.getblockcount()
      .then((data) => this.setState({ blockHeight: data }));

    this.props.zcash.getnetworkhashps()
      .then((data) => this.setState({ networkHash: data }));
  }

  render() {
    return (
      <div className='header'>
        <div>
          Block Height: {this.state.blockHeight}
        </div>
        <div>
          Network Hash Rate: {this.state.networkHash}
        </div>
      </div>
    )
  }
}