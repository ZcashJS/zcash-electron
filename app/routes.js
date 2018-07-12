import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import Sidebar from './containers/sidebar';
import Chart from './views/chart';
import Dashboard from './containers/dashboard';
import Send from './views/send';
import Receive from './views/receive';
// import Transactions from './views/transactions';
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
        path='/send'
        component={Send}
      />
      <Route
        path='/receive'
        component={Receive}
      />
      {/* <Route
        path='/transactions'
        component={Transactions}
      /> */}
      <Route
        path='/chart'
        component={Chart}
      />
      <Route
        path='/settings'
        component={Settings}
      />
      <Route
        path='/status'
        component={Status}
      />
    </Switch>
  </div>
);
