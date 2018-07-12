// @flow

import React from 'react';

type Props = {
  value: any,
};

export default (props: Props) => (
  <div className='label'>
    {props.value}
  </div>
);
