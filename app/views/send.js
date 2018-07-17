import React, { Component } from 'react';
import Button from '../components/button';
import Input from '../components/input';
import Row from '../components/row';

export default class Send extends Component {
  state = {
    fromAccount: 0,
    amount: 0,
    priority: 0,
    address: 0,
    notes: 0,
  };

  handleOnChange = (value, type) => this.setState({ [type]: value });

  render() {
    return (
      <div className='main-container'>
        <div className='form'>
          <Row>
            <Input
              label='Amount'
              onChange={evt => this.handleOnChange(evt.target.value, 'amount')}
              placeholder='99999 ZEC'
            />
            <Input
              label='Priority'
              onChange={evt => this.handleOnChange(evt.target.value, 'priority')}
              dropdown
              multi={false}
              placeholder='Default'
            />
          </Row>
          <Row>
            <Input
              label='From Account'
              largeInput
              onChange={evt => this.handleOnChange(evt.target.value, 'fromAccount')}
            />
          </Row>
          <Row>
            <Input
              label='Recipient Address'
              largeInput
              onChange={evt => this.handleOnChange(evt.target.value, 'address')}
            />
          </Row>
          <Row>
            <Input
              label='Notes'
              textArea
              largeInput
              onChange={evt => this.handleOnChange(evt.target.value, 'notes')}
            />
          </Row>
          <Row>
            <Button
              title='Send'
              onClick={() => {}}
            />
          </Row>
        </div>
        <div style={{ color: '#fff' }}>
          <br />
          {Object.keys(this.state).map(key => (
            <span key={Math.random()}>{key}: {this.state[key]}<br /></span>
          ))}
        </div>
      </div>
    );
  }
}
