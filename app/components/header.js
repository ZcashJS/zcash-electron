// @flow

import React from 'react';

type Props = {
  routing: Object,
};

export default (props: Props) => {
  const { routing: { location: { pathname } } } = props;

  // const getTitle = () => {
  //   if (pathname === '/') {
  //     return 'Dashboard';
  //   }
  //   return pathname;
  // };

  return (
    <div className='header'>
      <div className='header__title'>
        Dashboard
      </div>
    </div>
  );
};
