import React from 'react';
import Label from '../components/label';
import Button from '../components/button';

export default () => (
  <div className='main-container'>
    <div className='main__scroller'>
      <Label value='Wallet' />
      <div className='text-color'>
        Encrypt and further protect the Wallet.
      </div>
      <Button title='Encrypt Wallet' />
      <div className='text-color'>
        Dump Wallet contents to file.
      </div>
      <Button title='Dump Wallet' />
      <div className='text-color'>
        Export Wallet contents to file.
      </div>
      <Button title='Export Wallet' />
      <br />
      <br />
      <br />
      <Label value='Keys' />
      <div className='text-color'>
        Exports private keys for all addresses into text files.
      </div>
      <Button title='Export Private Keys' />
      <div className='text-color'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <Button title='Export Private Keys' />
      <br />
      <br />
      <br />
      <Label value='Keys' />
      <div className='text-color'>
        Exports private keys for all addresses into text files.
      </div>
      <Button title='Export Private Keys' />
      <div className='text-color'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
      <Button title='Export Private Keys' />
    </div>
  </div>
);
