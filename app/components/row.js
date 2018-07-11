import React from 'react';
import cx from 'classnames';

const getClasses = (props) => cx(
  'row',
  { 'space-between': props.spaceBetween },
);

export default (props) => (
  <div className={getClasses(props)}>
    {props.children}
  </div>
);