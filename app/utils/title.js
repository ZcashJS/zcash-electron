// @flow

import {
  DASHBOARD_ROUTE,
  SEND_ROUTE,
  RECEIVE_ROUTE,
  SETTINGS_ROUTE,
  CHART_ROUTE,
  API_ROUTE,
} from '../constants/routes';

export const getPageTitle = (pathname: string) => {
  switch (pathname) {
    case DASHBOARD_ROUTE:
      return 'Dashboard';
    case SEND_ROUTE:
      return 'Send Zcash';
    case RECEIVE_ROUTE:
      return 'Receive Zcash';
    case SETTINGS_ROUTE:
      return 'Settings';
    case CHART_ROUTE:
      return 'Zcash Chart';
    case API_ROUTE:
      return 'API Test';
    default:
      break;
  }
};
