// @flow

import React from 'react';

type Props = {
  children: any,
}

export default (props: Props) => (
  <div className='column'>
    {props.children}
  </div>
);
