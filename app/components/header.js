// @flow

import React from 'react';

type Props = {
  title: string,
};

export default (props: Props) => (
  <div className='header'>
    <div className='header__title'>
      {props.title}
    </div>
  </div>
);
