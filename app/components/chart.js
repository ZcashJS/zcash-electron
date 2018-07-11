import React, { Component } from 'react';
import TradingViewWidget from 'react-tradingview-widget';

export default (props) => (
  <TradingViewWidget
    symbol='ZECUSD'
    locale='en'
    theme='Dark'
    autosize
    {...props}
  />
);
