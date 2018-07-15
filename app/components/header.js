// @flow

import React from 'react';
import { getPageTitle } from '../utils/title';

type Props = {
  location: Object,
};

export default (props: Props) => {
  const { location: { pathname } } = props;

  return (
    <div className='header'>
      <div className='header__title'>
        {getPageTitle(pathname)}
      </div>
    </div>
  );
};
