import React from 'react';

export default (props) => (
  <button className='button' {...props}>
    {props.title}
  </button>
);