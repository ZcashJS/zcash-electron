import React, { Component } from 'react';
import QRCode from '../components/qrcode';
import Input from '../components/input';
import Button from '../components/button';
import Row from '../components/row';

export default class Receive extends Component {
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
              label='Priority'
              onChange={evt => this.handleOnChange(evt.target.value, 'priority')}
              dropdown
              multi={false}
              placeholder='Default'
            />
            <QRCode address='zcash addr here' />
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
          <Button
            title='Send'
            onClick={() => { }}
          />
          <div style={{ color: '#fff' }}>
            <br />
            {Object.keys(this.state).map(key => (
              <span key={Math.random()}>{key}: {this.state[key]}<br /></span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
