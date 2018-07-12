// @flow

import React from 'react';
import cx from 'classnames';

type Props = {
  children: any,
  spaceBetween: any,
}

export default (props: Props) => {
  const classNames = cx('row', {
    'space-between': props.spaceBetween,
  });

  return (
    <div className={classNames}>
      {props.children}
    </div>
  );
};
