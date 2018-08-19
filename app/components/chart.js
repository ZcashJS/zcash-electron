import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';

export default props => (
  <div className='chart'>
    <TradingViewWidget
      symbol='ZECUSD'
      locale='en'
      theme='Dark'
      // autosize
      {...props}
    />
  </div>
);
