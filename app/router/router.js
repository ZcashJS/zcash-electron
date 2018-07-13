import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import SidebarContainer from '../containers/sidebar';
import HeaderContainer from '../containers/header';
import ChartView from '../views/chart';
import DashboardContainer from '../containers/dashboard';
import SendView from '../views/send';
import ReceiveView from '../views/receive';
import SettingsView from '../views/settings';
import StatusView from '../views/status';

import ScrollTop from '../utils/scroll-top';

export default () => (
  <div className='zcash'>
    <div className='zcash__header'>
      <HeaderContainer />
    </div>
    <SidebarContainer />
    <div className='zcash__body'>
      <ScrollTop>
        <Switch>
          <Route
            exact
            path='/'
            component={DashboardContainer}
          />
          <Route
            path='/send'
            component={SendView}
          />
          <Route
            path='/receive'
            component={ReceiveView}
          />
          <Route
            path='/chart'
            component={ChartView}
          />
          <Route
            path='/settings'
            component={SettingsView}
          />
          <Route
            path='/status'
            component={StatusView}
          />
        </Switch>
      </ScrollTop>
    </div>
  </div>
);
