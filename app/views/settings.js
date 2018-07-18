import React from 'react';
import Button from '../components/button';
import Row from '../components/row';
import Column from '../components/column';

export default () => (
  <div className='main-container'>
    <div className='settings__section-title'>
      Wallet
    </div>
    <Row>
      <Column>
        <div className='settings__option-label'>
          Encrypt and further protect the Wallet.
        </div>
        <Button title='Encrypt Wallet' />
      </Column>
    </Row>

    <Row>
      <Column>
        <div className='settings__option-label'>
          Dump Wallet contents to file.
        </div>
        <Button title='Dump Wallet' />
      </Column>
    </Row>
    <Row>
      <Column>
        <div className='settings__option-label'>
          Export Wallet contents to file.
        </div>
        <Button title='Export Wallet' />
      </Column>
    </Row>
    <div className='settings__section-title'>
      Keys
    </div>
    <Row>
      <Column>
        <div className='settings__option-label'>
          Exports private keys for all addresses into text files.
        </div>
        <Button title='Export Private Keys' />
      </Column>
    </Row>
  </div>
);
