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
import {
  DASHBOARD_ROUTE,
  SEND_ROUTE,
  RECEIVE_ROUTE,
  SETTINGS_ROUTE,
  CHART_ROUTE,
  API_ROUTE,
} from '../constants/routes';

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
            path={DASHBOARD_ROUTE}
            component={DashboardContainer}
          />
          <Route
            path={SEND_ROUTE}
            component={SendView}
          />
          <Route
            path={RECEIVE_ROUTE}
            component={ReceiveView}
          />
          <Route
            path={CHART_ROUTE}
            component={ChartView}
          />
          <Route
            path={SETTINGS_ROUTE}
            component={SettingsView}
          />
          <Route
            path={API_ROUTE}
            component={StatusView}
          />
        </Switch>
      </ScrollTop>
    </div>
  </div>
);
