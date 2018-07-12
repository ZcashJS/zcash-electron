// @flow

import React from 'react';

type Props = {
  title: string,
}

export default (props: Props) => (
  <button className='button' {...props}>
    {props.title}
  </button>
);
