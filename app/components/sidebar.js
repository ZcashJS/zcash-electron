// @flow

import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { formatCurrency } from '../utils/format';
import logo from '../assets/zcash-logo.png';

type Props = {
  network: any,
  fetchBlockHeight: Function,
  fetchNetworkHashRate: Function,
  fetchMarketCap: Function,
  fetchWalletBalance: Function,
};

export default class extends PureComponent<Props> {
  componentDidMount() {
    const {
      fetchBlockHeight,
      fetchNetworkHashRate,
      fetchMarketCap,
      fetchWalletBalance,
    } = this.props;

    fetchBlockHeight();
    fetchNetworkHashRate();
    fetchMarketCap();
    fetchWalletBalance();
  }

  renderHeader = () => (
    <div className='sidebar__header'>
      <div className='sidebar__header-content'>
        <div className='sidebar__header-title'>
          <img src={logo} alt='ZCash' />
        </div>
        <div className='sidebar__balance'>
          <div className='sidebar__balance-label'>
              Total Balance
          </div>
          <div className='sidebar__balance-value'>
              232.57
          </div>
          <div className='sidebar__balance-sub-value'>
            {formatCurrency(77789.12)}
          </div>
        </div>
      </div>
    </div>
  )

  renderMenu = () => {
    const menuRoutes = [
      { route: '/', label: 'Dashboard' },
      { route: '/send', label: 'Send' },
      { route: '/receive', label: 'Receive' },
      // { route: '/transactions', label: 'Transactions' },
      { route: '/chart', label: 'Chart' },
      { route: '/settings', label: 'Settings' },
      { route: '/status', label: 'ZCash API Test' },
    ];

    return (
      <div className='sidebar__menu'>
        {menuRoutes.map(item => (
          <NavLink
            key={item.route}
            to={item.route}
            exact
            activeClassName='active'
            className='sidebar__menu-item'
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    );
  }

  renderInfo = () => {
    const { network } = this.props;

    return (
      <div className='sidebar__info'>
        <div className='sidebar__info-content'>
          <div className='sidebar__info-title'>
            Zcash Network
          </div>
          <div className='sidebar__info-line'>
            <span className='sidebar__info-line-label'>
              ZEC Price
            </span>
            <span className='sidebar__info-line-value'>
              {formatCurrency(network.asset.price_usd)}
            </span>
          </div>
          <div className='sidebar__info-line'>
            <span className='sidebar__info-line-label'>
              Market Cap
            </span>
            <span className='sidebar__info-line-value'>
              {formatCurrency(network.asset.market_cap_usd)}
            </span>
          </div>
          <div className='sidebar__info-line'>
            <span className='sidebar__info-line-label'>
              Chain Height
            </span>
            <span className='sidebar__info-line-value'>
              {network.blockHeight}
            </span>
          </div>
          <div className='sidebar__info-line'>
            <span className='sidebar__info-line-label'>
              Hash Rate
            </span>
            <span className='sidebar__info-line-value'>
              {network.hashRate} Sol/s
            </span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='sidebar'>
        {this.renderHeader()}
        {this.renderMenu()}
        {this.renderInfo()}
      </div>
    );
  }
}
