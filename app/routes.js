import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import Sidebar from './containers/sidebar';
import Dashboard from './views/dashboard';
import Send from './views/send';
import Receive from './views/receive';
import Transactions from './views/transactions';
import Settings from './views/settings';
import Status from './views/status';

export default () => (
  <div className='zcash'>
    {/* Sidebar */}
    <Sidebar />
    {/* Routes */}
    <Switch>
      <Route
        exact
        path='/'
        component={Dashboard}
      />
      <Route
        exact
        path='/send'
        component={Send}
      />
      <Route
        exact
        path='/receive'
        component={Receive}
      />
      <Route
        exact
        path='/transactions'
        component={Transactions}
      />
      <Route
        exact
        path='/settings'
        component={Settings}
      />
    </Switch>
  </div>
);
