import React from 'react';
import QRCode from 'qrcode.react';

export default (props) => (
  <div className='qrcode'>
    <QRCode
      value={props.address}
    />
  </div>
);
