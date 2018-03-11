import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Status extends Component {
  render() {
    return (
      <div className='main'>
        Status

        <Link to='/'>
          to dashboard
        </Link>
      </div>
    );
  }
}
