// @flow

import React from 'react';
import QRCode from 'qrcode.react';

type Props = {
  address: any,
};

export default (props: Props) => (
  <div className='qrcode'>
    <QRCode
      value={props.address}
    />
  </div>
);
